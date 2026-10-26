/* Bar Restaurante Aires */

const CONFIG = {
  phoneDisplay: '+351 912 247 212',
  phoneTel: '+351912247212',
  whatsapp: '351912247212',          // international format, digits only
  timeZone: 'Europe/Lisbon',
  // 0 = Sunday … 6 = Saturday. null = closed.
  hours: [null, ['16:00', '23:00'], ['16:00', '23:00'], ['16:00', '23:00'], ['16:00', '23:00'], ['16:00', '23:00'], ['16:00', '23:00']],
  // Table bookings: first and last seating, every 30 minutes (kitchen closes 22:00)
  firstSeating: '16:00',
  lastSeating: '21:30',
  maxGuests: 12
};

const I18N = {
  en: {
    'nav.favourites': 'Favourites', 'nav.menu': 'Menu', 'nav.story': 'Our story', 'nav.visit': 'Find us',
    'cta.book': 'Book a table', 'cta.menu': 'See the menu', 'cta.fullmenu': 'See the full menu',
    'hero.eyebrow': 'Bar · Restaurante · Burgau',
    'hero.title': 'South African soul,<br><em>Portuguese heart.</em>',
    'hero.lede': 'A family bar &amp; restaurant in the old fishing village of Burgau. Sticky ribs, flame-grilled chicken, bobotie, proper fish &amp; chips, and a warm welcome every time.',
    'hero.note': 'Look for the blue &amp; white house!',
    'fav.eyebrow': 'Before you look at the menu', 'fav.title': 'Meet the favourites',
    'fav.sub': 'The plates our regulars come back for. Every one cooked to order.', 'fav.swipe': 'swipe for more →',
    'dish.combo.tag': 'our pride &amp; joy', 'dish.combo.name': 'Aires House Combo',
    'dish.combo.desc': 'Half a rack of sticky glazed spare ribs and half a grilled chicken, with two sides of your choice.',
    'dish.ribs.tag': 'messy fingers guaranteed', 'dish.ribs.name': 'Spare Ribs',
    'dish.ribs.desc': 'Basted and grilled until sticky. Half or full rack, with two sides.',
    'dish.chicken.tag': 'off the grill', 'dish.chicken.name': 'Grilled Chicken',
    'dish.chicken.desc': 'Half or whole, grilled golden, with two sides.',
    'dish.bobotie.tag': 'a taste of home',
    'dish.bobotie.desc': 'South Africa’s classic spiced mince bake under a golden egg custard. Also made with chickpeas.',
    'dish.fish.tag': 'Friday feeling, every day',
    'dish.fish.desc': 'Crispy battered fish with proper chips, just like back home.',
    'dish.malva.tag': 'save room!', 'dish.malva.name': 'Malva Pudding',
    'dish.malva.desc': 'Warm, syrupy apricot sponge pudding. South Africa’s favourite way to finish a meal.',
    'menu.eyebrow': 'Food &amp; drinks', 'menu.title': 'The menu', 'menu.food': 'Food', 'menu.drinks': 'Drinks',
    'menu.note.cooked': 'Everything is cooked to order. We don’t do fast food, so please allow at least 35 minutes.',
    'menu.note.kitchen': 'Kitchen closes at 22:00 · Takeaway 16:00–22:00',
    'menu.note.couvert': 'Couvert and starters are only charged if you ask for them.',
    'menu.note.vat': 'All prices in euros and include IVA (VAT).',
    'menu.veg': 'veg', 'price.from': 'from',
    'story.eyebrow': 'Our story', 'story.title': 'From Cape Town<br>to Burgau.',
    'story.p1': 'The head of our family, Aires Tolontino Ferreira, emigrated to beautiful Cape Town in the late 1940s. We named our restaurant in his honour. Some of you know us as “Burgau Meu Irmão”.',
    'story.p2': 'We are Aires Justino, a Portuguese national born and raised in Cape Town, and Darlene, born in Zimbabwe. In 2021 we came back to Portugal for a better, safer life and to be closer to our children in the UK. After three months in Aveiro, a road trip to the Algarve brought us to Burgau by pure chance. We had stumbled on our new home, and in August 2021 Bar Restaurante Aires was born.',
    'story.p3': 'Our family has a lifelong history in the fish industry, but here we cook our favourite braai food on the grill. Our promise: the finest quality food, with the warmest South African love.',
    'story.woodstock': 'Proudly from Woodstock',
    'book.eyebrow': 'Reservations', 'book.title': 'Book a table',
    'book.lede': 'Pick a day and time and send us your request on WhatsApp. We’ll confirm as soon as we can.',
    'book.fact.hours': 'Monday to Saturday, 16:00–23:00', 'book.fact.groups': 'Groups of 13 or more: please call us',
    'book.fact.walkin': 'Walk-ins always welcome when there’s space', 'book.call': 'Prefer to talk?',
    'book.soon': 'Online booking with instant confirmation is coming soon.',
    'form.name': 'Your name', 'form.date': 'Date', 'form.time': 'Time', 'form.guests': 'Guests', 'form.phone': 'Phone',
    'form.notes': 'Anything we should know?', 'form.optional': '(optional)', 'form.notes.ph': 'Birthday, high chair, allergies…',
    'form.submit': 'Send booking request', 'form.guest': 'guest', 'form.guestsN': 'guests',
    'form.err.required': 'Please fill in your name, date, time, number of guests and phone.',
    'form.err.sunday': 'We’re closed on Sundays. Please pick another day.',
    'form.err.past': 'That date has passed. Please pick another day.',
    'form.err.notimes': 'No more booking times today. Please pick another day.',
    'form.choose': 'Choose…',
    'wa.intro': 'Hi Aires! I’d like to book a table.', 'wa.name': 'Name', 'wa.date': 'Date', 'wa.time': 'Time',
    'wa.guests': 'Guests', 'wa.phone': 'Phone', 'wa.notes': 'Notes',
    'visit.eyebrow': 'Find us', 'visit.title': 'Come and find us', 'visit.hours': 'Opening hours',
    'visit.kitchen': 'Kitchen closes at 22:00', 'visit.directions': 'Get directions', 'visit.call': 'Call us',
    'visit.mapnote': 'right in the old village', 'visit.showmap': 'Show map', 'visit.mapprivacy': 'Loads Google Maps',
    'visit.closed': 'Closed',
    'footer.made': 'Made with love in Burgau',
    'bar.menu': 'Menu', 'bar.book': 'Book', 'bar.call': 'Call',
    'status.open': 'Open now · until {t}', 'status.today': 'Opens today at {t}',
    'status.tomorrow': 'Closed · opens tomorrow at {t}', 'status.later': 'Closed · opens {d} at {t}',
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    locale: 'en-GB'
  },
  pt: {
    'nav.favourites': 'Favoritos', 'nav.menu': 'Menu', 'nav.story': 'A nossa história', 'nav.visit': 'Onde estamos',
    'cta.book': 'Reservar mesa', 'cta.menu': 'Ver o menu', 'cta.fullmenu': 'Ver o menu completo',
    'hero.eyebrow': 'Bar · Restaurante · Burgau',
    'hero.title': 'Alma sul-africana,<br><em>coração português.</em>',
    'hero.lede': 'Um bar e restaurante familiar na antiga aldeia piscatória de Burgau. Entrecosto, frango grelhado, bobotie, o verdadeiro fish &amp; chips e sempre uma receção calorosa.',
    'hero.note': 'Procure a casa azul e branca!',
    'fav.eyebrow': 'Antes de ver o menu', 'fav.title': 'Os favoritos da casa',
    'fav.sub': 'Os pratos que fazem os nossos clientes voltar. Todos feitos na hora.', 'fav.swipe': 'deslize para ver mais →',
    'dish.combo.tag': 'o orgulho da casa', 'dish.combo.name': 'Combo da Casa Aires',
    'dish.combo.desc': 'Meio entrecosto glaceado e meio frango grelhado, com dois acompanhamentos à escolha.',
    'dish.ribs.tag': 'dedos lambuzados garantidos', 'dish.ribs.name': 'Entrecosto',
    'dish.ribs.desc': 'Pincelado e grelhado até ficar caramelizado. Meia dose ou dose inteira, com dois acompanhamentos.',
    'dish.chicken.tag': 'acabado de grelhar', 'dish.chicken.name': 'Frango Grelhado',
    'dish.chicken.desc': 'Meio ou inteiro, bem dourado, com dois acompanhamentos.',
    'dish.bobotie.tag': 'sabor a casa',
    'dish.bobotie.desc': 'O clássico sul-africano: carne picada condimentada, gratinada com creme de ovo dourado. Também em versão de grão-de-bico.',
    'dish.fish.tag': 'sexta-feira, todos os dias',
    'dish.fish.desc': 'Peixe em polme estaladiço com batatas fritas a sério, tal como em casa.',
    'dish.malva.tag': 'guarde espaço!', 'dish.malva.name': 'Pudim Malva',
    'dish.malva.desc': 'Pudim quente e húmido de alperce. A sobremesa preferida da África do Sul.',
    'menu.eyebrow': 'Comida e bebidas', 'menu.title': 'O menu', 'menu.food': 'Comida', 'menu.drinks': 'Bebidas',
    'menu.note.cooked': 'Tudo é feito na hora. Não servimos fast food, por isso conte com pelo menos 35 minutos.',
    'menu.note.kitchen': 'A cozinha fecha às 22:00 · Take-away 16:00–22:00',
    'menu.note.couvert': 'O couvert e as entradas só são cobrados se os pedir.',
    'menu.note.vat': 'Preços em euros, IVA incluído.',
    'menu.veg': 'veg', 'price.from': 'desde',
    'story.eyebrow': 'A nossa história', 'story.title': 'Da Cidade do Cabo<br>a Burgau.',
    'story.p1': 'O patriarca da nossa família, Aires Tolontino Ferreira, emigrou para a bela Cidade do Cabo no final dos anos 40. Demos o seu nome ao restaurante, em sua homenagem. Há quem nos conheça como “Burgau Meu Irmão”.',
    'story.p2': 'Somos o Aires Justino, português nascido e criado na Cidade do Cabo, e a Darlene, nascida no Zimbabué. Em 2021 regressámos a Portugal em busca de uma vida melhor e mais segura, e para estarmos mais perto dos nossos filhos no Reino Unido. Depois de três meses em Aveiro, uma viagem ao Algarve trouxe-nos a Burgau por puro acaso. Encontrámos a nossa nova casa e, em agosto de 2021, nasceu o Bar Restaurante Aires.',
    'story.p3': 'A nossa família tem uma longa história na indústria do peixe, mas aqui grelhamos a nossa comida de braai preferida. A nossa promessa: comida da melhor qualidade, com o mais caloroso amor sul-africano.',
    'story.woodstock': 'Orgulhosamente de Woodstock',
    'book.eyebrow': 'Reservas', 'book.title': 'Reservar mesa',
    'book.lede': 'Escolha o dia e a hora e envie-nos o pedido por WhatsApp. Confirmamos assim que possível.',
    'book.fact.hours': 'Segunda a sábado, 16:00–23:00', 'book.fact.groups': 'Grupos de 13 ou mais: ligue-nos, por favor',
    'book.fact.walkin': 'Sem reserva? Se houver lugar, é sempre bem-vindo', 'book.call': 'Prefere ligar?',
    'book.soon': 'Em breve: reservas online com confirmação imediata.',
    'form.name': 'Nome', 'form.date': 'Data', 'form.time': 'Hora', 'form.guests': 'Pessoas', 'form.phone': 'Telefone',
    'form.notes': 'Algo que devamos saber?', 'form.optional': '(opcional)', 'form.notes.ph': 'Aniversário, cadeira de bebé, alergias…',
    'form.submit': 'Pedir reserva', 'form.guest': 'pessoa', 'form.guestsN': 'pessoas',
    'form.err.required': 'Preencha o nome, a data, a hora, o número de pessoas e o telefone.',
    'form.err.sunday': 'Ao domingo estamos fechados. Escolha outro dia, por favor.',
    'form.err.past': 'Essa data já passou. Escolha outro dia, por favor.',
    'form.err.notimes': 'Já não há horários disponíveis hoje. Escolha outro dia, por favor.',
    'form.choose': 'Escolher…',
    'wa.intro': 'Olá Aires! Gostaria de reservar uma mesa.', 'wa.name': 'Nome', 'wa.date': 'Data', 'wa.time': 'Hora',
    'wa.guests': 'Pessoas', 'wa.phone': 'Telefone', 'wa.notes': 'Notas',
    'visit.eyebrow': 'Onde estamos', 'visit.title': 'Venha visitar-nos', 'visit.hours': 'Horário',
    'visit.kitchen': 'A cozinha fecha às 22:00', 'visit.directions': 'Como chegar', 'visit.call': 'Ligar',
    'visit.mapnote': 'no coração da aldeia', 'visit.showmap': 'Mostrar mapa', 'visit.mapprivacy': 'Carrega o Google Maps',
    'visit.closed': 'Fechado',
    'footer.made': 'Feito com amor em Burgau',
    'bar.menu': 'Menu', 'bar.book': 'Reservar', 'bar.call': 'Ligar',
    'status.open': 'Aberto agora · até às {t}', 'status.today': 'Abre hoje às {t}',
    'status.tomorrow': 'Fechado · abre amanhã às {t}', 'status.later': 'Fechado · abre {d} às {t}',
    days: ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'],
    locale: 'pt-PT'
  }
};

let lang = 'en';
let activeTab = 'food';

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
const t = (key) => I18N[lang][key] ?? I18N.en[key] ?? key;
const toMin = (hhmm) => { const [h, m] = hhmm.split(':').map(Number); return h * 60 + m; };
const fromMin = (min) => `${String(Math.floor(min / 60)).padStart(2, '0')}:${String(min % 60).padStart(2, '0')}`;
const escapeHtml = (s) => s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

function formatPrice(n) {
  if (n == null) return '';
  return lang === 'pt' ? `${n.toFixed(2).replace('.', ',')} €` : `€${n.toFixed(2)}`;
}

// Current day/time in Burgau, regardless of the visitor's own time zone
function nowInLisbon() {
  const parts = Object.fromEntries(new Intl.DateTimeFormat('en-GB', {
    timeZone: CONFIG.timeZone, year: 'numeric', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit', hourCycle: 'h23', weekday: 'short'
  }).formatToParts(new Date()).map((p) => [p.type, p.value]));
  const dow = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(parts.weekday);
  return { dow, minutes: +parts.hour * 60 + +parts.minute, iso: `${parts.year}-${parts.month}-${parts.day}` };
}

/* ---------- Language ---------- */
function applyLanguage(next) {
  lang = next;
  document.documentElement.lang = lang === 'pt' ? 'pt-PT' : 'en';
  $$('[data-i18n]').forEach((el) => { el.innerHTML = t(el.dataset.i18n); });
  $$('[data-i18n-placeholder]').forEach((el) => { el.placeholder = t(el.dataset.i18nPlaceholder); });
  $$('.lang button').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
  $$('[data-price]').forEach((el) => {
    const p = formatPrice(+el.dataset.price);
    el.textContent = el.dataset.prefix ? `${t('price.from')} ${p}` : p;
  });
  renderMenu();
  renderHours();
  renderStatus();
  buildGuestOptions();
  buildTimeOptions();
  try { localStorage.setItem('aires-lang', lang); } catch (e) { /* storage unavailable */ }
}

function initialLanguage() {
  try {
    const saved = localStorage.getItem('aires-lang');
    if (saved === 'en' || saved === 'pt') return saved;
  } catch (e) { /* storage unavailable */ }
  return (navigator.language || '').toLowerCase().startsWith('pt') ? 'pt' : 'en';
}

/* ---------- Menu ---------- */
function renderMenu() {
  const menu = window.AIRES_MENU;
  if (!menu) return;
  ['food', 'drinks'].forEach((tab) => {
    $(`[data-panel="${tab}"]`).innerHTML = menu[tab].map((cat) => `
      <section class="menu-cat" id="m-${cat.id}">
        <h3>${escapeHtml(cat.title[lang])}</h3>
        ${cat.note ? `<p class="menu-cat-note">${escapeHtml(cat.note[lang])}</p>` : ''}
        ${cat.items.map((it) => `
          <div class="menu-item">
            <div class="menu-row">
              <span class="menu-name">${escapeHtml(it.name[lang])}${it.veg ? `<span class="menu-badge">${t('menu.veg')}</span>` : ''}</span>
              ${it.price != null ? `<span class="menu-dots" aria-hidden="true"></span><span class="menu-price">${formatPrice(it.price)}</span>` : ''}
            </div>
            ${it.desc ? `<p class="menu-desc">${escapeHtml(it.desc[lang])}</p>` : ''}
          </div>`).join('')}
      </section>`).join('');
  });
  $('[data-chips]').innerHTML = menu[activeTab]
    .map((cat) => `<a href="#m-${cat.id}">${escapeHtml(cat.title[lang])}</a>`).join('');
}

function selectTab(tab) {
  activeTab = tab;
  $$('.menu-tabs [role="tab"]').forEach((b) => {
    const on = b.dataset.tab === tab;
    b.setAttribute('aria-selected', String(on));
    b.tabIndex = on ? 0 : -1;
  });
  $$('[data-panel]').forEach((p) => { p.hidden = p.dataset.panel !== tab; });
  renderMenu();
}

/* ---------- Hours & open status ---------- */
function renderHours() {
  const tbody = $('[data-hours]');
  const { dow } = nowInLisbon();
  const order = [1, 2, 3, 4, 5, 6, 0];
  tbody.innerHTML = order.map((d) => {
    const h = CONFIG.hours[d];
    const name = t('days')[d];
    return `<tr class="${d === dow ? 'today' : ''}"><td>${name.charAt(0).toUpperCase() + name.slice(1)}</td><td>${h ? `${h[0]}–${h[1]}` : t('visit.closed')}</td></tr>`;
  }).join('');
}

function renderStatus() {
  const chip = $('.status-chip');
  const el = $('[data-status]');
  const { dow, minutes } = nowInLisbon();
  const today = CONFIG.hours[dow];
  if (today && minutes >= toMin(today[0]) && minutes < toMin(today[1])) {
    chip.dataset.open = 'true';
    el.textContent = t('status.open').replace('{t}', today[1]);
    return;
  }
  chip.dataset.open = 'false';
  if (today && minutes < toMin(today[0])) {
    el.textContent = t('status.today').replace('{t}', today[0]);
    return;
  }
  for (let i = 1; i <= 7; i++) {
    const d = (dow + i) % 7;
    const h = CONFIG.hours[d];
    if (!h) continue;
    el.textContent = i === 1
      ? t('status.tomorrow').replace('{t}', h[0])
      : t('status.later').replace('{d}', t('days')[d]).replace('{t}', h[0]);
    return;
  }
}

/* ---------- Booking (WhatsApp for now; swap for the real system later) ---------- */
const form = $('[data-booking]');
const dateInput = $('#b-date');
const timeSelect = $('#b-time');
const guestSelect = $('#b-guests');
const errorBox = $('[data-form-error]');

function dateFromIso(iso) {
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(Date.UTC(y, m - 1, d, 12));
}

function buildGuestOptions() {
  const current = guestSelect.value;
  guestSelect.innerHTML = Array.from({ length: CONFIG.maxGuests }, (_, i) => {
    const n = i + 1;
    return `<option value="${n}">${n} ${n === 1 ? t('form.guest') : t('form.guestsN')}</option>`;
  }).join('');
  guestSelect.value = current || '2';
}

function buildTimeOptions() {
  const current = timeSelect.value;
  const now = nowInLisbon();
  let start = toMin(CONFIG.firstSeating);
  if (dateInput.value === now.iso) start = Math.max(start, Math.ceil((now.minutes + 60) / 30) * 30);
  const slots = [];
  for (let m = start; m <= toMin(CONFIG.lastSeating); m += 30) slots.push(fromMin(m));
  timeSelect.innerHTML = `<option value="">${t('form.choose')}</option>` +
    slots.map((s) => `<option value="${s}">${s}</option>`).join('');
  if (slots.includes(current)) timeSelect.value = current;
  return slots.length;
}

function showError(key) {
  errorBox.textContent = key ? t(key) : '';
  errorBox.hidden = !key;
}

function validateDate() {
  const v = dateInput.value;
  if (!v) return null;
  if (v < nowInLisbon().iso) return 'form.err.past';
  if (!CONFIG.hours[dateFromIso(v).getUTCDay()]) return 'form.err.sunday';
  if (buildTimeOptions() === 0) return 'form.err.notimes';
  return null;
}

function initBooking() {
  dateInput.min = nowInLisbon().iso;
  dateInput.addEventListener('change', () => {
    const err = validateDate();
    dateInput.setAttribute('aria-invalid', String(!!err));
    showError(err);
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form));
    const dateErr = validateDate();
    if (dateErr) { showError(dateErr); dateInput.focus(); return; }

    const missing = ['name', 'date', 'time', 'guests', 'phone'].filter((k) => !String(data[k] || '').trim());
    $$('input, select', form).forEach((el) => el.setAttribute('aria-invalid', String(missing.includes(el.name))));
    if (missing.length) { showError('form.err.required'); form.elements[missing[0]].focus(); return; }
    showError(null);

    const prettyDate = new Intl.DateTimeFormat(t('locale'), {
      weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC'
    }).format(dateFromIso(data.date));

    const lines = [
      t('wa.intro'), '',
      `${t('wa.name')}: ${data.name.trim()}`,
      `${t('wa.date')}: ${prettyDate}`,
      `${t('wa.time')}: ${data.time}`,
      `${t('wa.guests')}: ${data.guests}`,
      `${t('wa.phone')}: ${data.phone.trim()}`
    ];
    if (data.notes.trim()) lines.push(`${t('wa.notes')}: ${data.notes.trim()}`);

    window.open(`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(lines.join('\n'))}`, '_blank', 'noopener');
  });
}

/* ---------- Map (only loads Google when asked, for privacy) ---------- */
function initMap() {
  $('[data-map-load]').addEventListener('click', () => {
    const iframe = document.createElement('iframe');
    iframe.src = 'https://maps.google.com/maps?q=Bar%20Restaurante%20Aires%2C%20Burgau%2C%20Portugal&z=16&output=embed';
    iframe.title = 'Map: Bar Restaurante Aires, Burgau';
    iframe.loading = 'lazy';
    iframe.referrerPolicy = 'no-referrer-when-downgrade';
    $('[data-map]').replaceChildren(iframe);
  });
}

/* ---------- Init ---------- */
$$('[data-phone-link]').forEach((a) => { a.href = `tel:${CONFIG.phoneTel}`; });
$$('.lang button').forEach((b) => b.addEventListener('click', () => applyLanguage(b.dataset.lang)));
$$('.menu-tabs [role="tab"]').forEach((b) => {
  b.addEventListener('click', () => selectTab(b.dataset.tab));
  b.addEventListener('keydown', (e) => {
    if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
    const next = b.dataset.tab === 'food' ? 'drinks' : 'food';
    selectTab(next);
    $(`.menu-tabs [data-tab="${next}"]`).focus();
  });
});
$('[data-year]').textContent = new Date().getFullYear();

initBooking();
initMap();
applyLanguage(initialLanguage());
setInterval(renderStatus, 60 * 1000);
