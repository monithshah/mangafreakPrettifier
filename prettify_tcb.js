const hideElement = (identifier, parentNode = document) => {
  parentNode.querySelectorAll(identifier).forEach(node => {
    node.style.display = 'None';
  })
}

window.addEventListener('load', (e) => {
  e.stopImmediatePropagation();

  hideElement('.half-page-ad-container');
  hideElement('.sticky-footer-simple');

  document.querySelectorAll('picture').forEach(picture => {
    picture.style.width = '100%';
    picture.querySelectorAll('img').forEach(img => {
      img.style.width = '100%';
    })
  })
})
