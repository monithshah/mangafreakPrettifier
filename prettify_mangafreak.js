window.addEventListener('load', () => {
  const appendAndHideOriginalElement = (e, parent, replace=false) => {
    let newE = e.cloneNode(true);
    newE.removeAttribute('onclick');
    if (replace) parent.replaceChild(newE, e);
    else  {
      parent.appendChild(newE);
      e.style.display = 'none';
      e.className = '';
    }
    return newE;
  }

  const prettifyPage = () => {
    const slideShowQuery = '.slideshow-container>a';
    const slideshowContainer = document.querySelector(slideShowQuery);
    const newSlideShowContainer = appendAndHideOriginalElement(slideshowContainer, slideshowContainer.parentNode);
    document.querySelectorAll('.park_me').forEach(e => e.style.display = 'none');
    document.querySelectorAll('.header').forEach(e => e.style.display = 'none');
    document.querySelectorAll('.top_section').forEach(e => e.style.display = 'none');
    document.querySelectorAll('iframe').forEach(e => e.style.display = 'none');
    document.querySelectorAll('.footer').forEach(e => e.style.display = 'none');
    document.querySelectorAll('.myslides').forEach(e => e.style.display = 'block');
    document.querySelectorAll('body > div').forEach(e => (e.classList.contains('god_box') || (e.style.display = 'none')));
    document.querySelector('.god_box').style.width = '100vw';
    document.querySelector('.bottomsup').style.width = '100vw';
    document.querySelector('.bottomsup').style.maxWidth = '100vw';
    document.querySelector('.slideshow-container').style.maxWidth = '100vw';
    newSlideShowContainer.querySelectorAll('.mySlides').forEach(e => e.style.display = 'block');
  };

  setTimeout(prettifyPage, 100);
});
