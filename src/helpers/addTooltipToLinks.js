import tippy from 'tippy.js';
import { followCursor } from 'tippy.js';

// Function to add tooltips using tippy.js
export function addToolTipsToLinks() {
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
