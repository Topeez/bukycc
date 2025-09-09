import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Úvod',
      href: '#uvod',
    },
    {
      text: 'Služby',
      links: [
        {
          text: 'Renovace odpadního potrubí',
          href: '#sluzby',
        },
        {
          text: 'Tlakové čištění odpadů',
          href: '#sluzby',
        },
        {
          text: 'Frézování kanalizace',
          href: '#sluzby',
        },
        {
          text: 'Kamerový monitoring potrubí',
          href: '#sluzby',
        },
        {
          text: 'Bezvýkopové opravy',
          href: '#sluzby',
        },
      ],
    },
    {
      text: 'Jak to funguje',
      href: '#jak-to-funguje',
    },
    {
      text: 'Proč Buky?',
      href: '#',
    },
    {
      text: 'Reference',
      href: '#reference',
    },
    {
      text: 'Kontakt',
      href: '#',
    },
  ],
};

export const footerData = {
  links: [
    // {
    //   title: 'Product',
    //   links: [
    //     { text: 'Features', href: '#' },
    //     { text: 'Security', href: '#' },
    //     { text: 'Team', href: '#' },
    //     { text: 'Enterprise', href: '#' },
    //     { text: 'Customer stories', href: '#' },
    //     { text: 'Pricing', href: '#' },
    //     { text: 'Resources', href: '#' },
    //   ],
    // },
    // {
    //   title: 'Platform',
    //   links: [
    //     { text: 'Developer API', href: '#' },
    //     { text: 'Partners', href: '#' },
    //     { text: 'Atom', href: '#' },
    //     { text: 'Electron', href: '#' },
    //     { text: 'AstroWind Desktop', href: '#' },
    //   ],
    // },
    // {
    //   title: 'Support',
    //   links: [
    //     { text: 'Docs', href: '#' },
    //     { text: 'Community Forum', href: '#' },
    //     { text: 'Professional Services', href: '#' },
    //     { text: 'Skills', href: '#' },
    //     { text: 'Status', href: '#' },
    //   ],
    // },
    // {
    //   title: 'Company',
    //   links: [
    //     { text: 'About', href: '#' },
    //     { text: 'Blog', href: '#' },
    //     { text: 'Careers', href: '#' },
    //     { text: 'Press', href: '#' },
    //     { text: 'Inclusion', href: '#' },
    //     { text: 'Social Impact', href: '#' },
    //     { text: 'Shop', href: '#' },
    //   ],
    // },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    // { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    // { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    // { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    // { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    // { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  footNote: `
    <img class="w-8 h-5 md:w-8 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://swcookies.com/_astro/swc_logo_50.8NAVAE2m_5xFeo.webp" alt="onWidget logo" loading="lazy"></img>
    Made by <a class="text-amber-950 font-bold underline dark:text-muted" href="https://swcookies.com/"> Software Cookies Team</a> · Všechna práva vyhrazena.
  `,
};
