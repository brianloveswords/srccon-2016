const _setInterval = setInterval;
const intervals = [ ];

window.setInterval = function(...rest) {
  intervals.push(_setInterval.apply(window, rest));
};

window.reset = function() {
  intervals.forEach( t => window.clearInterval(t));
};

function triggerHighlight() {
  document.body.classList.add('highlight');
  _setInterval( _ => document.body.classList.remove('highlight'), 0);
}

function savePage() {
  let element = document.getElementById('content');
  let content = element.innerHTML;
  localStorage.setItem('content', content);
}

function loadPage() {
  let element = document.getElementById('content');
  let content = localStorage.getItem('content');
  element.innerHTML = content;
}

function clickHandler(event) {
  if (!event.metaKey) {
    return true;
  }

  savePage();
  triggerHighlight();

  let script = document.createElement('script');
  script.innerHTML = this.innerText;
  document.body.appendChild(script);

  return false;
}

let elements = Array.from(document.querySelectorAll('pre > code'));
elements.forEach(el => {
  el.addEventListener('click', clickHandler);
});

loadPage();
// Autosaver
// setInterval(savePage, 5000);
