// const _setInterval = setInterval;
// const intervals = [ ];

// window.setInterval = function(...rest) {
//   intervals.push(_setInterval.apply(window, rest));
// };

// window.reset = function() {
//   intervals.forEach( t => window.clearInterval(t));
// };

function triggerHighlight() {
}

function savePage() {
  let element = document.getElementById('content');
  let content = element.innerHTML;
  sessionStorage.setItem('content', content);
}

function loadPage() {
  let element = document.getElementById('content');
  let content = sessionStorage.getItem('content');
  if (content && content.length) {
    element.innerHTML = content;
  }
  element.classList.remove('hidden');
  hookUpEventListeners();
}

function clickHandler(event) {
  if (!event.metaKey && !event.shiftKey) {
    return true;
  }

  event.preventDefault();

  savePage();

  this.classList.add('highlight');
  setTimeout( _ => this.classList.remove('highlight'), 500);

  hljs.highlightBlock(event.target);

  window.eval(`{${this.innerText}}`);
}

function hookUpEventListeners() {
  let elements = Array.from(document.querySelectorAll('pre > code'));
  elements.forEach(el => {
    el.spellcheck = false;
    el.addEventListener('click', clickHandler);
  });
}

// loadPage();
hookUpEventListeners();


// class Album {
//   constructor(artist, album, year) {
//     this.artist = artist;
//     this.album = album;
//     this.year = year;
//   }
// }

// let albums = [
//   new Album('Stove', 'Is Stupider', 2015),
//   new Album('PJ Harvey', 'Rid Of Me', 1992),
//   new Album('Cloakroom', 'Further Out', 2015),
//   new Album('Television', 'Marquee Moon', 1997),
//   new Album('Noveller', 'No Dream', 2013),
//   new Album('Gary Numan', 'The Pleasure Principle', 1979),
//   new Album('Dismemberment Plan', 'Change', 2001),
//   new Album('Slint', 'Spiderland', 1991),
//   new Album('Chavez', 'Ride the Fader', 1996),
//   new Album('The Psychic Paramount',
//             'Gamelan Into the Mink Supernatural', 2005),
//   new Album('Sharks Keep Moving', 'Desert Strings and Drifers', 1999),
//   new Album("Swearin'", 'Surfing Strange', 2013),
//   new Album('The Verve', 'Storm In Heaven', 2008),
//   new Album('Ringo Deathstarr', 'Colour Trip', 2011),
// ];
