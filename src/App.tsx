import { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin, Home, Calculator, Award, ArrowRight, Car, Landmark, CheckCircle, Users } from 'lucide-react';
// ─── FORMSPREE ───────────────────────────────────────────────────────────────
const FORMSPREE = 'https://formspree.io/f/mnneglgd'; // ← замени на свой ID

// ─── ПЕРЕВОДЫ ─────────────────────────────────────────────────────────────────
const t = {
  ru: {
    nav: {
      about: 'О нас',
      services: 'Услуги',
      path: 'Ваш путь',
      branches: 'Филиалы',
      reviews: 'Отзывы',
      contacts: 'Контакты',
    },
    logoSubtitle: 'Ипотека без стресса',
    hero: {
      title1: 'Алтын Ипотека',
      title2: 'Ваш путь к собственному дому!',
      sub: 'Прозрачные условия. Честные расчеты. Сопровождение на каждом этапе.',
      desc: 'Мы помогаем семьям обрести своё жильё без лишних сложностей. Наша команда сопровождает вас от первой консультации до получения ключей.',
      cta1: 'Получить консультацию',
      cta2: 'Позвонить сейчас',
      hint: '👉 Оставьте заявку прямо сейчас — и получите персональный расчёт ипотеки.',
    },
    about: {
      title: 'Ваш дом – наш Приоритет',
      desc: 'Алтын Ипотека — команда профессионалов, объединённых ценностями честности, прозрачности и заботы о клиентах. Мы верим: ипотека должна быть понятной и доступной для всех.',
      desc2: 'Мы помогаем семьям обрести своё жильё без лишних сложностей. Наша команда сопровождает вас от первой консультации до получения ключей.',
      videoCaption: 'Посмотрите, как мы помогаем нашим клиентам получить ипотеку мечты',
      mid: 'Алтын Ипотека – надежные решения для вашего жилья.\nВаш дом ближе, чем вы думаете.',
    },
    works: {
      title: 'Мы работаем даже если…',
      items: [
        'Вы не можете подтвердить официальную платёжеспособность',
        'У вас есть вид на жительство',
        'Ваших пенсионных отчислений недостаточно',
      ],
      condition: 'Главное условие: хорошая кредитная история и отсутствие действующих просрочек.',
      note: '👉 Даже в сложных ситуациях мы ищем решение и помогаем вам получить нужный кредит.',
      cta: 'Проверить возможность оформления',
    },
    services: {
      title: 'Услуги',
      sub: 'Мы предлагаем полный спектр кредитных решений',
      list: [
        { title: 'Ипотека на новостройки', desc: 'Современные квартиры с гарантией качества. Мы объясняем всё простыми словами и помогаем оформить ипотеку удобно.' },
        { title: 'Ипотека на вторичное жильё', desc: 'Если мечтаете о квартире в обжитом районе — мы подберём программу и проведём вас через все шаги.' },
        { title: 'Государственные программы', desc: '7-20-25 и другие. Мы разъясняем условия и сопровождаем вас в оформлении.' },
        { title: 'Рефинансирование', desc: 'Если платежи стали тяжёлыми — мы найдём решение, чтобы вам было легче.' },
        { title: 'Автокредитование', desc: 'Хотите новый или подержанный автомобиль? Мы подберём программу, чтобы покупка была доступной и комфортной.' },
        { title: 'Залоговое кредитование', desc: 'Возможность получить деньги под залог недвижимости или автомобиля. Прозрачные условия и юридическая защита.' },
        { title: 'Беззалоговое кредитование', desc: 'Кредит без залога — для ваших личных целей. Быстрое оформление и понятные условия, комфортный ежемесячный платёж.' },
      ],
      mid: 'Алтын Ипотека – надежные решения для вашего жилья.\nВаш дом ближе, чем вы думаете.',
    },
    path: {
      title: 'Ваш путь',
      sub: 'Простой и понятный путь к вашему новому дому',
      steps: [
        { n: '01', title: 'Консультация', desc: 'Звонок или заявка → бесплатная консультация и предварительный расчёт' },
        { n: '02', title: 'Сбор документов', desc: 'Помогаем быстро собрать все необходимые документы' },
        { n: '03', title: 'Подача и одобрение', desc: 'Подаём заявку в банк и получаем одобрение' },
        { n: '04', title: 'Сделка и ключи', desc: 'Сопровождаем до подписания договора и получения ключей' },
      ],
      cta: 'Начать путь к своему дому',
    },
    branches: {
      title: 'Филиалы',
      sub: 'Наш главный офис в Астане',
      city: 'Астана',
      address: 'ул. Бейбитшилик 14, БЦ Marden',
      wa: 'Написать в WhatsApp',
    },
    reviews: {
      title: 'Отзывы',
      sub: 'Что говорят о нас наши клиенты',
      videoTitle: 'Видеоотзывы наших клиентов',
      cta: 'Хочу так же',
    },
    contacts: {
      title: 'Свяжитесь с нами',
      formTitle: 'Оставьте заявку',
      formSub: 'Мы свяжемся с вами в самое ближайшее время и объясним всё простыми словами',
      name: 'Ваше имя',
      phone: 'Номер телефона',
      comment: 'Комментарий...',
      send: 'Отправить заявку',
      privacy: 'Ваши данные в безопасности. Мы используем их только для консультации.',
      mid: 'Заполните заявку — и мы вместе найдём лучший вариант для вас!',
      success: 'Спасибо! Мы свяжемся с вами в ближайшее время.',
    },
    cta: {
      final: 'Ваш дом ближе, чем вы думаете',
      finalSub: 'Заполните заявку — и мы найдём для вас лучшее решение по ипотеке',
      finalBtn: 'Оставить заявку сейчас',
    },
    footer: {
      copy: '© 2026 Altyn Ipoteka. Все права защищены.',
      address: 'Бейбитшилик 14, БЦ Marden, Астана',
    },
  },
  kz: {
    nav: {
      about: 'Біз туралы',
      services: 'Қызметтер',
      path: 'Сіздің жолыңыз',
      branches: 'Филиалдар',
      reviews: 'Пікірлер',
      contacts: 'Байланыс',
    },
    logoSubtitle: 'Стресссіз ипотека',
    hero: {
      title1: 'Алтын Ипотека',
      title2: 'Өз үйіңізге апаратын жол!',
      sub: 'Мөлдір шарттар. Адал есептеулер. Әр кезеңде сүйемелдеу.',
      desc: 'Біз отбасыларға артық қиындықсыз баспана алуға көмектесеміз. Біздің команда бірінші кеңестен кілт алғанға дейін сізбен бірге.',
      cta1: 'Кеңес алу',
      cta2: 'Қазір қоңырау шалу',
      hint: '👉 Қазір өтініш қалдырыңыз — жеке ипотека есебін алыңыз.',
    },
    about: {
      title: 'Сіздің үйіңіз – біздің басымдық',
      desc: 'Алтын Ипотека — адалдық, мөлдірлік және клиенттерге қамқорлық құндылықтарымен біріккен мамандар командасы. Біз сенеміз: ипотека барлығына түсінікті және қолжетімді болуы тиіс.',
      desc2: 'Біз отбасыларға артық қиындықсыз баспана алуға көмектесеміз. Команда бірінші кеңестен кілтке дейін сізбен бірге.',
      videoCaption: 'Клиенттерімізге армандаған ипотеканы алуға қалай көмектесетінімізді көріңіз',
      mid: 'Алтын Ипотека – сіздің баспанаңыз үшін сенімді шешімдер.\nЮй сіз ойлағаннан жақын.',
    },
    works: {
      title: 'Біз жұмыс істейміз, егер…',
      items: [
        'Ресми төлем қабілеттілігін растай алмасаңыз',
        'Тұруға рұқсатыңыз болса',
        'Зейнетақы аударымдарыңыз жеткіліксіз болса',
      ],
      condition: 'Негізгі шарт: жақсы несиелік тарих және белсенді мерзімі өтіп кеткен берешектің болмауы.',
      note: '👉 Күрделі жағдайларда да біз шешім іздейміз.',
      cta: 'Ресімдеу мүмкіндігін тексеру',
    },
    services: {
      title: 'Қызметтер',
      sub: 'Несиелік шешімдердің толық спектрін ұсынамыз',
      list: [
        { title: 'Жаңа үйлерге ипотека', desc: 'Сапа кепілдігімен заманауи пәтерлер. Бәрін қарапайым тілмен түсіндіреміз.' },
        { title: 'Қайталама тұрғын үйге ипотека', desc: 'Тұрған ауданнан пәтер армандасаңыз — бағдарламаны таңдап, барлық қадамдарда жетелейміз.' },
        { title: 'Мемлекеттік бағдарламалар', desc: '7-20-25 және басқалары. Шарттарды түсіндіріп, ресімдеуге сүйемелдейміз.' },
        { title: 'Қайта қаржыландыру', desc: 'Төлемдер ауырласса — жеңілдету жолын табамыз.' },
        { title: 'Автонесие', desc: 'Жаңа немесе қолданылған көлік қалайсыз ба? Қолжетімді бағдарламаны таңдаймыз.' },
        { title: 'Кепілдікті несие', desc: 'Жылжымайтын мүлік немесе көлік кепілімен қаражат алу мүмкіндігі.' },
        { title: 'Кепілдіксіз несие', desc: 'Жеке мақсаттарыңызға арналған кепілдіксіз несие. Жылдам ресімдеу.' },
      ],
      mid: 'Алтын Ипотека – баспанаңыз үшін сенімді шешімдер.\nҮй сіз ойлағаннан жақын.',
    },
    path: {
      title: 'Сіздің жолыңыз',
      sub: 'Жаңа үйіңізге апаратын қарапайым жол',
      steps: [
        { n: '01', title: 'Кеңес', desc: 'Қоңырау немесе өтініш → тегін кеңес және алдын ала есептеу' },
        { n: '02', title: 'Құжаттар', desc: 'Барлық қажетті құжаттарды жылдам жинауға көмектесеміз' },
        { n: '03', title: 'Өтініш беру', desc: 'Банкке өтініш беріп, мақұлдау аламыз' },
        { n: '04', title: 'Мәміле және кілттер', desc: 'Шартқа қол қойылып, кілттер алынғанға дейін сүйемелдейміз' },
      ],
      cta: 'Үйіме бастайтын жолды бастау',
    },
    branches: {
      title: 'Филиалдар',
      sub: 'Астанадағы бас кеңсеміз',
      city: 'Астана',
      address: 'Бейбітшілік көшесі 14, Marden БО',
      wa: 'WhatsApp-қа жазу',
    },
    reviews: {
      title: 'Пікірлер',
      sub: 'Клиенттеріміз біз туралы не айтады',
      videoTitle: 'Клиенттеріміздің бейне пікірлері',
      cta: 'Мен де солай қалаймын',
    },
    contacts: {
      title: 'Бізбен байланысыңыз',
      formTitle: 'Өтініш қалдырыңыз',
      formSub: 'Біз сізбен тез арада хабарласып, бәрін қарапайым тілмен түсіндіреміз',
      name: 'Сіздің атыңыз',
      phone: 'Телефон нөмірі',
      comment: 'Пікір...',
      send: 'Өтініш жіберу',
      privacy: 'Деректеріңіз қауіпсіз. Біз оларды тек кеңес беру үшін пайдаланамыз.',
      mid: 'Өтініш толтырыңыз — бірге ең жақсы нұсқаны табамыз!',
      success: 'Рахмет! Біз сізбен тез арада хабарласамыз.',
    },
    cta: {
      final: 'Үй сіз ойлағаннан жақын',
      finalSub: 'Өтініш толтырыңыз — ипотека бойынша ең жақсы шешімді табамыз',
      finalBtn: 'Қазір өтініш қалдыру',
    },
    footer: {
      copy: '© 2026 Altyn Ipoteka. Барлық құқықтар қорғалған.',
      address: 'Бейбітшілік 14, Marden БО, Астана',
    },
  },
};

// ─── ИКОНКИ ДЛЯ УСЛУГ ────────────────────────────────────────────────────────
const SERVICE_ICONS = [Home, Home, Award, Calculator, Car, Landmark, Users];

// ─── ОТЗЫВЫ ───────────────────────────────────────────────────────────────────
const REVIEWS = [
  { name: 'Алия Закирова', city: 'Астана', text: 'Хочу выразить огромную благодарность команде Алтын Ипотека, в частности Ляззат, Шынгысу, Карлыгаш, Арыстану. Ребята выполняют свою работу от души, оперативно и сплочённо. От А до Я сопровождали и были рядом пока квартиру не оформили на меня. Очень благодарна, что именно с ними прошла этот путь — покупку моей первой квартиры 🥹🫶🏼' },
  { name: 'Айгерим Батыр', city: 'Астана', text: 'Хочу выразить огромную благодарность ипотечному брокеру Ляззат и менеджеру Куаныш за помощь в оформлении кредита! Ляззат — настоящий профессионал: всё подробно объяснила, помогла с документами, сопровождала на каждом этапе. Благодаря её внимательности оформление прошло легко и без стресса. Рекомендую всем! 🙏' },
  { name: 'Ботагоз', city: 'Астана', text: 'Благодарю за прекрасно выполненную работу! Всегда на связи, всё подскажут — с вами я была спокойная, не переживала ни о чём ❤️' },
  { name: 'Ерболат Тлеуов', city: 'Астана', text: 'Спасибо большое Altyn Ipoteka! Особенно хочу выразить огромную благодарность брокеру Нурасыл. Очень доволен его работой: всё объяснил понятно, грамотно проконсультировал, ответил на все вопросы, помог быстро оформить сделку. Благодаря ему приобрёл свою квартиру. Рекомендую!' },
  { name: 'Нурсултан Бартаев', city: 'Астана', text: 'Спасибо большое за вашу работу! Благодаря вам получилось оформить ипотеку! Отдельное спасибо менеджеру Нурасылу! Всем рекомендую!' },
];

// ─── ВИДЕО (правильный embed формат для YouTube Shorts) ───────────────────────
const VIDEO_IDS = [
  'RYhIDGwkfXE', 'foJMf32eQeg', 'a6X3-CNmaW4',
  'vfWYKyDNbzM', '7tYTboM5EaY', 'HJfFIXtD8Ns',
  '1W18pGkvTpc', 'PoJ5zJwec4g', 'nmvfhLSCW4g',
];

// ─── КОМПОНЕНТ ────────────────────────────────────────────────────────────────
export default function App() {
  const [lang, setLang] = useState<'ru' | 'kz'>('ru');
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', comment: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);  // ← вот эта строка пропала
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  const c = t[lang];

  // Эффект тени при скролле
  useEffect(() => {
    const header = document.getElementById('header');
    const onScroll = () => {
      if (window.scrollY > 80) header?.classList.add('scrolled');
      else header?.classList.remove('scrolled');
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(id);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }
    setMenuOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      await fetch(FORMSPREE, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          comment: form.comment || '—',
          _subject: 'Новая заявка | Altyn Ipoteka',
        }),
      });
      setSent(true);
      setForm({ name: '', phone: '', comment: '' });
      setTimeout(() => setSent(false), 10000);
    } catch {
      alert('Ошибка отправки. Напишите в WhatsApp.');
    } finally {
      setSending(false);
    }
  };

  return (
<div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">

      {/* ── ШАПКА ── */}
      <header id="header" className="fixed top-0 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-md z-50 border-b border-gray-100 dark:border-gray-700 shadow-sm transition-shadow">
        <div className="max-w-7xl mx-auto px-5 md:px-6 py-4">
          <div className="flex items-center justify-between">

            {/* Логотип */}
            <div onClick={() => scrollTo('top')} className="flex items-center gap-3 cursor-pointer">
              <div className="flex items-center gap-2 text-3xl font-bold">
                <span className="bg-gradient-to-r from-[#D4AF37] via-[#F5C518] to-[#E8B923] bg-clip-text text-transparent">Altyn</span>
                <span className="text-[#6B46C1]">Ipoteka</span>
              </div>
              <p className="text-sm text-gray-500 hidden sm:block">{c.logoSubtitle}</p>
            </div>

            {/* Десктопное меню */}
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
              {(Object.entries(c.nav) as [string, string][]).map(([key, label]) => (
                <button key={key} onClick={() => scrollTo(key)} className="hover:text-purple-600 transition-colors">{label}</button>
              ))}
            </nav>

            {/* Правая часть */}
            <div className="flex items-center gap-4">
              {/* Переключатель языка */}
              <div className="flex bg-gray-100 rounded-full p-1 text-sm font-medium">
                <button onClick={() => setLang('ru')} className={`px-4 py-1.5 rounded-full transition-all ${lang === 'ru' ? 'bg-white shadow text-black' : 'text-gray-500 hover:text-gray-900'}`}>RU</button>
                <button onClick={() => setLang('kz')} className={`px-4 py-1.5 rounded-full transition-all ${lang === 'kz' ? 'bg-white shadow text-black' : 'text-gray-500 hover:text-gray-900'}`}>KZ</button>
              </div>
                  {/* Кнопка тёмной темы */}
<button
  onClick={() => setDark(!dark)}
  className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all"
  aria-label="Переключить тему"
>
  {dark ? '☀️' : '🌙'}
</button>
              {/* Телефоны (только десктоп) */}
              <div className="hidden lg:flex flex-col text-right text-sm leading-tight">
                <a href="tel:+77072553722" className="hover:text-amber-600 transition-colors">+7 707 255 37 22</a>
                <a href="tel:+77078781443" className="hover:text-amber-600 transition-colors">+7 707 878 14 43</a>
              </div>

              {/* WhatsApp иконка */}
              <a href="https://wa.me/77072553722" target="_blank" rel="noopener noreferrer" className="text-green-600 hidden md:block hover:text-green-500 transition-colors">
                <Phone size={24} />
              </a>

              {/* Бургер */}
              <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 text-gray-700">
                {menuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Мобильное меню */}
        {menuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-700 py-6 px-5">
            <div className="flex flex-col gap-1">
              {(Object.entries(c.nav) as [string, string][]).map(([key, label]) => (
                <button key={key} onClick={() => scrollTo(key)} className="text-left py-3 text-lg font-medium border-b border-gray-50 last:border-0">{label}</button>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t">
              <p className="text-sm text-gray-500 mb-3">Позвонить:</p>
              <a href="tel:+77072553722" className="block text-lg font-medium mb-2">+7 707 255 37 22</a>
              <a href="tel:+77078781443" className="block text-lg font-medium">+7 707 878 14 43</a>
            </div>
          </div>
        )}
      </header>

      {/* ── ГЕРОЙ ── */}
      <section className="min-h-screen bg-[linear-gradient(rgba(0,0,0,0.70),rgba(0,0,0,0.70)),url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80')] bg-cover bg-center flex items-center text-white pt-20 pb-12">
        <div className="max-w-5xl mx-auto px-5 md:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-[#D4AF37] via-[#F5C518] to-[#E8B923] bg-clip-text text-transparent">{c.hero.title1}</span>
            <br />
            <span className="text-[#6B46C1]">{c.hero.title2}</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 max-w-3xl mx-auto text-white/90 font-light">{c.hero.sub}</p>
          <p className="text-base sm:text-lg mb-10 max-w-2xl mx-auto text-white/80 leading-relaxed">{c.hero.desc}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => scrollTo('contacts')} className="bg-gradient-to-r from-[#D4AF37] to-[#F5C518] text-black font-semibold px-10 py-4 rounded-2xl text-lg hover:scale-105 transition-all shadow-lg w-full sm:w-auto">
              {c.hero.cta1}
            </button>
            <a href="tel:+77072553722" className="border-2 border-white text-white font-semibold px-10 py-4 rounded-2xl text-lg hover:bg-white hover:text-[#6B46C1] transition-all w-full sm:w-auto text-center">
              {c.hero.cta2}
            </a>
          </div>
          <p className="mt-8 text-sm text-white/70">{c.hero.hint}</p>
        </div>
      </section>

      {/* ── О НАС ── */}
      <section id="about" className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">{c.about.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{c.about.desc}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80" alt="Команда Altyn Ipoteka" className="w-full h-full object-cover" />
            </div>
            <div className="space-y-10">
              <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow">
                <div className="aspect-video bg-gray-900 rounded-2xl overflow-hidden mb-6 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition">
                    <span className="text-5xl text-white">▶</span>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-center">{c.about.videoCaption}</p>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300 text-center">{c.about.desc2}</p>
            </div>
          </div>
          <div className="text-center mt-20">
            <p className="text-2xl font-medium text-gray-800 dark:text-gray-200 whitespace-pre-line">{c.about.mid}</p>
          </div>
        </div>
      </section>

      {/* ── МЫ РАБОТАЕМ ДАЖЕ ЕСЛИ ── */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-10 text-[#6B46C1]">{c.works.title}</h2>
          <div className="grid sm:grid-cols-3 gap-6 mb-10">
            {c.works.items.map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-4 bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-sm">
                <CheckCircle className="text-green-500 flex-shrink-0" size={32} />
                <p className="text-gray-700 dark:text-gray-200 font-medium">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-lg text-gray-700 dark:text-gray-200 mb-4 font-semibold">{c.works.condition}</p>
          <p className="text-gray-600 dark:text-gray-400 mb-8">{c.works.note}</p>
          <button onClick={() => scrollTo('contacts')} className="bg-gradient-to-r from-[#D4AF37] to-[#F5C518] text-black font-semibold px-10 py-4 rounded-2xl text-lg hover:scale-105 transition-all shadow-lg">
            {c.works.cta}
          </button>
        </div>
      </section>

      {/* ── УСЛУГИ ── */}
      <section id="services" className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 dark:text-white">{c.services.title}</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">{c.services.sub}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {c.services.list.map((s, i) => {
              const Icon = SERVICE_ICONS[i] ?? Home;
              return (
                <div key={i} className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 p-8 rounded-3xl hover:shadow-xl hover:border-[#D4AF37] transition-all group">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#D4AF37] to-[#F5C518] text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{s.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{s.desc}</p>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-16 space-y-4">
            <p className="text-lg text-gray-700 whitespace-pre-line">{c.services.mid}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <button onClick={() => scrollTo('contacts')} className="bg-gradient-to-r from-[#D4AF37] to-[#F5C518] text-black font-semibold px-10 py-4 rounded-2xl text-lg hover:scale-105 transition-all shadow">
                {lang === 'ru' ? 'Подобрать программу для меня' : 'Маған бағдарлама таңдау'}
              </button>
              <button onClick={() => scrollTo('contacts')} className="border-2 border-[#6B46C1] text-[#6B46C1] font-semibold px-10 py-4 rounded-2xl text-lg hover:bg-[#6B46C1] hover:text-white transition-all">
                {lang === 'ru' ? 'Узнать свой платёж' : 'Төлемімді білу'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── ВАШ ПУТЬ ── */}
      <section id="path" className="py-24 bg-gradient-to-br from-[#6B46C1] to-[#553C9A] text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">{c.path.title}</h2>
          <p className="text-xl text-purple-200 mb-16 max-w-2xl mx-auto">{c.path.sub}</p>
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {c.path.steps.map((step, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-3xl hover:bg-white/20 transition-all group">
                <div className="text-5xl font-bold text-white/30 mb-4 group-hover:text-white/50 transition">{step.n}</div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-purple-100 text-sm leading-relaxed">{step.desc}</p>
                {i < 3 && <ArrowRight className="mx-auto mt-6 text-white/40 group-hover:text-white/70" size={24} />}
              </div>
            ))}
          </div>
          <button onClick={() => scrollTo('contacts')} className="bg-white text-[#6B46C1] font-semibold px-12 py-4 rounded-2xl text-lg hover:scale-105 transition-all shadow-lg">
            {c.path.cta}
          </button>
        </div>
      </section>

      {/* ── ФИЛИАЛЫ ── */}
      <section id="branches" className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4 dark:text-white">{c.branches.title}</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-12">{c.branches.sub}</p>
          <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden">
            <div className="p-12">
              <MapPin className="mx-auto text-[#D4AF37] mb-6" size={64} />
              <h3 className="text-3xl font-bold mb-2 dark:text-white">{c.branches.city}</h3>
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">{c.branches.address}</p>
              <div className="space-y-3 text-left text-lg mb-10">
                <a href="tel:+77072553722" className="block text-gray-900 dark:text-gray-200 hover:text-[#D4AF37] transition-colors">+7 707 255 37 22</a>
                <a href="tel:+77078781443" className="block text-gray-900 dark:text-gray-200 hover:text-[#D4AF37] transition-colors">+7 707 878 14 43</a>
                <a href="https://wa.me/77072553722" target="_blank" rel="noopener noreferrer" className="block text-green-600 font-medium hover:underline">{c.branches.wa}</a>
              </div>
              <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-inner">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.12!2d71.4211733!3d51.1704818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x424586d590a7180b%3A0xcbfabe3dec586381!2z0JHQsNC70YvQutCw0Y8g0JHQtdC70L3QvtC80LjQvdC-0L3QvtC5IDE0!5e0!3m2!1sru!2skz!4v1740000000000"
                  width="100%" height="380"
                  style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* ── ОТЗЫВЫ ── */}
      <section id="reviews" className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4 dark:text-white">{c.reviews.title}</h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12">{c.reviews.sub}</p>

          {/* Текстовые отзывы со стрелками */}
          <div className="relative">
            <button
              onClick={() => {
                const el = document.getElementById('reviews-scroll');
                if (el) el.scrollBy({ left: -370, behavior: 'smooth' });
              }}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 hover:shadow-xl transition-all"
            >
              <span className="text-xl text-gray-700">‹</span>
            </button>

            <div id="reviews-scroll" className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory" style={{ scrollbarWidth: 'none' }}>
              {REVIEWS.map((r, i) => (
                <div key={i} className="min-w-[340px] max-w-[340px] bg-gray-50 dark:bg-gray-800 p-8 rounded-3xl shadow-sm snap-start flex-shrink-0 flex flex-col justify-between">
                  <div>
                    <div className="flex gap-1 text-[#D4AF37] mb-4 text-xl">{'★★★★★'}</div>
                    <p className="text-gray-700 dark:text-gray-300 italic mb-6 leading-relaxed text-sm">«{r.text}»</p>
                  </div>
                  <div>
                    <div className="font-semibold dark:text-white">{r.name}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{r.city}</div>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => {
                const el = document.getElementById('reviews-scroll');
                if (el) el.scrollBy({ left: 370, behavior: 'smooth' });
              }}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 hover:shadow-xl transition-all"
            >
              <span className="text-xl text-gray-700 dark:text-gray-200">›</span>
            </button>
          </div>

          {/* CTA после отзывов */}
          <div className="text-center mt-12 mb-20">
            <button onClick={() => scrollTo('contacts')} className="bg-gradient-to-r from-[#D4AF37] to-[#F5C518] text-black font-semibold px-10 py-4 rounded-2xl text-lg hover:scale-105 transition-all shadow-lg">
              {c.reviews.cta}
            </button>
          </div>

          {/* Видеоотзывы со стрелками */}
          <h3 className="text-3xl font-bold text-center mb-10 dark:text-white">{c.reviews.videoTitle}</h3>
          <div className="relative">
            <button
              onClick={() => {
                const el = document.getElementById('videos-scroll');
                if (el) el.scrollBy({ left: -320, behavior: 'smooth' });
              }}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 hover:shadow-xl transition-all"
            >
              <span className="text-xl text-gray-700">‹</span>
            </button>

            <div id="videos-scroll" className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory" style={{ scrollbarWidth: 'none' }}>
              {VIDEO_IDS.map((id, i) => (
                <div key={i} className="min-w-[270px] snap-start flex-shrink-0">
                  <div className="rounded-2xl overflow-hidden shadow-lg bg-black" style={{ aspectRatio: '9/16', maxHeight: 480 }}>
                    <iframe
                      src={`https://www.youtube.com/embed/${id}?rel=0&modestbranding=1`}
                      title={`Видеоотзыв ${i + 1}`}
                      className="w-full h-full"
                      allowFullScreen
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    ></iframe>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => {
                const el = document.getElementById('videos-scroll');
                if (el) el.scrollBy({ left: 320, behavior: 'smooth' });
              }}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 hover:shadow-xl transition-all"
            >
              <span className="text-xl text-gray-700 dark:text-gray-200">›</span>
            </button>
          </div>
        </div>
      </section>

      {/* ── КОНТАКТЫ ── */}
      <section id="contacts" className="py-24 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* Левая колонка */}
            <div>
              <h2 className="text-4xl font-bold mb-10">{c.contacts.title}</h2>
              <div className="space-y-6 text-xl">
                <a href="tel:+77072553722" className="block hover:text-amber-400 transition-colors">+7 707 255 37 22</a>
                <a href="tel:+77078781443" className="block hover:text-amber-400 transition-colors">+7 707 878 14 43</a>
                <a href="mailto:altyn.ipoteka@gmail.com" className="block text-purple-400 hover:text-purple-300 transition-colors">altyn.ipoteka@gmail.com</a>
                <div className="pt-2 text-lg text-gray-300">
                  {c.branches.address}<br />
                  {c.branches.city}, Казахстан
                </div>
                <a href="https://wa.me/77072553722" target="_blank" rel="noopener noreferrer"
                  className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-2xl transition-colors mt-2">
                  {c.branches.wa}
                </a>
              </div>
            </div>

            {/* Форма */}
            <div className="bg-white/10 backdrop-blur-lg p-10 rounded-3xl">
              <h3 className="text-3xl font-semibold mb-3">{c.contacts.formTitle}</h3>
              <p className="text-gray-300 mb-8">{c.contacts.formSub}</p>
              {sent ? (
                <p className="text-green-400 text-xl font-medium">{c.contacts.success}</p>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <input
                    type="text" required placeholder={c.contacts.name}
                    value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-white/10 border border-white/30 rounded-2xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-[#D4AF37]"
                  />
                  <input
                    type="tel" required placeholder={c.contacts.phone}
                    value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                    className="w-full bg-white/10 border border-white/30 rounded-2xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-[#D4AF37]"
                  />
                  <textarea
                    placeholder={c.contacts.comment} rows={4}
                    value={form.comment} onChange={e => setForm({ ...form, comment: e.target.value })}
                    className="w-full bg-white/10 border border-white/30 rounded-2xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-[#D4AF37]"
                  ></textarea>
                  <button type="submit" disabled={sending}
                    className="w-full bg-gradient-to-r from-[#D4AF37] to-[#F5C518] text-black font-semibold py-5 rounded-2xl text-lg hover:scale-105 transition-all shadow-lg disabled:opacity-60 disabled:cursor-not-allowed">
                    {sending ? '...' : c.contacts.send}
                  </button>
                </form>
              )}
              <p className="text-center text-sm text-gray-400 mt-6">{c.contacts.privacy}</p>
            </div>
          </div>

          <div className="text-center mt-20">
            <p className="text-2xl font-medium text-white/90">{c.contacts.mid}</p>
          </div>
        </div>
      </section>

      {/* ── ФИНАЛЬНЫЙ CTA ── */}
      <div className="bg-gradient-to-r from-[#6B46C1] to-[#553C9A] py-16 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">{c.cta.final}</h2>
          <p className="text-xl text-white/80 mb-10">{c.cta.finalSub}</p>
          <button onClick={() => scrollTo('contacts')} className="bg-white text-[#6B46C1] font-semibold px-12 py-5 rounded-2xl text-lg hover:scale-105 transition-all shadow-lg">
            {c.cta.finalBtn}
          </button>
        </div>
      </div>

      {/* ── ПОДВАЛ ── */}
      <footer className="bg-black text-gray-400 py-12 text-center text-sm">
        <div className="max-w-6xl mx-auto px-6">
          {c.footer.copy}<br />
          {c.footer.address}<br />
          <a href="mailto:altyn.ipoteka@gmail.com" className="hover:text-white transition-colors mt-4 inline-block">
            altyn.ipoteka@gmail.com
          </a>
        </div>
      </footer>

    </div>
  );
}