const _setTimeout = setTimeout;
const timers = [ ];

window.setTimeout = function(...rest) {
  debugger;
};

window.clearAllTimeouts = function() {
  timers.forEach( t => window.clearTimeout(t));
};

function debug(descriptor, ...rest) {
  console.log(`%c${descriptor}:%c ${rest.join(' ')}`,
              'font-weight: bold', '');
}

function triggerHighlight() {
  document.body.classList.add('highlight');
  _setTimeout( _ => document.body.classList.remove('highlight'), 0);
}

function clickHandler(event) {

  if (!event.metaKey) {
    return true;
  }

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
