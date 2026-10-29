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
    bio       paragraphs about the person, shown in the About section
    schools   e.g. ['St. Mary Primary School', 'Government College, Ibadan']
    details   e.g. [{ label: 'Born', value: '12 May 1965' }]
*/
const PEOPLE = [
  {
    id: 'mummy',
    label: 'Mummy',
    photos: [77],
    fullName: '',
    portrait: 77,
    bio: [
      'Mrs Bosede Ajilore was born on 22nd November 1964 to the late Mr Moses O. Obafemi and the late Mrs Adebimpe Obafemi (née Shoyombo) in Lagos. She attended Ladi-Lak Primary School, Bariga, and finished in 1976.',
      'She proceeded to Girls Secondary Grammar School, Gbagada, and finished in 1981. She was employed by Allied Bank of Nigeria Ltd in February 1982. While in the Bank, she started writing Chartered Institute of Bankers professional examinations.',
      'She met her husband in the bank and they wedded in 1985. Mrs Bosede Ajilore left the banking industry in 1995 to start her private business. She is blessed with a loving husband, and wonderful children and grandchildren.'
    ],
    schools: [],
    details: []
  },
  {
    id: 'daddy',
    label: 'Daddy',
    photos: [84],
    fullName: '',
    portrait: 84,
    bio: [
      'Emmanuel Sesan Ajilore was born on 25 December 1954 in Osu, Atakunmosa West, Osun State. His parents were Chief Joseph S. Ajilore, the Loyin of Osu (1970–1993), and Florence Folorunso Ajilore (née Ogundipe). They valued education highly and raised all their children in Christian ways. He attended Ife-Oluwa Primary School (1961–67), Atakunmosa High School (1969–73) and Oyo State Teachers Training College (1974–75). He later did his HSC at Government College Ibadan (1977–79) and studied Banking and Finance at the University of Lagos (1981–84). He is a Certified Microfinance Banker of Nigeria.',
      'He began his career as an Agricultural Science teacher at Mayflower School, Ikenne (1975–77). After his NYSC at Allied Bank (1984–85), he was retained as an officer and left in 1991 as a Manager. He then served as Senior Manager at a Mortgage Bank (1991–95) and briefly worked at COSIT, University of Lagos, in 1996. At Gateway Bank he became Ota Branch Manager in 1996, won Best Branch Manager (1997–98), and left in 2000 as the Pioneer Abuja Branch Manager. In 2000 he co-founded a finance company that became a Microfinance Bank in 2008, and he left as Managing Director in 2013 to start his own business.',
      'Outside work, he was Social Secretary of the Iwalewa Social Club in Osu (1971) and later a Boarding House Master at Mayflower School (1977). At UNILAG he was Social Secretary (1981/82) and then President (1982/83) of the Finance Students Association. He married Mrs Abosede Olufunmilayo Ajilore (née Obafemi) in 1985, and they have children. A devoted Christian who loves children, he was appointed Pastor in charge of the children’s church at MFM Lugbe-Abuja in 2012.'
    ],
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
  Tributes. Each one looks like:
    {
      to: ['daddy'],                  who it is for (the id of a person above)
      label: 'For Daddy’s 70th birthday',
      title: 'Optional heading',
      text: ['First paragraph.', 'Second paragraph.'],
      from: 'Name of the writer',
      role: 'First son'
    }
  A tribute can be for more than one person: to: ['daddy', 'mummy']
*/
const TRIBUTES = [
  {
    to: ['mummy'],
    label: 'For Mummy',
    title: '',
    text: [
      'The Bible says there is time for everything (Ecclesiastes 3:1–8). I met my wife, Mrs Bosede Ajilore (née Obafemi), when it was God ordained time to marry. My wife is from Ikenne Remo in the present day Ogun State. I taught in Mayflower School, Ikenne, from 1975 to 1977, but we did not meet. In 1980, when I was in the University of Ife, now Obafemi Awolowo University, I went to Ikenne for a friend’s wedding anniversary for two days, but our paths did not cross each other.',
      'When I went for my NYSC in Lagos State, I was posted to Allied Bank for my primary assignment, which did not go down on me. I wanted to serve in the Nigerian Stock Exchange, but all my efforts proved abortive. The secretary to the Director I used to meet advised that I should go and settle with Allied Bank and I should not be wasting my time going and coming to them.',
      'This truthful and honest advice was a bitter pill for me to swallow. The Bible says the steps of the righteous are ordered by God (Psa. 37:23–24). Therefore I decided to see what God will do in Allied Bank for me to be retrained.',
      'There were so many young ladies in the Bank then, but my wife distinguished herself in many ways among them:',
      '1) She was humble and respectful',
      '2) She was the most quiet among her peers',
      '3) She was the most beautiful amongst them (don’t forget that beauty lies in the eyes of a beholder)',
      '4) She was a committed lady.',
      'An incident happened the first day. I visited her to know more about her and perhaps to make up my mind. Behold, just less than ten minutes when I got there, a friend of mine that I went to his wedding in 1980 and I have not seen since then just came inside. Initially, I thought he too visited for “love making”. We exchanged pleasantries and I excused him out for a discussion outside. He told me that he is a first cousin to her. That he was even living in the opposite room before he went to OU where I met him. The rest is history.',
      'My wife, popularly called “Iya”, is God’s will for me. She is a virtuous woman who builds her own house, an epitome of “where you go I will go and where you stay I will stay, your people will be my people and your God will be my God.” For this I am very grateful to God. She is a quiet wife unlike me who can make “a noise”. She likes everything in me. She could go out of her way to satisfy me. She is natural. The reason why I like her face, nose, teeth, legs, hairs, walking, etc.',
      'My prayer is that she has built and she would inhabit forever. She will continue to reap the fruits of her labour in good health and sound mind. Our children’s children will surround our tables in the name of Jesus Christ. The presence of the Almighty God will be with us always in the name of Jesus Christ.',
      'Happy Glorious Birthday to my Wife and I.'
    ],
    from: 'Emmanuel Sesan Ajilore',
    role: 'Loving husband'
  },
  {
    to: ['mummy'],
    label: 'For Mummy’s 60th birthday',
    title: 'Tribute to My Mum on Her 60th Birthday',
    text: [
      'Today is a day filled with love, joy, and gratitude, as we celebrate the 60th birthday of an extraordinary woman—my mum. You have been a role model to me and always driving me and my siblings to attain success. You have also raised us in the way of the Lord. It is my prayer that you will continually be a delight to God and man. As you turn 60 today, I want you to know how deeply you are loved, cherished, and appreciated. Here’s to many more years of health, happiness, and shared memories. I am so grateful for you, and I look forward to creating even more beautiful memories together. Happy Birthday, Mum. I love you more than words can express.'
    ],
    from: 'Banwo Tolu Ajilore',
    role: 'First son'
  },
  {
    to: ['daddy'],
    label: 'For Daddy’s 70th birthday',
    title: 'Tribute to My Dad on His 70th Birthday',
    text: [
      'Today, we gather to celebrate not just any day, but the 70th birthday of a truly remarkable man—my father. Turning 70 is a milestone that reflects the wisdom of a lifetime, the memories of countless moments, and the love you’ve given so generously to those around you. Dad, as I stand here today, my heart is filled with gratitude for all the ways you’ve shaped my life and those of everyone who knows you. You’ve been my role model and my guide. It’s impossible to sum up everything you mean to me, but I hope to honour you with just a few words that reflect what an incredible father and person you are.',
      'You’ve shown me what true love looks like. Not through grand gestures, but through the countless small acts of kindness, support, and care that you’ve shown every day. I remember how you always put us first, sacrificing your time, energy, and comfort to ensure we had what we needed. You worked hard, not for recognition, but because you wanted to give us the best life possible. I see now how much of yourself you poured into our family, and I am endlessly grateful.',
      'Today, as you turn 70, I want to acknowledge the remarkable life you’ve lived. Your kindness has touched so many people, your wisdom has guided not only me but everyone who knows you, and your love has been a source of comfort and strength to all of us. You’ve built a legacy not just in your work, but in the hearts of those who are lucky enough to call you family and friend. Here’s to many more years of laughter, love, and memories together. Happy Birthday, Daddy Banwo, A.K.A Ajiiiii. I love you more than words can express.'
    ],
    from: 'Banwo Tolu Ajilore',
    role: 'First son'
  },
  {
    to: ['mummy'],
    label: 'For Mummy’s 60th birthday',
    title: '',
    text: [
      'My mother is one of the bravest, but yet gentle personalities I have ever met.',
      'Without you, I wouldn’t be here today. You treasured and loved me as your own. You sacrificed your educational and career progression to make sure your children get the best attention. I cannot forget the countless times when my siblings and I were at one point or the other ill, the mannerism with which you run helter skelter to ensure we are fine and recover fully. No wonder many people felt you were in the nursing profession because of the extent to which you show care and love. You possess some qualities, which are so rare, which is the quiet, calm, and listening spirit, which you have been exhibiting all through the years I was at home and even till now. No wonder the Bible is clear on the fact that a virtuous woman builds her home.',
      'You have built your home for over 39 years and are still counting. You taught me contentment, submissiveness, loyalty, faithfulness, and commitment as you stood as a supportive backbone to my Dad. One of the things I learned from the motherhood experience was when I had Oluwamayowa, then I began to sincerely appreciate all the sacrifices you made for me and my siblings. You are an early riser, as no one can beat the record when it comes to being the first to an appointment. You are indeed an incredible mother. My earnest prayer is that the Lord will strengthen and give you the grace to live long and enjoy the fruits of your labour in Jesus’ name.',
      'Happy 60th birthday, Mum.'
    ],
    from: 'Mrs Dolapo Adeniran',
    role: 'First daughter'
  },
  {
    to: ['daddy'],
    label: 'For Daddy’s 70th birthday',
    title: '',
    text: [
      'Daddy, as I fondly call you, “The best Dad in the whole world.” Thank you for believing in me more than I believe in myself. It is a special bond that spans the years through laughter, worries, smiles, and tears. Thank you for your unwavering strength, endless love, and constant support from when I was an infant till now.',
      'I will always be your little girl, and you will always be my greatest hero. You are one in a million, you are a rare one, you are always there for me when things go wrong. You always give me and my siblings advice when things go wrong. You are the spiritual pillar of the family and a true defender in anything we do. You are a role model to many fathers, as you stand as a very upright and responsible father.',
      'During my darkest time I will never forget when you cried to God to take away the years you will live on earth and give it to me for me to exist on earth. That selfless act can come only from Jesus Christ, our Saviour. You are the envy of my peers, as everyone desires to have a loving, godly, committed, and caring dad like you. I’m forever grateful to God. I also thank God for the gift of you. You can be very tough, firm, disciplined, but you are loving and soft in heart. Everyone’s dream Dad, you helped me overcome hard time to be the person I am today. I want you to know that I am who I am because you shaped us with your morals and values. You are one who practice what you preach. My endless prayer is that God should continually give you good and sound mind, so that you will live to reap the fruits of your labour. Loving you is to continually live life. Happy 70th Birthday, my only Dad.'
    ],
    from: 'Mrs Dolapo Adeniran',
    role: 'First daughter'
  },
  {
    to: ['mummy'],
    label: 'For Mummy’s 60th birthday',
    title: '',
    text: [
      'Happy 60th Birthday, Mummy! Mummy Iya Mojisola, my darling mother, you carried me in your tummy for nine months. Thank you for all the sacrifices you made for me, your love and care. I love you so much, Mummy.'
    ],
    from: 'Ojo Mojisola Kikelomo',
    role: 'Daughter'
  },
  {
    to: ['daddy'],
    label: 'For Daddy’s 70th birthday',
    title: '',
    text: [
      'Happy 70th Birthday, my lovely Dad. I’m so grateful to God for blessing me with the best Daddy ever. You have been so wonderful to us as a family. Your endless prayers, moral support and advice. You’re a great man and you will forever be loved. I love you, Daddy.'
    ],
    from: 'Ojo Mojisola Kikelomo',
    role: 'Daughter'
  },
  {
    to: ['daddy', 'mummy'],
    label: 'For Daddy’s 70th and Mummy’s 60th birthdays',
    title: 'A Tribute to My Amazing Parents: Dad at 70 and Mum at 60',
    text: [
      'To the most incredible parents, words alone will never be enough to express the depth of my gratitude and love. Dad, as you celebrate your 70th birthday, and Mum, your 60th, I am overwhelmed with joy and admiration for the lives you have lived and the legacy of love, care, and wisdom you have imparted.',
      'Growing up under your guidance has been a blessing that I hold dear to my heart. You both have consistently shown me the meaning of true love and unwavering support. Your concern for my spiritual, personal, and career growth has shaped me into the person I am today. Each time I’ve needed direction, advice, or comfort, you’ve been there—ready and willing to offer your time, love, and wisdom.',
      'Daddy, you’ve always been an advocate for seriousness and dedication, especially when it came to my studies. I can never forget my high school days when you would visit me on visiting days. While most students were relaxing and enjoying time with their families, mine was the opposite—it felt like I was preparing for JAMB every visiting day! Before I could even touch my provisions, I had to pass the tests set by Sister Dolapo and you. I would be so upset on days I didn’t pass because that meant no provisions for me. But looking back, I realize how much those “drills” contributed to my success today. Your passion for my education didn’t stop at high school. In university, you would constantly follow up on my CGPA, making sure I was hitting the benchmarks required. Even after I graduated, you never allowed me to relax, always pushing me to strive for excellence in my career. And through it all, you and Mummy were there, constantly praying for me—whether it was for exams, interviews, or any new venture I was embarking on. Those prayers have been my strength, and I am eternally grateful for the spiritual and emotional support you both provided every step of the way.',
      'Mummy, your nurturing spirit and unwavering prayers have always been a source of comfort for me. At 60, your compassion and care continue to light up our lives, ensuring that everyone around you feels loved and supported.',
      'Both of you have given me more than I could ever ask for, and I am endlessly thankful. Your legacy of love, discipline, and prayer will forever remain with me.',
      'I love you both deeply. Thank you for being the best parents I could ever hope for.',
      'With all my love,'
    ],
    from: 'Mayowa Ajilore',
    role: 'Son'
  },
  {
    to: ['mummy'],
    label: 'For Mummy’s 60th birthday',
    title: '',
    text: [
      'Happy 60th birthday to the most selfless, loving, and incredible mom in the world! Today marks a significant milestone, and I’m so grateful to have you in my life. Your guidance, support, and unwavering love mean everything to me. Cheers to many more years of love, laughter, and adventure together!'
    ],
    from: 'Pelumi Ajilore',
    role: 'Son'
  },
  {
    to: ['daddy'],
    label: 'For Daddy’s 70th birthday',
    title: '',
    text: [
      'Daddy, 70 years young today! Your life has been a remarkable journey, filled with love, laughter, and adventure. I’m grateful for the sacrifices you’ve made, the wisdom you’ve shared, and the unconditional love you’ve shown me. Wishing you many more years of joy, good health, and cherished memories. Happy 70th birthday!'
    ],
    from: 'Pelumi Ajilore',
    role: 'Son'
  }
];

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
  tributeFilters: document.getElementById('tribute-filters'),
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

// Tributes longer than this many characters start collapsed with a "Read" button
const COLLAPSE_OVER = 900;

function buildTribute(tribute, index) {
  const article = document.createElement('article');
  article.className = 'tribute';

  const forLine = document.createElement('p');
  forLine.className = 'tribute-for';
  forLine.textContent = tribute.label;
  article.appendChild(forLine);

  if (tribute.title) {
    const title = document.createElement('h3');
    title.className = 'tribute-title';
    title.textContent = tribute.title;
    article.appendChild(title);
  }

  const body = document.createElement('div');
  body.className = 'tribute-text';
  body.id = 'tribute-text-' + index;

  let length = 0;
  tribute.text.forEach(function (paragraph) {
    const p = document.createElement('p');
    p.textContent = paragraph;
    body.appendChild(p);
    length += paragraph.length;
  });

  const from = document.createElement('p');
  from.className = 'tribute-from';
  const name = document.createElement('span');
  name.className = 'tribute-name';
  name.textContent = tribute.from;
  const role = document.createElement('span');
  role.className = 'tribute-role';
  role.textContent = tribute.role;
  from.append(name, role);
  body.appendChild(from);

  article.appendChild(body);

  if (length > COLLAPSE_OVER) {
    body.classList.add('is-collapsed');
    const toggle = document.createElement('button');
    toggle.type = 'button';
    toggle.className = 'tribute-toggle';
    toggle.textContent = 'Read the full tribute';
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-controls', body.id);
    toggle.addEventListener('click', function () {
      const collapsed = body.classList.toggle('is-collapsed');
      toggle.textContent = collapsed ? 'Read the full tribute' : 'Show less';
      toggle.setAttribute('aria-expanded', String(!collapsed));
    });
    article.appendChild(toggle);
  }

  return article;
}

function renderTributes() {
  if (TRIBUTES.length === 0) return;
  el.tributesEmpty.hidden = true;

  // One button per person who has tributes written for them
  const recipients = PEOPLE.map(function (p) { return p.id; }).filter(function (id) {
    return TRIBUTES.some(function (t) { return (t.to || []).indexOf(id) !== -1; });
  });

  const options = [{ id: 'all', label: 'All tributes' }].concat(
    recipients.map(function (id) {
      const person = PEOPLE.find(function (p) { return p.id === id; });
      return { id: id, label: 'For ' + (person ? person.label : id) };
    })
  );

  function show(filter) {
    el.tributeList.replaceChildren();
    TRIBUTES.forEach(function (t, i) {
      if (filter === 'all' || (t.to || []).indexOf(filter) !== -1) {
        el.tributeList.appendChild(buildTribute(t, i));
      }
    });
    el.tributeFilters.querySelectorAll('.filter').forEach(function (btn) {
      btn.setAttribute('aria-pressed', String(btn.dataset.filter === filter));
    });
  }

  options.forEach(function (option) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'filter';
    btn.dataset.filter = option.id;
    btn.setAttribute('aria-pressed', 'false');
    btn.textContent = option.label;
    btn.addEventListener('click', function () { show(option.id); });
    el.tributeFilters.appendChild(btn);
  });

  el.tributeFilters.hidden = false;
  show('all');
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

    const hasBio = person.bio && person.bio.length > 0;
    if (hasBio) {
      person.bio.forEach(function (paragraph) {
        const p = document.createElement('p');
        p.className = 'person-bio';
        p.textContent = paragraph;
        info.appendChild(p);
      });
    }

    if (rows.length === 0) {
      if (!hasBio) {
        const pending = document.createElement('p');
        pending.className = 'person-pending';
        pending.textContent = 'Details coming soon.';
        info.appendChild(pending);
      }
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