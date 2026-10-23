'use strict';

/* ==========================================================
   EDIT THIS PART TO ADD PEOPLE, PHOTOS AND DETAILS
   ========================================================== */

// Where the pictures are and how many there are.
// Your pictures are named 1.jpg, 2.jpg ... 88.jpg inside the "family" folder.
const PHOTO_FOLDER = 'family';
const PHOTO_COUNT = 88;
const PHOTO_EXT = 'jpg';

// If a picture isn't found as .jpg, the site also tries these file types.
const EXTENSIONS_TO_TRY = ['jpeg', 'png', 'webp', 'JPG', 'JPEG', 'PNG'];

/*
  Each person needs:
    id       short lowercase name, no spaces
    label    the name shown on the button
    photos   the picture numbers this person appears in.
             Single numbers and ranges both work, e.g. [1, 4, 9, '51-60', 72]

  Optional:
    fullName  full name for the About section
    portrait  the picture number to show in About, e.g. 12
    schools   e.g. ['St. Mary Primary School', 'Government College, Ibadan']
    details   e.g. [{ label: 'Born', value: '12 May 1965' }]
*/
const PEOPLE = [
  {
    id: 'daddy',
    label: 'Daddy',
    photos: [84],
    fullName: '',
    portrait: 84,
    schools: [],
    details: []
  },
  {
    id: 'mummy',
    label: 'Mummy',
    photos: [77],
    fullName: '',
    portrait: 77,
    schools: [],
    details: []
  },
  {
    id: 'banwo',
    label: 'Banwo',
    photos: [76],
    fullName: '',
    portrait: 76,
    schools: [],
    details: []
  },
  {
    id: 'dolapo',
    label: 'Dolapo',
    photos: [87],
    fullName: '',
    portrait: 87,
    schools: [],
    details: []
  },
  {
    id: 'moji',
    label: 'Moji',
    photos: [88],
    fullName: '',
    portrait: 88,
    schools: [],
    details: []
  },
  {
    id: 'mayowa',
    label: 'Mayowa',
    photos: [66],
    fullName: '',
    portrait: 66,
    schools: [],
    details: []
  },
  {
    id: 'pelumi',
    label: 'Pelumi',
    photos: [74],
    fullName: '',
    portrait: 74,
    schools: [],
    details: []
  }
  // To add another person, copy one block above, add a comma, and change the values.
];

/*
  Tributes (to be added later). Each one looks like:
    { name: 'Name', text: 'The tribute message.', photo: 'images/tributes/name.jpg' }
  "photo" is optional.
*/
const TRIBUTES = [];

// How many photos appear at once before "Show more photos"
const BATCH_SIZE = 24;

/* ==========================================================
   SITE LOGIC (you shouldn't need to change anything below)
   ========================================================== */

const el = {
  filters: document.getElementById('filters'),
  gallery: document.getElementById('gallery'),
  empty: document.getElementById('gallery-empty'),
  more: document.getElementById('load-more'),
  lightbox: document.getElementById('lightbox'),
  lbImg: document.getElementById('lb-img'),
  lbCaption: document.getElementById('lb-caption'),
  lbClose: document.getElementById('lb-close'),
  lbPrev: document.getElementById('lb-prev'),
  lbNext: document.getElementById('lb-next'),
  people: document.getElementById('people'),
  tributeList: document.getElementById('tribute-list'),
  tributesEmpty: document.getElementById('tributes-empty')
};

const state = {
  filter: 'all',
  photos: [],
  shown: 0,
  index: 0,
  broken: new Set()
};

/* ---------- Photos ---------- */

function pathFor(number, ext) {
  return PHOTO_FOLDER + '/' + number + '.' + ext;
}

function makePhoto(number, who) {
  return {
    src: pathFor(number, PHOTO_EXT),
    who: who,
    number: number
  };
}

// Loads a numbered picture into an <img>. If the file isn't a .jpg, it tries
// the other file types above before giving up and calling onFail.
function loadNumbered(img, photo, onFail) {
  const order = [PHOTO_EXT].concat(EXTENSIONS_TO_TRY);
  let attempt = 0;

  function tryNext() {
    attempt++;
    if (attempt < order.length) {
      photo.src = pathFor(photo.number, order[attempt]);
      img.src = photo.src;
    } else {
      img.removeEventListener('error', tryNext);
      onFail();
    }
  }

  img.addEventListener('error', tryNext);
  img.src = photo.src;
}

// Turns [1, '5-7', 9] into [1, 5, 6, 7, 9]
function expandNumbers(list) {
  const numbers = [];
  (list || []).forEach(function (item) {
    if (typeof item === 'number') {
      numbers.push(item);
      return;
    }
    const parts = String(item).split('-');
    const from = parseInt(parts[0], 10);
    const to = parts.length > 1 ? parseInt(parts[1], 10) : from;
    for (let n = from; n <= to; n++) numbers.push(n);
  });
  return numbers;
}

function photosFor(person) {
  const unique = Array.from(new Set(expandNumbers(person.photos)));
  return unique
    .filter(function (n) { return n >= 1 && n <= PHOTO_COUNT; })
    .sort(function (a, b) { return a - b; })
    .map(function (n) { return makePhoto(n, person.label); });
}

function allPhotos() {
  const photos = [];
  for (let n = 1; n <= PHOTO_COUNT; n++) {
    photos.push(makePhoto(n, 'Family'));
  }
  return photos;
}

function buildPhotos(filter) {
  if (filter === 'all') {
    return allPhotos();
  }
  const person = PEOPLE.find(function (p) { return p.id === filter; });
  return person ? photosFor(person) : [];
}

/* ---------- Gallery buttons ---------- */

function renderFilters() {
  const items = [{ id: 'all', label: 'All', count: PHOTO_COUNT }].concat(
    PEOPLE.map(function (p) {
      return { id: p.id, label: p.label, count: photosFor(p).length };
    })
  );

  items.forEach(function (item) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'filter';
    btn.dataset.filter = item.id;
    btn.setAttribute('aria-pressed', 'false');

    const name = document.createElement('span');
    name.textContent = item.label;
    const count = document.createElement('span');
    count.className = 'filter-count';
    count.textContent = item.count;

    btn.append(name, count);
    btn.addEventListener('click', function () { selectFilter(item.id); });
    el.filters.appendChild(btn);
  });
}

function selectFilter(id) {
  state.filter = id;
  state.photos = buildPhotos(id);
  state.shown = 0;
  el.gallery.replaceChildren();

  el.filters.querySelectorAll('.filter').forEach(function (btn) {
    btn.setAttribute('aria-pressed', String(btn.dataset.filter === id));
  });

  if (state.photos.length === 0) {
    el.empty.textContent = 'No photos here yet.';
    el.empty.hidden = false;
    el.more.hidden = true;
    return;
  }

  el.empty.hidden = true;
  showMore();
}

function showMore() {
  const start = state.shown;
  const batch = state.photos.slice(start, start + BATCH_SIZE);

  batch.forEach(function (photo, offset) {
    const index = start + offset;
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'photo';
    btn.setAttribute('aria-label', 'View ' + photo.who + ', photo ' + photo.number);

    const img = document.createElement('img');
    img.alt = '';
    img.loading = 'lazy';
    img.decoding = 'async';
    loadNumbered(img, photo, function () {
      state.broken.add(photo.src);
      btn.hidden = true;
    });

    btn.appendChild(img);
    btn.addEventListener('click', function () { openLightbox(index); });
    el.gallery.appendChild(btn);
  });

  state.shown = start + batch.length;
  el.more.hidden = state.shown >= state.photos.length;
}

el.more.addEventListener('click', showMore);

/* ---------- Photo viewer ---------- */

function updateLightbox() {
  const photo = state.photos[state.index];
  el.lbImg.src = photo.src;
  el.lbImg.alt = photo.who + ', photo ' + photo.number;
  el.lbCaption.textContent =
    photo.who + ', photo ' + (state.index + 1) + ' of ' + state.photos.length;
}

function openLightbox(index) {
  state.index = index;
  updateLightbox();
  el.lightbox.showModal();
}

function step(direction) {
  const total = state.photos.length;
  let next = state.index;
  for (let tries = 0; tries < total; tries++) {
    next = (next + direction + total) % total;
    if (!state.broken.has(state.photos[next].src)) {
      state.index = next;
      updateLightbox();
      return;
    }
  }
}

el.lbClose.addEventListener('click', function () { el.lightbox.close(); });
el.lbPrev.addEventListener('click', function () { step(-1); });
el.lbNext.addEventListener('click', function () { step(1); });

el.lightbox.addEventListener('click', function (event) {
  const clickedEmptySpace =
    event.target === el.lightbox || event.target.classList.contains('lightbox-stage');
  if (clickedEmptySpace) {
    el.lightbox.close();
  }
});

el.lightbox.addEventListener('keydown', function (event) {
  if (event.key === 'ArrowLeft') step(-1);
  if (event.key === 'ArrowRight') step(1);
});

el.lightbox.addEventListener('close', function () {
  el.lbImg.removeAttribute('src');
});

// Swipe left or right on a phone
let touchStartX = null;
el.lightbox.addEventListener('touchstart', function (event) {
  touchStartX = event.changedTouches[0].clientX;
}, { passive: true });
el.lightbox.addEventListener('touchend', function (event) {
  if (touchStartX === null) return;
  const distance = event.changedTouches[0].clientX - touchStartX;
  touchStartX = null;
  if (Math.abs(distance) > 50) {
    step(distance > 0 ? -1 : 1);
  }
}, { passive: true });

/* ---------- Tributes ---------- */

function renderTributes() {
  if (TRIBUTES.length === 0) return;
  el.tributesEmpty.hidden = true;

  TRIBUTES.forEach(function (tribute) {
    const figure = document.createElement('figure');
    figure.className = 'tribute';

    if (tribute.photo) {
      const img = document.createElement('img');
      img.src = tribute.photo;
      img.alt = tribute.name;
      img.loading = 'lazy';
      figure.appendChild(img);
    }

    const quote = document.createElement('blockquote');
    quote.textContent = tribute.text;
    const caption = document.createElement('figcaption');
    caption.textContent = tribute.name;

    figure.append(quote, caption);
    el.tributeList.appendChild(figure);
  });
}

/* ---------- About ---------- */

function letterAvatar(label) {
  const box = document.createElement('div');
  box.className = 'avatar';
  box.setAttribute('aria-hidden', 'true');
  box.textContent = label.charAt(0).toUpperCase();
  return box;
}

function renderPeople() {
  PEOPLE.forEach(function (person) {
    const article = document.createElement('article');
    article.className = 'person';

    // Portrait photo, or the first letter of their name if it can't be found
    let avatar;
    if (person.portrait) {
      const img = document.createElement('img');
      img.className = 'avatar';
      img.alt = person.fullName || person.label;
      img.loading = 'lazy';
      const swapToLetter = function () {
        img.replaceWith(letterAvatar(person.label));
      };
      if (typeof person.portrait === 'number') {
        loadNumbered(img, makePhoto(person.portrait, person.label), swapToLetter);
      } else {
        img.addEventListener('error', swapToLetter);
        img.src = person.portrait;
      }
      avatar = img;
    } else {
      avatar = letterAvatar(person.label);
    }

    // Name
    const head = document.createElement('div');
    head.className = 'person-head';
    const name = document.createElement('h3');
    name.className = 'person-name';
    name.textContent = person.fullName || person.label;
    head.appendChild(name);
    if (person.fullName) {
      const role = document.createElement('p');
      role.className = 'person-role';
      role.textContent = person.label;
      head.appendChild(role);
    }

    // Details
    const info = document.createElement('div');
    info.className = 'person-info';
    const rows = [];

    if (person.schools && person.schools.length) {
      rows.push({ label: 'Schools attended', list: person.schools });
    }
    (person.details || []).forEach(function (d) {
      rows.push({ label: d.label, value: d.value });
    });

    if (rows.length === 0) {
      const pending = document.createElement('p');
      pending.className = 'person-pending';
      pending.textContent = 'Details coming soon.';
      info.appendChild(pending);
    } else {
      const dl = document.createElement('dl');
      dl.className = 'person-details';
      rows.forEach(function (row) {
        const dt = document.createElement('dt');
        dt.textContent = row.label;
        const dd = document.createElement('dd');
        if (row.list) {
          const ul = document.createElement('ul');
          row.list.forEach(function (school) {
            const li = document.createElement('li');
            li.textContent = school;
            ul.appendChild(li);
          });
          dd.appendChild(ul);
        } else {
          dd.textContent = row.value;
        }
        dl.append(dt, dd);
      });
      info.appendChild(dl);
    }

    article.append(avatar, head, info);
    el.people.appendChild(article);
  });
}

/* ---------- Highlight the current section in the menu ---------- */

function watchSections() {
  const links = document.querySelectorAll('.site-header nav a');
  const sections = document.querySelectorAll('#galleries, #tributes, #about');

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      links.forEach(function (link) {
        const active = link.getAttribute('href') === '#' + entry.target.id;
        if (active) {
          link.setAttribute('aria-current', 'true');
        } else {
          link.removeAttribute('aria-current');
        }
      });
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(function (section) { observer.observe(section); });
}

/* ---------- Start ---------- */

renderFilters();
selectFilter('all');
renderTributes();
renderPeople();
watchSections();