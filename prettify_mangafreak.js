document.addEventListener('DOMContentLoaded', () => {
  const loadingDiv = document.createElement('div');
  loadingDiv.id = 'custom_loading_message';
  loadingDiv.style.background = 'white';
  loadingDiv.style.display = 'flex';
  loadingDiv.style.justifyContent = 'center';
  loadingDiv.style.alignItems = 'center';
  loadingDiv.style.position = 'fixed';
  loadingDiv.style.left = 0;
  loadingDiv.style.top = 0;
  const loadingP = document.createElement('p');
  loadingP.textContent = 'Loading. Please wait...';
  loadingDiv.appendChild(loadingP);
  document.body.appendChild(loadingDiv);
});

window.addEventListener('load', () => {
  document.querySelectorAll('.park_me').forEach(e => e.style.display = 'none')
  document.querySelectorAll('.header').forEach(e => e.style.display = 'none')
  document.querySelectorAll('.top_section').forEach(e => e.style.display = 'none')
  document.querySelectorAll('iframe').forEach(e => e.style.display = 'none')
  document.querySelectorAll('.footer').forEach(e => e.style.display = 'none')
  document.querySelectorAll('body > div').forEach(e => (e.classList.contains('god_box') || (e.style.display = 'none')))
  document.querySelectorAll('.mySlides').forEach(e => e.style.display = 'block')
  document.querySelector('.god_box').style.width = '100vw'
  document.querySelector('.bottomsup').style.width = '100vw'
  document.querySelector('.bottomsup').style.maxWidth = '100vw'
  document.querySelector('.slideshow-container').style.maxWidth = '100vw'
  const fullScreenButton = document.createElement('button');
  fullScreenButton.id = 'fullscreen_toggle'
  fullScreenButton.innerText = 'Enter Full Screen Mode'
  document.querySelector('.top_description').appendChild(fullScreenButton)
  const fullScreenInstruction = document.createElement('p')
  fullScreenInstruction.innerText = `

    paste the below code to console and click the above button to enter fullscreen

    document.querySelector('#fullscreen_toggle').onclick = () => { document.documentElement.requestFullscreen() }

  `
  document.querySelector('.top_description').appendChild(fullScreenInstruction)
  // document.querySelector('#custom_loading_message').style.display = 'none';
}, true)
