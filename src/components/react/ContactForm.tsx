import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
interface Props {
  className?: string;
}
const Contact: React.FC<Props> = ({ className }) => {
  const [openContactForm, setOpenContactForm] = useState<boolean>(true);
  const [jmenoAPrijmenti, setJmenoAPrijmenti] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [zprava, setZprava] = useState<string>('');

  const inputClasses =
    'bg-white mt-2 p-2 border focus:border-purple-600 rounded-lg focus:outline-none w-full transition-colors duration-200 ease-in-out';

  //onSubmit

  const sendEmailFromEmailJS = async (
    e: React.FormEvent<HTMLFormElement>,
    { email, zprava, jmenoAPrijmenti }: { email: string; zprava: string; jmenoAPrijmenti: string }
  ) => {
    const templateParams = {
      SERVICE_ID: 'service_v44qt99',
      TEMPLATE_ID: 'template_v5xxyiz',
      PUBLIC_KEY: 'oO5K1Zz6OMSAJtCs8',
      formData: {
        email,
        zprava,
        jmenoAPrijmenti,
      },
    };
    const response = await emailjs.send(
      templateParams.SERVICE_ID,
      templateParams.TEMPLATE_ID,
      templateParams.formData,
      templateParams.PUBLIC_KEY
    );
    console.log(response);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //Validation of jmenoAPrijmenti can not be empty
    if (jmenoAPrijmenti.length === 0) {
      alert('Jméno a příjmení nemůže být prázdné');
      return;
    }
    //validation of email - email must be valid by the known regular expression
    const emailRegex = new RegExp('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$');
    if (!emailRegex.test(email)) {
      alert('Email není validní');
      return;
    }
    //validation of zprava - zprava can not be empty
    if (zprava.length === 0) {
      alert('Zpráva nemůže být prázdná');
      return;
    }
    //validation of zprava - zprava must be longer than 10 characters
    if (zprava.length < 10) {
      alert('Zpráva musí být delší než 10 znaků');
      return;
    }
    //validation of zprava - zprava must be shorter than 1000 characters
    if (zprava.length > 1000) {
      alert('Zpráva musí být kratší než 1000 znaků');
      return;
    }

    //validation of zprava - zprava must not contain any of the following words: 'kurva', 'píča', 'sračka', 'kokot', 'debil', 'idiot', 'hovno', 'prdel', 'pica', 'sračka', 'kokot', 'debil', 'idiot', 'hovno', 'prdel'
    const zpravaWords = zprava.split(' ');
    const forbiddenWords = [
      'kurva',
      'píča',
      'sračka',
      'kokot',
      'debil',
      'idiot',
      'hovno',
      'prdel',
      'pica',
      'sračka',
      'kokot',
      'debil',
      'idiot',
      'hovno',
      'prdel',
    ];
    for (let i = 0; i < zpravaWords.length; i++) {
      if (forbiddenWords.includes(zpravaWords[i])) {
        alert('Zpráva obsahuje zakázané slovo');
        return;
      }
    }
    //Validation of zprava - zprava can not contain any links
    const zpravaLinks = zprava.split(' ');
    for (let i = 0; i < zpravaLinks.length; i++) {
      if (zpravaLinks[i].includes('http://') || zpravaLinks[i].includes('https://')) {
        alert('Zpráva nemůže obsahovat odkazy');
        return;
      }
    }
    //Validation of zprava - zprava can not contain any phone numbers
    const zpravaPhoneNumbers = zprava.split(' ');
    for (let i = 0; i < zpravaPhoneNumbers.length; i++) {
      if (zpravaPhoneNumbers[i].includes('+420') || zpravaPhoneNumbers[i].includes('+421')) {
        alert('Zpráva nemůže obsahovat telefonní čísla');
        return;
      }
    }
    //Validation of zprava - zprava can not contain any email addresses
    const zpravaEmails = zprava.split(' ');
    for (let i = 0; i < zpravaEmails.length; i++) {
      if (zpravaEmails[i].includes('@')) {
        alert('Zpráva nemůže obsahovat emailové adresy');
        return;
      }
    }

    //Here will be a submit to the Strapi backend on url https://private.gswps.eu:10443/api/contak-from-antikoncepces where the payload will be {name, email, message}. For this call fetch api will be used. All possible errors will be handled.
    sendEmailFromEmailJS(e, { email, zprava, jmenoAPrijmenti });

    alert('Zpráva byla úspěšně odeslána');
    setOpenContactForm(false);
    setJmenoAPrijmenti('');
    setEmail('');
    setZprava('');
  };

  return (
    <div className={`w-full ${className} self-center`}>
      {!openContactForm && (
        <button
          className="bg-gradient-to-br from-[#23455d] hover:from-[#23455d] via-[#23455d] hover:via-[#23455d] to-[#23455d] hover:to-[#23455d] shadow-lg px-6 py-3 rounded font-semibold text-white hover:scale-105 transition-all duration-700 ease-linear"
          onClick={() => {
            setOpenContactForm(!openContactForm);
          }}
        >
          Otevřít kontaktní formulář
        </button>
      )}

      {openContactForm && (
        <div className="flex flex-col justify-center items-center bg-white shadow-md p-5 rounded-xl w-full lg:w-3/4 cs-container">
          <form className="flex flex-col justify-center items-center gap-4 w-full" onSubmit={handleSubmit}>
            <div className="w-full text-left">
              <label htmlFor="jmenoAPrijmenti" className="font-sans font-bold text-left">
                Jméno a příjmení
              </label>
              <input
                className={inputClasses}
                type="text"
                placeholder="Zadejte jméno a příjmení"
                value={jmenoAPrijmenti}
                onChange={({ target }) => {
                  setJmenoAPrijmenti(target.value);
                }}
              />
            </div>
            <div className="w-full text-left">
              <label htmlFor="email" className="font-sans font-bold text-left">
                E-mail
              </label>
              <input
                className={inputClasses}
                type="email"
                placeholder="Zadejte email"
                value={email}
                onChange={({ target }) => {
                  setEmail(target.value);
                }}
              />
            </div>
            <div className="w-full text-left">
              <label htmlFor="zprava" className="font-sans font-bold text-left">
                Zpráva
              </label>
              <textarea
                className={inputClasses}
                placeholder="Zadejte zprávu"
                value={zprava}
                onChange={({ target }) => {
                  setZprava(target.value);
                }}
              />
            </div>
            <input
              type="submit"
              value="Odeslat"
              className="hover:text-white hover:scale-105 transition-all duration-400 ease-linear btn"
            />
          </form>
        </div>
      )}
    </div>
  );
};

export default Contact;
