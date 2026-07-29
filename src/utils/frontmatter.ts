// Kod pro formatovani md a mdx souboru do html

import getReadingTime from 'reading-time';
import { toString } from 'mdast-util-to-string';
import { visit } from 'unist-util-visit';
import type { Root as MdastRoot } from 'mdast';
import type { Root as HastRoot, Element } from 'hast';
import type { Plugin } from 'unified';
import type { VFile } from 'vfile';

type RemarkPlugin = Plugin<[], MdastRoot>;
type RehypePlugin = Plugin<[], HastRoot>;

interface AstroVFile extends VFile {
  data: {
    astro?: {
      frontmatter?: {
        readingTime?: number;
        [key: string]: unknown;
      };
    };
    [key: string]: unknown;
  };
}

export const readingTimeRemarkPlugin: RemarkPlugin = () => {
  return function (tree: MdastRoot, file: VFile) {
    const textOnPage = toString(tree);
    const readingTime = Math.ceil(getReadingTime(textOnPage).minutes);

    // Přetypování souboru na náš striktní interface
    const astroFile = file as AstroVFile;

    if (astroFile.data.astro?.frontmatter) {
      astroFile.data.astro.frontmatter.readingTime = readingTime;
    }
  };
};

export const responsiveTablesRehypePlugin: RehypePlugin = () => {
  return function (tree: HastRoot) {
    if (!tree.children) return;

    for (let i = 0; i < tree.children.length; i++) {
      const child = tree.children[i];

      if (child.type === 'element' && child.tagName === 'table') {
        tree.children[i] = {
          type: 'element',
          tagName: 'div',
          properties: {
            style: 'overflow:auto',
          },
          children: [child as Element],
        };

        i++;
      }
    }
  };
};

export const lazyImagesRehypePlugin: RehypePlugin = () => {
  return function (tree: HastRoot) {
    if (!tree.children) return;

    visit(tree, 'element', function (node: Element) {
      if (node.tagName === 'img') {
        node.properties = node.properties || {};
        node.properties.loading = 'lazy';
      }
    });
  };
};
