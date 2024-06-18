import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/material.css';

import tippy from 'tippy.js';
import { followCursor } from 'tippy.js';

// Check if the current page URL contains ".webflow.io" and execute a callback
function checkWebflowURL(callback) {
  const currentURL = window.location.href;
  if (currentURL.includes('.webflow.io')) {
    callback();
  }
}

// Function to add CSS to the page
function addCss() {
  const style = document.createElement('style');
  style.innerHTML = `
      a[href='#'] {
        border: 1px solid red;
        border-style: solid;
    }
  `;
  document.head.appendChild(style);
}

// Function to add tooltips to images with blue border and missing alt text
function addToolTipToImages() {
  const images = document.querySelectorAll('img');
  let count = 0;
  images.forEach((image) => {
    count += 1;
    const src = image.getAttribute('src');
    let tooltipContent = '';

    if (
      src &&
      (src.endsWith('.png') || src.endsWith('.jpg')) &&
      !image.hasAttribute('compress-bypass')
    ) {
      image.style.border = '1px solid blue';
      tooltipContent += `This image should be compressed.<br>If you dont want to compress it, add the "compress-bypass" attribute.<br><br>`;
    }

    if (!image.hasAttribute('alt') || image.getAttribute('alt') === '') {
      image.classList.add('missing-alt');
      tooltipContent += 'This image is missing an alt text. ';
    }

    if (tooltipContent) {
      tippy(image, {
        followCursor: true,
        plugins: [followCursor],
        allowHTML: true,
        content: tooltipContent.trim(),
        theme: 'material',
      });
    }
  });
  console.log(`${count} images need alt text on this page`);
}

// Function to add tooltips using tippy.js
function addToolTipsToLinks() {
  tippy('a:not([data-w-tab])', {
    followCursor: true,
    plugins: [followCursor],
    content(ref) {
      const url = ref.getAttribute('href');
      return url === '#'
        ? 'Empty link, please connect or use a <button> element'
        : `Goes to ${url}`;
    },
    theme: 'material',
  });
}

function mainCallback() {
  addToolTipsToLinks();
  addCss();
  addToolTipToImages();
}

document.addEventListener('DOMContentLoaded', () => {
  checkWebflowURL(mainCallback);
});
