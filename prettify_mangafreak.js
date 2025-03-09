const showWaitingMessage = (e=null) => {
  if (!document.querySelector('.god_box')) return;

  e.stopImmediatePropagation();
  const div = document.createElement('div');
  div.style.background = 'white';
  div.style.display = 'flex';
  div.style.justifyContent = 'center';
  div.style.alignItems = 'center';
  div.style.position = 'fixed';
  div.style.left = '0px';
  div.style.top = '0px';
  div.style.width = '100vw';
  div.style.height = '100vh';
  div.style.zIndex = 100000000000000;
  const p = document.createElement('h1');
  p.style.color = 'black';
  p.innerHTML = 'Prettifying this page. Please wait....';
  div.appendChild(p);
  document.body.appendChild(div);
}

document.addEventListener('DOMContentLoaded', showWaitingMessage);

window.addEventListener('load', (e) => {
  e.stopImmediatePropagation();
  const appendAndHideOriginalElement = (e, parent, replace=false) => {
    let newE = e.cloneNode(true);
    newE.removeAttribute('onclick');
    parent.appendChild(newE);
    e.remove();
    return newE;
  }

  const removeElements = (elementSelectors) => {
    elementSelectors.forEach((elementSelector) => {
      document.querySelectorAll(elementSelector).forEach(e => e.remove());
    })
  }

  const prettifyPage = () => {
    if (!document.querySelector('.god_box')) return;

    document.querySelectorAll('body > *').forEach(e => (e.classList.contains('god_box') || e.remove()));
    removeElements([
      '.park_me',
      '.header',
      '.footer',
      'iframe',
      '.top_section',
      'script',
      'link:not([rel="stylesheet"])',
      '.bottomsup > a',
      'a.prev',
      'a.next',
      '.ad_vertical',
    ]);
    const htmlElement = document.documentElement.cloneNode(true);
    document.documentElement.remove();
    document.appendChild(htmlElement);
    const slideShowQuery = '.slideshow-container';
    const slideshowContainer = document.querySelector(slideShowQuery);
    const newSlideShowContainer = appendAndHideOriginalElement(slideshowContainer, slideshowContainer.parentNode);
    document.querySelector('.god_box').style.width = '100vw';
    document.querySelector('.bottomsup').style.width = '100vw';
    document.querySelector('.bottomsup').style.maxWidth = '100vw';
    document.querySelector('.slideshow-container').style.maxWidth = '100vw';
    newSlideShowContainer.querySelectorAll('.mySlides').forEach(e => e.style.display = 'block');

    newSlideShowContainer.querySelectorAll('div.image_orientation').forEach(e => e.style.maxWidth = '100vw')
    newSlideShowContainer.querySelectorAll('img').forEach(e => e.style.width = '100vw')
  };

  setTimeout(prettifyPage, 100);
});
