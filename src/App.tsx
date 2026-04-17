import { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin, Star, Users, Home, Calculator, Award, ArrowRight, Car, Landmark } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lang, setLang] = useState<'ru' | 'kz'>('ru');

  const t = {
    ru: {
      about: "О нас",
      services: "Услуги",
      path: "Ваш путь",
      branches: "Филиалы",
      reviews: "Отзывы",
      contacts: "Контакты",
      heroTitle1: "Ваша мечта о",
      heroTitle2: "собственном доме",
      heroSubtitle: "становится реальностью",
      heroDesc: "Профессиональное сопровождение ипотеки во всех банках Казахстана",
      ctaConsult: "Получить консультацию",
      ctaCall: "Позвонить сейчас",
      sendRequest: "Отправить заявку",
      name: "Ваше имя",
      phone: "Номер телефона",
      comment: "Комментарий...",
      astana: "Астана",
      logoSubtitle: "Ипотека без стресса",
      aboutDesc: "Мы — команда профессиональных ипотечных консультантов с опытом более 7 лет. Помогаем тысячам казахстанцев купить жильё на выгодных условиях.",
      videoAbout: "Видео о компании",
      videoWatch: "Посмотрите, как мы помогаем нашим клиентам получить ипотеку мечты",
      approvedMortgages: "500+ одобренных ипотек",
      happyClients: "98% довольных клиентов",
      servicesDesc: "Полный спектр услуг по ипотечному кредитованию",
      service1Title: "Подбор ипотеки",
      service1Desc: "Анализ условий 20+ банков и подбор самого выгодного варианта",
      service2Title: "Ипотечный калькулятор",
      service2Desc: "Точный расчёт платежа и переплаты",
      service3Title: "Госпрограммы",
      service3Desc: "7-20-25, Орда, Молодёжная и другие льготные программы",
      service4Title: "Сопровождение сделки",
      service4Desc: "Полное сопровождение от документов до ключей",
      service5Title: "Рефинансирование",
      service5Desc: "Снижение ставки по существующей ипотеке",
      service6Title: "Бесплатная консультация",
      service6Desc: "Онлайн и оффлайн консультации",
      pathDesc: "Простой и понятный путь к вашему новому дому",
      step1Title: "Консультация",
      step1Desc: "Звонок или заявка → бесплатная консультация и предварительный расчёт",
      step2Title: "Сбор документов",
      step2Desc: "Помогаем быстро собрать все необходимые документы",
      step3Title: "Подача и одобрение",
      step3Desc: "Подаём заявку в банк и получаем одобрение",
      step4Title: "Сделка и ключи",
      step4Desc: "Сопровождаем до подписания договора и получения ключей",
      branchesDesc: "Наш главный офис в Астане",
      address: "ул. Бейбитшилик 14, БЦ Marden",
      writeWhatsApp: "Написать в WhatsApp",
      reviewsDesc: "Что говорят о нас наши клиенты",
      videoReviews: "Видеоотзывы наших клиентов",
      contactUs: "Свяжитесь с нами",
      leaveRequest: "Оставить заявку",
      footer: "© 2026 Altyn Ipoteka. Все права защищены.",
      footerAddress: "Бейбитшилик 14, БЦ Marden, Астана"
    },
    kz: {
      about: "Біз туралы",
      services: "Қызметтер",
      path: "Сіздің жолыңыз",
      branches: "Филиалдар",
      reviews: "Пікірлер",
      contacts: "Байланыс",
      heroTitle1: "Сіздің арманыңыз",
      heroTitle2: "өз үйіңіз",
      heroSubtitle: "шындыққа айналады",
      heroDesc: "Қазақстанның барлық банктерінде ипотеканы кәсіби түрде сүйемелдеу",
      ctaConsult: "Кеңес алу",
      ctaCall: "Қазір қоңырау шалу",
      sendRequest: "Өтініш жіберу",
      name: "Сіздің атыңыз",
      phone: "Телефон нөмірі",
      comment: "Пікір...",
      astana: "Астана",
      logoSubtitle: "Стресссіз ипотека",
      aboutDesc: "Біз — 7 жылдан астам тәжірибесі бар кәсіби ипотекалық кеңесшілер тобы. Мыңдаған қазақстандықтарға тиімді шарттармен баспана сатып алуға көмектесеміз.",
      videoAbout: "Компания туралы бейне",
      videoWatch: "Біздің клиенттерімізге армандаған ипотеканы алуға қалай көмектесетінімізді көріңіз",
      approvedMortgages: "500+ мақұлданған ипотека",
      happyClients: "98% риза клиенттер",
      servicesDesc: "Ипотекалық несиелеу бойынша толық қызметтер спектрі",
      service1Title: "Ипотеканы таңдау",
      service1Desc: "20+ банктің шарттарын талдау және ең тиімді нұсқаны таңдау",
      service2Title: "Ипотекалық калькулятор",
      service2Desc: "Төлем мен артық төлемді дәл есептеу",
      service3Title: "Мембағдарламалар",
      service3Desc: "7-20-25, Орда, Жастар және басқа жеңілдікті бағдарламалар",
      service4Title: "Мәмілені сүйемелдеу",
      service4Desc: "Құжаттардан кілтке дейін толық сүйемелдеу",
      service5Title: "Қайта қаржыландыру",
      service5Desc: "Қолданыстағы ипотека бойынша мөлшерлемені төмендету",
      service6Title: "Тегін кеңес",
      service6Desc: "Онлайн және офлайн кеңестер",
      pathDesc: "Жаңа үйіңізге апаратын қарапайым және түсінікті жол",
      step1Title: "Кеңес",
      step1Desc: "Қоңырау немесе өтініш → тегін кеңес және алдын ала есептеу",
      step2Title: "Құжаттарды жинау",
      step2Desc: "Барлық қажетті құжаттарды тез жинауға көмектесеміз",
      step3Title: "Өтініш беру және мақұлдау",
      step3Desc: "Банкке өтініш беріп, мақұлдау аламыз",
      step4Title: "Мәміле және кілттер",
      step4Desc: "Шартқа қол қойылып, кілттер алынғанға дейін сүйемелдейміз",
      branchesDesc: "Астанадағы бас кеңсеміз",
      address: "Бейбітшілік көшесі 14, Marden БО",
      writeWhatsApp: "WhatsApp-қа жазу",
      reviewsDesc: "Клиенттеріміз біз туралы не айтады",
      videoReviews: "Клиенттеріміздің бейне пікірлері",
      contactUs: "Бізбен байланысыңыз",
      leaveRequest: "Өтініш қалдыру",
      footer: "© 2026 Altyn Ipoteka. Барлық құқықтар қорғалған.",
      footerAddress: "Бейбітшілік 14, Marden БО, Астана"
    }
  };

  const current = t[lang];

  useEffect(() => {
    const header = document.getElementById('header');
    
    const handleScroll = () => {
      if (window.scrollY > 100) {
        header?.classList.add('scrolled');
      } else {
        header?.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(id);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const services = [
    { icon: Home, titleKey: 'service1Title', descKey: 'service1Desc' },
    { icon: Calculator, titleKey: 'service2Title', descKey: 'service2Desc' },
    { icon: Award, titleKey: 'service3Title', descKey: 'service3Desc' },
    { icon: Star, titleKey: 'service4Title', descKey: 'service4Desc' },
    { icon: Users, titleKey: 'service5Title', descKey: 'service5Desc' },
    { icon: Phone, titleKey: 'service6Title', descKey: 'service6Desc' },
  ];

  const steps = [
    { step: "01", titleKey: 'step1Title', descKey: 'step1Desc' },
    { step: "02", titleKey: 'step2Title', descKey: 'step2Desc' },
    { step: "03", titleKey: 'step3Title', descKey: 'step3Desc' },
    { step: "04", titleKey: 'step4Title', descKey: 'step4Desc' },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
{/* HEADER — исправленная версия (работает на ПК и телефоне) */}
<header className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100 shadow-sm">
  <div className="max-w-7xl mx-auto px-5 md:px-6 py-5">
    <div className="flex items-center justify-between">
      
      {/* Логотип */}
      <div 
        onClick={() => scrollTo('top')}
        className="flex items-center gap-3 cursor-pointer"
      >
        <div className="flex items-center gap-2 text-3xl font-bold">
          <span className="bg-gradient-to-r from-[#D4AF37] via-[#F5C518] to-[#E8B923] bg-clip-text text-transparent">
            Altyn
          </span>
          <span className="text-[#6B46C1]">Ipoteka</span>
        </div>
        <p className="text-sm text-gray-500 hidden sm:block">{current.logoSubtitle}</p>
      </div>

      {/* Меню для ПК */}
      <nav className="hidden md:flex items-center gap-8 text-base font-medium">
        <button onClick={() => scrollTo('about')} className="hover:text-purple-600 transition-colors">{current.about}</button>
        <button onClick={() => scrollTo('services')} className="hover:text-purple-600 transition-colors">{current.services}</button>
        <button onClick={() => scrollTo('path')} className="hover:text-purple-600 transition-colors">{current.path}</button>
        <button onClick={() => scrollTo('reviews')} className="hover:text-purple-600 transition-colors">{current.reviews}</button>
        <button onClick={() => scrollTo('branches')} className="hover:text-purple-600 transition-colors">{current.branches}</button>
        <button onClick={() => scrollTo('contacts')} className="hover:text-purple-600 transition-colors">{current.contacts}</button>
      </nav>

      {/* Правая часть */}
      <div className="flex items-center gap-4">
        
        {/* Язык */}
        <div className="flex bg-gray-100 rounded-full p-1 text-sm font-medium">
          <button 
            onClick={() => setLang('ru')} 
            className={`px-4 py-1.5 rounded-full transition-all ${lang === 'ru' ? 'bg-white shadow text-black' : 'text-gray-600 hover:text-gray-900'}`}
          >
            RU
          </button>
          <button 
            onClick={() => setLang('kz')} 
            className={`px-4 py-1.5 rounded-full transition-all ${lang === 'kz' ? 'bg-white shadow text-black' : 'text-gray-600 hover:text-gray-900'}`}
          >
            KZ
          </button>
        </div>

        {/* Телефоны (только на ПК) */}
        <div className="hidden md:flex flex-col text-right text-sm leading-tight">
          <a href="tel:+77072553722" className="hover:text-amber-600">+7 707 255 37 22</a>
          <a href="tel:+77078781443" className="hover:text-amber-600">+7 707 878 14 43</a>
        </div>

        {/* WhatsApp */}
        <a href="https://wa.me/77072553722" target="_blank" className="text-green-600 hidden md:block">
          <Phone size={26} />
        </a>

        {/* Бургер-меню для телефона */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="md:hidden p-2 text-gray-700"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </div>
  </div>

  {/* Выпадающее меню для мобильных */}
  {isMenuOpen && (
    <div className="md:hidden bg-white border-t border-gray-100 py-6 px-5">
      <div className="flex flex-col gap-5 text-lg font-medium">
        <button onClick={() => scrollTo('about')} className="text-left py-2">О нас</button>
        <button onClick={() => scrollTo('services')} className="text-left py-2">Услуги</button>
        <button onClick={() => scrollTo('path')} className="text-left py-2">Ваш путь</button>
        <button onClick={() => scrollTo('reviews')} className="text-left py-2">Отзывы</button>
        <button onClick={() => scrollTo('branches')} className="text-left py-2">Филиалы</button>
        <button onClick={() => scrollTo('contacts')} className="text-left py-2">Контакты</button>
      </div>

      <div className="mt-8 pt-6 border-t">
        <div className="text-sm text-gray-500 mb-3">Позвонить:</div>
        <a href="tel:+77072553722" className="block text-lg font-medium mb-1">+7 707 255 37 22</a>
        <a href="tel:+77078781443" className="block text-lg font-medium">+7 707 878 14 43</a>
      </div>
    </div>
  )}
</header>

{/* HERO — улучшенная адаптация под мобильные */}
<section className="min-h-screen bg-[linear-gradient(rgba(0,0,0,0.70),rgba(0,0,0,0.70)),url('https://images.unsplash.com/photo-1560518883-ce09059eeffa')] bg-cover bg-center flex items-center text-white pt-16 pb-12">
  <div className="max-w-5xl mx-auto px-5 md:px-6 text-center">
    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 tracking-tight">
      <span className="bg-gradient-to-r from-[#D4AF37] via-[#F5C518] to-[#E8B923] bg-clip-text text-transparent">
        Алтын Ипотека
      </span>
      <br className="hidden sm:block" />
      <span className="text-[#6B46C1] block sm:inline">
        Ваш путь к собственному дому!
      </span>
    </h1>
    
    <p className="text-lg sm:text-xl md:text-2xl mb-8 md:mb-10 max-w-3xl mx-auto text-white/90 font-light px-4">
      Прозрачные условия. Честные расчеты. Сопровождение на каждом этапе.
    </p>

    <p className="text-base sm:text-lg mb-10 md:mb-14 max-w-2xl mx-auto text-white/80 leading-relaxed px-4">
      Мы помогаем семьям обрести своё жильё без лишних сложностей. 
      Наша команда сопровождает вас от первой консультации до получения ключей.
    </p>

    <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
      <button 
        onClick={() => scrollTo('contacts')} 
        className="bg-gradient-to-r from-[#D4AF37] to-[#F5C518] text-black font-semibold px-10 py-4 rounded-2xl text-base sm:text-lg hover:scale-105 transition-all shadow-lg w-full sm:w-auto"
      >
        Получить консультацию
      </button>
      
      <a 
        href="tel:+77072553722" 
        className="border-2 border-white text-white font-semibold px-10 py-4 rounded-2xl text-base sm:text-lg hover:bg-white hover:text-[#6B46C1] transition-all w-full sm:w-auto text-center"
      >
        Позвонить сейчас
      </a>
    </div>

    <p className="mt-8 text-sm text-white/70 px-4">
      Оставьте заявку прямо сейчас — и получите персональный расчёт ипотеки
    </p>
  </div>
</section>
{/* О НАС — обновлённый по документу */}
<section id="about" className="py-24 bg-gray-50">
  <div className="max-w-6xl mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold mb-6">Ваш дом – наш Приоритет</h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Алтын Ипотека — команда профессионалов, объединённых ценностями честности, 
        прозрачности и заботы о клиентах. Мы верим: ипотека должна быть понятной и доступной для всех.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-12 items-center">
      {/* Фото */}
      <div className="rounded-3xl overflow-hidden shadow-xl">
        <img 
          src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d" 
          alt="Команда Altyn Ipoteka"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Видео + текст */}
      <div className="space-y-10">
        <div className="bg-white rounded-3xl p-8 shadow">
          <div className="aspect-video bg-gray-900 rounded-2xl overflow-hidden mb-6 flex items-center justify-center relative">
            <div 
              className="w-20 h-20 bg-white/20 backdrop-blur rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition"
              onClick={() => alert('Здесь будет видео о компании')}
            >
              <span className="text-5xl text-white">▶</span>
            </div>
          </div>
          <p className="text-gray-600 text-center">
            Посмотрите, как мы помогаем нашим клиентам получить ипотеку мечты
          </p>
        </div>

        <div className="text-center">
          <p className="text-lg text-gray-700">
            Мы помогаем семьям обрести своё жильё без лишних сложностей. 
            Наша команда сопровождает вас от первой консультации до получения ключей.
          </p>
        </div>
      </div>
    </div>

    {/* Дополнительный текст между блоками */}
    <div className="text-center mt-20">
      <p className="text-2xl font-medium text-gray-800">
        Алтын Ипотека – надежные решения для вашего жилья.<br />
        Ваш дом ближе, чем вы думаете.
      </p>
    </div>
  </div>
</section>

{/* УСЛУГИ — с иконками lucide-react */}
<section id="services" className="py-24 bg-white">
  <div className="max-w-6xl mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold mb-4">Услуги</h2>
      <p className="text-xl text-gray-600">Мы предлагаем полный спектр кредитных решений</p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="bg-white border border-gray-100 p-8 rounded-3xl hover:shadow-xl hover:border-[#D4AF37] transition-all group">
        <div className="w-14 h-14 bg-gradient-to-br from-[#D4AF37] to-[#F5C518] text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
          <Home size={28} />
        </div>
        <h3 className="text-2xl font-semibold mb-4">Ипотека на новостройки</h3>
        <p className="text-gray-600">Современные квартиры с гарантией качества. Мы объясняем всё простыми словами и помогаем оформить ипотеку удобно.</p>
      </div>

      <div className="bg-white border border-gray-100 p-8 rounded-3xl hover:shadow-xl hover:border-[#D4AF37] transition-all group">
        <div className="w-14 h-14 bg-gradient-to-br from-[#D4AF37] to-[#F5C518] text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
          <Home size={28} />
        </div>
        <h3 className="text-2xl font-semibold mb-4">Ипотека на вторичное жильё</h3>
        <p className="text-gray-600">Если мечтаете о квартире в обжитом районе — мы подберём программу и проведём вас через все шаги.</p>
      </div>

      <div className="bg-white border border-gray-100 p-8 rounded-3xl hover:shadow-xl hover:border-[#D4AF37] transition-all group">
        <div className="w-14 h-14 bg-gradient-to-br from-[#D4AF37] to-[#F5C518] text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
          <Award size={28} />
        </div>
        <h3 className="text-2xl font-semibold mb-4">Государственные программы</h3>
        <p className="text-gray-600">7-20-25 и другие. Мы разъясняем условия и сопровождаем вас в оформлении.</p>
      </div>

      <div className="bg-white border border-gray-100 p-8 rounded-3xl hover:shadow-xl hover:border-[#D4AF37] transition-all group">
        <div className="w-14 h-14 bg-gradient-to-br from-[#D4AF37] to-[#F5C518] text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
          <Calculator size={28} />
        </div>
        <h3 className="text-2xl font-semibold mb-4">Рефинансирование</h3>
        <p className="text-gray-600">Если платежи стали тяжёлыми — мы найдём решение, чтобы вам было легче.</p>
      </div>

      <div className="bg-white border border-gray-100 p-8 rounded-3xl hover:shadow-xl hover:border-[#D4AF37] transition-all group">
        <div className="w-14 h-14 bg-gradient-to-br from-[#D4AF37] to-[#F5C518] text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
          <Car size={28} />   {/* ← иконка машины */}
        </div>
        <h3 className="text-2xl font-semibold mb-4">Автокредитование</h3>
        <p className="text-gray-600">Хотите новый или подержанный автомобиль? Мы подберём программу, чтобы покупка была доступной и комфортной.</p>
      </div>

      <div className="bg-white border border-gray-100 p-8 rounded-3xl hover:shadow-xl hover:border-[#D4AF37] transition-all group">
        <div className="w-14 h-14 bg-gradient-to-br from-[#D4AF37] to-[#F5C518] text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
          <Landmark size={28} />   {/* ← иконка залога */}
        </div>
        <h3 className="text-2xl font-semibold mb-4">Залоговое и беззалоговое кредитование</h3>
        <p className="text-gray-600">Кредит под залог недвижимости или автомобиля, а также без залога — для ваших личных целей.</p>
      </div>
    </div>

    <div className="text-center mt-16">
      <p className="text-lg text-gray-700">
        Алтын Ипотека – надежные решения для вашего жилья.<br />
        Ваш дом ближе, чем вы думаете.
      </p>
    </div>
  </div>
</section>

      {/* ВАШ ПУТЬ */}
      <section id="path" className="py-24 bg-gradient-to-br from-[#6B46C1] to-[#553C9A] text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">{current.path}</h2>
          <p className="text-xl text-purple-200 mb-16 max-w-2xl mx-auto">{current.pathDesc}</p>

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((item, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-3xl hover:bg-white/20 transition-all group">
                <div className="text-5xl font-bold text-white/30 mb-4 group-hover:text-white/50 transition">{item.step}</div>
                <h3 className="text-2xl font-semibold mb-4">{current[item.titleKey as keyof typeof current]}</h3>
                <p className="text-purple-100">{current[item.descKey as keyof typeof current]}</p>
                {i < 3 && <ArrowRight className="mx-auto mt-8 text-white/40 group-hover:text-white/70" size={28} />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ФИЛИАЛЫ */}
      <section id="branches" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">{current.branches}</h2>
          <p className="text-gray-600 mb-12">{current.branchesDesc}</p>

          <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="p-12">
              <MapPin className="mx-auto text-[#D4AF37] mb-6" size={70} />
              <h3 className="text-3xl font-bold mb-3">{current.astana}</h3>
              <p className="text-xl text-gray-700 mb-8">{current.address}</p>

              <div className="space-y-4 text-left text-lg mb-10">
                <a href="tel:+77072553722" className="block hover:text-[#D4AF37]">+7 707 255 37 22</a>
                <a href="tel:+77078781443" className="block hover:text-[#D4AF37]">+7 707 878 14 43</a>
                <a href="https://wa.me/77072553722" target="_blank" className="block text-green-600 font-medium hover:underline">{current.writeWhatsApp}</a>
              </div>

              {/* КАРТА */}
              <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-inner">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.12!2d71.4211733!3d51.1704818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x424586d590a7180b%3A0xcbfabe3dec586381!2z0JHQsNC70YvQutCw0Y8g0JHQtdC70L3QvtC80LjQvdC-0L3QvtC5IDE0!5e0!3m2!1sru!2skz!4v1740000000000" 
                  width="100%" 
                  height="420" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ОТЗЫВЫ */}
      <section id="reviews" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">{current.reviews}</h2>
          <p className="text-center text-gray-600 mb-12">{current.reviewsDesc}</p>

          {/* Горизонтальный скролл отзывов */}
          <div className="mb-20">
            <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide">
              {[
                { name: "Алия Закирова", city: "Астана", text: "Хочу выразить огромную благодарность команде Алтын Ипотека , в частности Ляззат , Шынгысу, Карлыгаш, Арыстану  Ребята выполняют свою работу от души, оперативно и сплоченно 🫶🏼 От А до Яопровождают и были рядом пока квартиру не оформили на меня 😎🙏 Очень благодарна , что именно с ними прошла этот путь, покупке моей первой квартиры 🥹🥹🥹🫶🏼", rating: 5 },
                { name: "Айгерим Батыр", city: "Астана", text: "Хочу выразить огромную благодарность ипотечному брокеру Ляззат руководителю компании Altyn Ипотека и менеджеру Куаныш за помощь в оформлении кредита! Ляззат — настоящий профессионал своего дела: всё подробно объяснила, помогла с документами, сопровождала на каждом этапе и всегда была на связи. Благодаря её внимательности и ответственности оформление ипотеки прошло легко и без стресса. Рекомендую Altyn Ипотека и лично Ляззат всем, кто хочет оформить ипотеку быстро, надёжно и с уверенностью в результате! 🙏.", rating: 5 },
                { name: "Ботагоз", city: "Астана", text: "Благодарю за прекрасно выполненную работу! Всегда на связи,все подскажут - с вами я была спокойная, не переживала ни о чем❤️ благодарю еще раз", rating: 5 },
                { name: "Ерболат Тлеуов", city: "Астана", text: "Спасибо большое Altynipoteka !!особенно хочу выразить огромную благодарность брокеру Нурасыл!!Очень довольна его работой,Всё объяснил понятно, Грамотно проконсультировал, ответил на все вопросы,помог быстро оформить сделку, всегда был на связи,всё организовал максимально быстро и удобно. Благодаря ему приобрела свою квартиру Спасибо за профессионализм,рекомендую", rating: 5 },
                { name: "Нурсултан Бартаев", city: "Астана", text: "Спасибо большое за Вашу работу! Блогодоря Вам получилось оформить ипотеку! Отдельное спасибо менеджеру Нурасылу! Всем рекомендую!", rating: 5 },
              ].map((review, i) => (
                <div key={i} className="min-w-[340px] bg-white p-8 rounded-3xl shadow-sm snap-center">
                  <div className="flex gap-1 text-[#D4AF37] mb-6">{'★'.repeat(review.rating)}</div>
                  <p className="text-gray-700 italic mb-6">«{review.text}»</p>
                  <div>
                    <div className="font-semibold">{review.name}</div>
                    <div className="text-sm text-gray-500">{review.city}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Блок с видео */}
          <div>
            <h3 className="text-3xl font-bold text-center mb-10">{current.videoReviews}</h3>
            
            <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide">
              {[
                "https://www.youtube.com/embed/dQw4w9WgXcQ",
                "https://www.youtube.com/embed/dQw4w9WgXcQ",
                "https://www.youtube.com/embed/dQw4w9WgXcQ",
                "https://www.youtube.com/embed/dQw4w9WgXcQ",
                "https://www.youtube.com/embed/dQw4w9WgXcQ",
                "https://www.youtube.com/embed/dQw4w9WgXcQ",
                "https://www.youtube.com/embed/dQw4w9WgXcQ",
                "https://www.youtube.com/embed/dQw4w9WgXcQ",
                "https://www.youtube.com/embed/dQw4w9WgXcQ",
                "https://www.youtube.com/embed/dQw4w9WgXcQ",
              ].map((videoUrl, i) => (
                <div key={i} className="min-w-[420px] snap-center">
                  <div className="aspect-video bg-black rounded-2xl overflow-hidden shadow-lg">
                    <iframe 
                      src={videoUrl}
                      title={`Видеоотзыв ${i + 1}`}
                      className="w-full h-full"
                      allowFullScreen
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    ></iframe>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

 {/* КОНТАКТЫ + Форма заявки — обновлённая */}
<section id="contacts" className="py-24 bg-gray-900 text-white">
  <div className="max-w-6xl mx-auto px-6">
    <div className="grid md:grid-cols-2 gap-16 items-center">
      
      {/* Левая колонка - контакты */}
      <div>
        <h2 className="text-4xl font-bold mb-10">{current.contactUs}</h2>
        <div className="space-y-8 text-xl">
          <a href="tel:+77072553722" className="block hover:text-amber-400 transition">+7 707 255 37 22</a>
          <a href="tel:+77078781443" className="block hover:text-amber-400 transition">+7 707 878 14 43</a>
          <div className="pt-6 text-lg">
            {current.address}<br />
            {current.astana}, Казахстан
          </div>
          <a 
            href="mailto:altyn.ipoteka@gmail.com" 
            className="block text-purple-400 hover:text-purple-300 transition"
          >
            altyn.ipoteka@gmail.com
          </a>
        </div>
      </div>

      {/* Правая колонка - Форма заявки */}
      <div className="bg-white/10 backdrop-blur-lg p-10 rounded-3xl">
        <h3 className="text-3xl font-semibold mb-3">Оставьте заявку</h3>
        <p className="text-gray-300 mb-8">
          Мы свяжемся с вами в самое ближайшее время и объясним всё простыми словами
        </p>

        <form className="space-y-6">
          <input 
            type="text" 
            placeholder={current.name} 
            className="w-full bg-white/10 border border-white/30 rounded-2xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-[#D4AF37]" 
          />
          <input 
            type="tel" 
            placeholder={current.phone} 
            className="w-full bg-white/10 border border-white/30 rounded-2xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-[#D4AF37]" 
          />
          <textarea 
            placeholder={current.comment} 
            rows={4}
            className="w-full bg-white/10 border border-white/30 rounded-2xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-[#D4AF37]"
          ></textarea>
          
          <button 
            type="button" 
            className="w-full bg-gradient-to-r from-[#D4AF37] to-[#F5C518] text-black font-semibold py-5 rounded-2xl text-lg hover:scale-105 transition-all shadow-lg"
          >
            {current.sendRequest}
          </button>
        </form>

        <p className="text-center text-sm text-gray-400 mt-6">
          Ваши данные в безопасности. Мы используем их только для консультации.
        </p>
      </div>
    </div>

    {/* Дополнительный призыв внизу */}
    <div className="text-center mt-20">
      <p className="text-2xl font-medium text-white/90">
        Заполните заявку — и мы вместе найдём лучший вариант для вас!
      </p>
    </div>
  </div>
</section>
            {/* Финальный CTA блок */}
      <div className="bg-gradient-to-r from-[#6B46C1] to-[#553C9A] py-16 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ваш дом ближе, чем вы думаете</h2>
          <p className="text-xl text-white/80 mb-10">
            Заполните заявку — и мы найдём для вас лучшее решение по ипотеке
          </p>
          <button 
            onClick={() => scrollTo('contacts')}
            className="bg-white text-[#6B46C1] font-semibold px-12 py-5 rounded-2xl text-lg hover:scale-105 transition-all shadow-lg"
          >
            Оставить заявку сейчас
          </button>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-black text-gray-400 py-12 text-center text-sm">
        <div className="max-w-6xl mx-auto px-6">
          {current.footer}<br />
          {current.footerAddress}<br />
          <a href="mailto:altyn.ipoteka@gmail.com" className="hover:text-white transition mt-4 inline-block">
            altyn.ipoteka@gmail.com
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;