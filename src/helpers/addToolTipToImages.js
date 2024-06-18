import tippy from 'tippy.js';
import { followCursor } from 'tippy.js';

// Function to add tooltips to images with blue border and missing alt text
export function addToolTipToImages() {
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
  // eslint-disable-next-line no-console
  console.log(`${count} images need alt text on this page`);
}
