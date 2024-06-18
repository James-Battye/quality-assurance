import { addTippyCSS } from './helpers/addTippyCss';
import { addToolTipToImages } from './helpers/addToolTipToImages';
import { addToolTipsToLinks } from './helpers/addTooltipToLinks';

// Check if the current page URL contains ".webflow.io" and execute a callback
function checkWebflowURL(callback) {
  const currentURL = window.location.href;
  if (currentURL.includes('.webflow.io')) {
    callback();
  }
}

function mainCallback() {
  addToolTipsToLinks();
  addCss();
  addToolTipToImages();
}

document.addEventListener('DOMContentLoaded', () => {
  checkWebflowURL(mainCallback);
});
