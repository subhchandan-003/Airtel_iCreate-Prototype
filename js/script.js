/* =========================================================
   ALTURA ONE: site interactions - nav, hero reveal, ticker,
   count-up stats, product tour tabs, chart bars, scroll reveals
========================================================= */

document.addEventListener('DOMContentLoaded', function(){
  initNav();
  initMobileNav();
  initHeroWords();
  initBrandTicker();
  initTour();
  initQuotes();
  initScrollReveal();
  initCountUp();
  initChart();
});

/* ---------------- NAV scroll state ---------------- */
function initNav(){
  var nav = document.getElementById('site-nav');
  if (!nav) return;
  var onScroll = function(){
    nav.classList.toggle('scrolled', window.scrollY > 12);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

/* ---------------- Mobile nav toggle ---------------- */
function initMobileNav(){
  var toggle = document.getElementById('nav-toggle');
  var menu = document.getElementById('nav-mobile');
  if (!toggle || !menu) return;
  var close = function(){
    menu.classList.remove('open');
    toggle.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  };
  toggle.addEventListener('click', function(){
    var isOpen = !menu.classList.contains('open');
    menu.classList.toggle('open', isOpen);
    toggle.classList.toggle('open', isOpen);
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
  menu.querySelectorAll('a').forEach(function(a){ a.addEventListener('click', close); });
  window.addEventListener('resize', function(){ if (window.innerWidth > 920) close(); });
}

/* ---------------- Hero headline stagger ---------------- */
function initHeroWords(){
  var words = document.querySelectorAll('#hero-headline .word');
  words.forEach(function(w, i){
    w.style.animationDelay = (0.08 * i) + 's';
  });
}

/* ---------------- Fragmented-providers ticker ---------------- */
function initBrandTicker(){
  var track = document.getElementById('brand-track');
  if (!track) return;
  var items = [
    'Jio SIM · ₹299/mo', 'Local ISP · ₹600/mo', 'Netflix · ₹199/mo',
    'PhonePe · separate app', 'Ring Camera · own WiFi', 'Tata Play · ₹350/mo',
    'Altura ONE · ₹748/mo for everything'
  ];
  var html = '';
  for (var pass = 0; pass < 2; pass++){
    items.forEach(function(t, i){
      var isAltura = t.indexOf('Altura') === 0;
      html += '<span class="brand-chip" style="' + (isAltura ? 'border-color:rgba(228,0,0,.4);' : '') + '">' +
        (isAltura ? '<b style="color:var(--red-2);">' + t + '</b>' : t) + '</span>';
    });
  }
  track.innerHTML = html;
}

/* ---------------- Generic scroll reveal ---------------- */
function initScrollReveal(){
  var targets = document.querySelectorAll('.reveal, .reveal-stagger');
  if (!('IntersectionObserver' in window)){
    targets.forEach(function(t){ t.classList.add('in'); });
    return;
  }
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if (entry.isIntersecting){
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.18, rootMargin: '0px 0px -40px 0px' });
  targets.forEach(function(t){ io.observe(t); });
}

/* ---------------- Count-up stats ---------------- */
function initCountUp(){
  var nums = document.querySelectorAll('[data-count]');
  var animate = function(el){
    var target = parseFloat(el.getAttribute('data-count'));
    var isDecimal = target % 1 !== 0;
    var span = el.classList.contains('v') ? el : el.querySelector('.v');
    if (!span) return;
    var start = performance.now();
    var dur = 1100;
    function tick(now){
      var p = Math.min(1, (now - start) / dur);
      var eased = 1 - Math.pow(1 - p, 3);
      var val = target * eased;
      span.textContent = isDecimal ? val.toFixed(2) : Math.round(val);
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  };
  if (!('IntersectionObserver' in window)){
    nums.forEach(animate);
    return;
  }
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if (entry.isIntersecting){
        animate(entry.target);
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  nums.forEach(function(n){ io.observe(n); });
}

/* ---------------- Bar chart ---------------- */
function initChart(){
  var fills = document.querySelectorAll('.chart-fill');
  var run = function(){
    fills.forEach(function(f){
      var h = f.getAttribute('data-h');
      var amt = f.getAttribute('data-amt');
      f.querySelector('.amt').textContent = amt;
      requestAnimationFrame(function(){ f.style.height = h + '%'; });
    });
  };
  var card = document.getElementById('chart-bars');
  if (!card || !('IntersectionObserver' in window)){ run(); return; }
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if (entry.isIntersecting){ run(); io.disconnect(); }
    });
  }, { threshold: 0.4 });
  io.observe(card);
}

/* ---------------- Product Tour (toggle showcase) ---------------- */
var TOUR = [
  {
    id:'problem', n:'01', label:'The Problem',
    eyebrow:'Before Altura',
    title:'Five providers. Five bills. One frustrated household.',
    body:'The average household pays separately for mobile, broadband, OTT, payments, and whatever WiFi the smart camera happens to be squatting on.',
    stat:'₹1,098+/mo <b>·</b> across 5 apps, 5 bills, 5 logins',
    quote:'"I don\'t even believe it\'s possible to get everything from one company."',
    cite:'— Ritika, runs a preschool in Bhubaneswar',
    rows:[
      {ico:'i-mobile', title:'Jio SIM', sub:'Mobile', tag:'₹299/mo', tagClass:'tag-blue'},
      {ico:'i-wifi', title:'Local ISP', sub:'Broadband', tag:'₹600/mo', tagClass:'tag-blue'},
      {ico:'i-tv', title:'Netflix', sub:'OTT', tag:'₹199/mo', tagClass:'tag-blue'},
      {ico:'i-wallet', title:'PhonePe', sub:'Separate payments app', tag:'', tagClass:''},
      {ico:'i-camera', title:'Ring Camera', sub:'Own WiFi', tag:'', tagClass:''}
    ],
    total:{label:'With Altura ONE', amt:'₹748/mo', tag:'Save ₹350+/mo', tagClass:'tag-green'}
  },
  {
    id:'bogo', n:'02', label:'FreeStart BOGO',
    eyebrow:'Lever 01 · Affordability',
    title:'Subscribe to broadband. Get 6 months of mobile, free.',
    body:'₹499 broadband entry point, unlimited calls + texts + 1.5GB daily mobile data at zero extra cost for six months. Two services, one price.',
    stat:'79% would take this offer <b>·</b> 64.4% net retention after',
    quote:'"If it\'s six months straight where I don\'t spend on phone recharge, I\'d definitely consider switching."',
    cite:'— Bansita, 23, MBA student',
    rows:[
      {ico:'i-gauge', title:'Speed', sub:'200 Mbps · 6 months', tag:'', tagClass:''},
      {ico:'i-tv', title:'OTT add-on', sub:'Hotstar', tag:'₹49', tagClass:'tag-blue'},
      {ico:'i-sparkle', title:'AI Tools', sub:'Perplexity + Adobe', tag:'₹0', tagClass:'tag-purple'},
      {ico:'i-mobile', title:'Mobile recharge', sub:'Unlimited calls, 1.5GB/day', tag:'FREE · 6mo', tagClass:'tag-green'}
    ],
    total:{label:'Monthly total', amt:'₹748/mo', tag:'BOGO applied', tagClass:'tag-green'}
  },
  {
    id:'migration', n:'03', label:'Migration, Handled',
    eyebrow:'Lever 02 · Switching friction',
    title:'We handle the messy part.',
    body:'Number porting, a cancellation assistant with ready-to-send messages for your old providers, and a technician-tracked installation, guaranteed within 48 hours in pilot cities.',
    stat:'92% of pilot-city installs complete within 24 hrs',
    quote:'"If I switch broadband, a site engineer visits, evaluates, and only days later do they set up the modem."',
    cite:'— Ish, marketing professional, Pune',
    rows:[
      {ico:'i-mobile', title:'Port your number', sub:'3 working days · we handle the paperwork', tag:'Active', tagClass:'tag-blue'},
      {ico:'i-doc', title:'Cancel old providers', sub:'Jio Fiber, Tata Play, local ISP', tag:'Assisted', tagClass:'tag-purple'},
      {ico:'i-truck', title:'Installation tracker', sub:'Technician arriving 2–4 PM', tag:'48 hrs', tagClass:'tag-green'}
    ],
    total:{label:'Miss the window', amt:'₹200', tag:'auto bill credit', tagClass:'tag-gold'}
  },
  {
    id:'ai', n:'04', label:'AI Tool Ladder',
    eyebrow:'Lever 02 · Switching friction',
    title:'Free AI on day one. Your favorite AI, free, by month three.',
    body:'Perplexity Pro and Adobe Express unlock immediately: fresh tools, no prior lock-in. ChatGPT Plus, the tool 82% of respondents already rely on, unlocks free at month three as a loyalty reward.',
    stat:'86.5% say this increases long-term stickiness',
    quote:'"Even at the same price, I\'d switch to get everything in a single package. Any discount is a bonus."',
    cite:'— Prof Meta, 32, professor',
    rows:[
      {ico:'i-sparkle', title:'Perplexity Pro', sub:'Research & ask anything', tag:'Active', tagClass:'tag-green'},
      {ico:'i-sparkle', title:'Adobe Express', sub:'Design & create', tag:'Active', tagClass:'tag-green'},
      {ico:'i-lock', title:'ChatGPT Plus', sub:'Your history, style, and preferences are waiting', tag:'Day 90', tagClass:'tag-purple'}
    ],
    total:{label:'Retention ROI', amt:'₹1.11', tag:'saved per ₹1 spent', tagClass:'tag-green'}
  },
  {
    id:'trust', n:'05', label:'Your Safety Net',
    eyebrow:'Barrier 03 · Trust',
    title:'What if something goes wrong?',
    body:'A service guarantee with automatic bill credit, no exit fees, one-tap data export, and a router that falls back to 4G/5G the moment fiber drops.',
    stat:'Answers the one fear no bundle usually addresses',
    quote:'"If that company goes bankrupt, my entire digital life stops."',
    cite:'— Bansita, on her single biggest fear about consolidating',
    rows:[
      {ico:'i-shield', title:'Service Guarantee', sub:'Down 4+ hrs → auto credit, no complaint needed', tag:'Active', tagClass:'tag-green'},
      {ico:'i-unlock', title:'No Lock-In', sub:'Leave anytime, no exit fees', tag:'', tagClass:''},
      {ico:'i-download', title:'Data Portability', sub:'AI history, watchlists, IoT configs', tag:'Exportable', tagClass:'tag-blue'},
      {ico:'i-signal', title:'Fallback Connectivity', sub:'Fiber down → auto 4G/5G backup', tag:'', tagClass:''}
    ],
    total:{label:'Signal, your area', amt:'Excellent', tag:'live diagnostic', tagClass:'tag-green'}
  },
  {
    id:'iot', n:'06', label:'IoT Ecosystem SIM',
    eyebrow:'Lever 03 · Fragmentation',
    title:'Buy a camera. Find a SIM inside.',
    body:'A free Altura SIM and hotspot ship inside smart-home boxes at Croma, Reliance Digital, and Amazon. Aadhaar-based eKYC in under two minutes, then the whole smart home runs on Altura.',
    stat:'75.4% would move toward Altura for this',
    quote:'"I\'d definitely shift to Airtel for all the features and services."',
    cite:'— Purvi, currently a Jio user',
    rows:[
      {ico:'i-sim', title:'Insert the SIM', sub:'Into the included hotspot device', tag:'', tagClass:''},
      {ico:'i-wifi', title:'Power on', sub:'Hotspot auto-connects', tag:'', tagClass:''},
      {ico:'i-doc', title:'Aadhaar eKYC', sub:'Camera + selfie, under 2 minutes', tag:'Required', tagClass:'tag-blue'},
      {ico:'i-check', title:'You\'re online', sub:'Add more devices anytime', tag:'Live', tagClass:'tag-green'}
    ],
    total:{label:'IoT → household upgrade', amt:'18% → 40%', tag:'conversion cascade', tagClass:'tag-purple'}
  },
  {
    id:'household', n:'07', label:'One Household',
    eyebrow:'The convergence',
    title:'Every family member. Every device. One bill.',
    body:'Dad on postpaid, Mom on prepaid, the kids on free BOGO SIMs with parental controls, all under a single household view and a single monthly charge.',
    stat:'₹2,180 → ₹1,248/mo <b>·</b> ₹11,184 saved a year',
    quote:null,
    cite:null,
    rows:[
      {ico:'i-users', title:'Dad', sub:'Postpaid 75GB · Prime', tag:'', tagClass:''},
      {ico:'i-users', title:'Mom', sub:'Prepaid Unlimited · Hotstar', tag:'', tagClass:''},
      {ico:'i-mobile', title:'Son & Daughter', sub:'BOGO Free SIM · parental controls on', tag:'Protected', tagClass:'tag-green'}
    ],
    total:{label:'Household spend', amt:'₹1,248/mo', tag:'one bill', tagClass:'tag-blue'}
  },
  {
    id:'billing', n:'08', label:'Payments, Unified',
    eyebrow:'Closing the loop',
    title:'Close your old accounts without leaving the app.',
    body:'The transition helper pays off your final bills to Jio, your local ISP, Netflix, and Tata Play, so the old providers get closed out, not just abandoned.',
    stat:'Answers the PhonePe fragmentation named in the original problem',
    quote:null,
    cite:null,
    rows:[
      {ico:'i-doc', title:'Jio', sub:'Final prepaid balance', tag:'Pay', tagClass:'tag-blue'},
      {ico:'i-wifi', title:'Local ISP', sub:'Last month\'s bill', tag:'Pay', tagClass:'tag-blue'},
      {ico:'i-tv', title:'Netflix', sub:'Cancel + final payment', tag:'Pay', tagClass:'tag-blue'},
      {ico:'i-gift', title:'Altura Rewards', sub:'Earned this month', tag:'250 pts', tagClass:'tag-gold'}
    ],
    total:{label:'Refer a friend', amt:'₹200', tag:'cashback', tagClass:'tag-gold'}
  }
];

function initTour(){
  var tabsHost = document.getElementById('tour-tabs');
  var panelsHost = document.getElementById('tour-panels');
  var indicator = document.getElementById('tour-indicator');
  if (!tabsHost || !panelsHost || !indicator) return;

  var tabsHtml = '';
  var panelsHtml = '';

  TOUR.forEach(function(t, i){
    tabsHtml += '<button class="tour-tab' + (i === 0 ? ' active' : '') + '" id="tab-' + t.id + '" role="tab" ' +
      'aria-selected="' + (i === 0) + '" aria-controls="panel-' + t.id + '" data-idx="' + i + '">' +
      '<span class="n">' + t.n + '</span><span>' + t.label + '</span></button>';

    var rowsHtml = t.rows.map(function(r){
      return '<div class="visual-row"><div class="visual-ico"><svg class="icon"><use href="#' + r.ico + '"/></svg></div>' +
        '<div><div class="visual-title">' + r.title + '</div><div class="visual-sub">' + r.sub + '</div></div>' +
        (r.tag ? '<span class="visual-tag ' + r.tagClass + '">' + r.tag + '</span>' : '') +
        '</div>';
    }).join('');

    panelsHtml += '<div class="tour-panel' + (i === 0 ? ' active' : '') + '" id="panel-' + t.id + '" role="tabpanel">' +
      '<div class="tour-copy">' +
        '<span class="eyebrow">' + t.eyebrow + '</span>' +
        '<h3 class="h2" style="font-size:clamp(1.5rem,2.6vw,2.1rem);">' + t.title + '</h3>' +
        '<p class="lede">' + t.body + '</p>' +
        '<span class="stat-pill">' + t.stat + '</span>' +
        (t.quote ? '<blockquote class="tour-quote">' + t.quote + '<cite>' + t.cite + '</cite></blockquote>' : '') +
      '</div>' +
      '<div class="tour-visual"><div class="visual-card">' + rowsHtml +
        '<div class="visual-total"><span class="app-sub" style="font-size:12px;color:var(--text-faint);">' + t.total.label + '</span>' +
        '<span class="amt">' + t.total.amt + '</span></div>' +
        '<div style="text-align:right;margin-top:6px;"><span class="visual-tag ' + t.total.tagClass + '">' + t.total.tag + '</span></div>' +
      '</div></div>' +
    '</div>';
  });

  tabsHost.insertAdjacentHTML('beforeend', tabsHtml);
  panelsHost.innerHTML = panelsHtml;

  var tabs = tabsHost.querySelectorAll('.tour-tab');

  function moveIndicator(tab){
    indicator.style.width = tab.offsetWidth + 'px';
    indicator.style.transform = 'translateX(' + tab.offsetLeft + 'px)';
  }

  function activate(idx){
    tabs.forEach(function(tab, i){
      tab.classList.toggle('active', i === idx);
      tab.setAttribute('aria-selected', i === idx);
    });
    TOUR.forEach(function(t, i){
      document.getElementById('panel-' + t.id).classList.toggle('active', i === idx);
    });
    moveIndicator(tabs[idx]);
    tabs[idx].scrollIntoView({ behavior: 'smooth', inline: 'nearest', block: 'nearest' });
  }

  tabs.forEach(function(tab, i){
    tab.addEventListener('click', function(){ activate(i); });
    tab.addEventListener('keydown', function(e){
      if (e.key === 'ArrowRight') { e.preventDefault(); activate((i + 1) % tabs.length); tabs[(i + 1) % tabs.length].focus(); }
      if (e.key === 'ArrowLeft') { e.preventDefault(); activate((i - 1 + tabs.length) % tabs.length); tabs[(i - 1 + tabs.length) % tabs.length].focus(); }
    });
  });

  requestAnimationFrame(function(){ moveIndicator(tabs[0]); });
  window.addEventListener('resize', function(){
    var activeIdx = 0;
    tabs.forEach(function(tab, i){ if (tab.classList.contains('active')) activeIdx = i; });
    moveIndicator(tabs[activeIdx]);
  });
}

/* ---------------- Voices / quotes wall ---------------- */
var VOICES = [
  { initials:'B', name:'Bansita', role:'23, MBA student', quote:'"If it\'s six months straight where I don\'t spend on phone recharge, I\'d definitely consider switching."' },
  { initials:'I', name:'Ish', role:'Marketing professional, Pune', quote:'"For a garage door or doorbell where my WiFi is weak, a built-in hotspot would be very much preferred."' },
  { initials:'M', name:'Prof Meta', role:'32, professor', quote:'"Even at the same price, I\'d switch to get everything in a single package. Any discount is a bonus."' },
  { initials:'P', name:'Purvi', role:'Switched Airtel → Jio for faster support', quote:'"I\'d definitely shift to Airtel for all the features and services."' },
  { initials:'R', name:'Ritika', role:'Runs a preschool, Bhubaneswar', quote:'"If everything has gone well, I\'d continue with it and even look to upgrade."' }
];
function initQuotes(){
  var host = document.getElementById('quotes-grid');
  if (!host) return;
  host.innerHTML = VOICES.map(function(v){
    return '<div class="quote-card"><p>' + v.quote + '</p>' +
      '<div class="quote-person"><span class="quote-avatar">' + v.initials + '</span>' +
      '<div><div class="quote-name">' + v.name + '</div><div class="quote-role">' + v.role + '</div></div></div></div>';
  }).join('');
}
