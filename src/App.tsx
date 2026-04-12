import { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin, Star, Users, Home, Calculator, Award, ArrowRight } from 'lucide-react';

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

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* HEADER */}
<header className="fixed top-0 w-full z-50 transition-all duration-300"
        id="header">
  <div className="max-w-7xl mx-auto px-6 py-5">
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
        <p className="text-sm text-gray-500 hidden sm:block">Ипотека без стресса</p>
      </div>

      {/* Меню */}
      <nav className="hidden md:flex items-center gap-8 text-base font-medium">
        <button onClick={() => scrollTo('about')} className="hover:text-purple-600 transition-colors nav-link">О нас</button>
        <button onClick={() => scrollTo('services')} className="hover:text-purple-600 transition-colors nav-link">Услуги</button>
        <button onClick={() => scrollTo('path')} className="hover:text-purple-600 transition-colors nav-link">Ваш путь</button>
        <button onClick={() => scrollTo('reviews')} className="hover:text-purple-600 transition-colors nav-link">Отзывы</button>
        <button onClick={() => scrollTo('branches')} className="hover:text-purple-600 transition-colors nav-link">Филиалы</button>
        <button onClick={() => scrollTo('contacts')} className="hover:text-purple-600 transition-colors nav-link">Контакты</button>
      </nav>

      {/* Правая часть */}
      <div className="flex items-center gap-6">
        <div className="flex bg-gray-100 rounded-full p-1 text-sm font-medium">
          <button 
            onClick={() => setLang('ru')} 
            className={`px-5 py-1.5 rounded-full transition-all ${lang === 'ru' ? 'bg-white shadow text-black' : 'text-gray-600 hover:text-gray-900'}`}
          >
            RU
          </button>
          <button 
            onClick={() => setLang('kz')} 
            className={`px-5 py-1.5 rounded-full transition-all ${lang === 'kz' ? 'bg-white shadow text-black' : 'text-gray-600 hover:text-gray-900'}`}
          >
            KZ
          </button>
        </div>

        <div className="hidden md:flex flex-col text-right text-sm leading-tight">
          <a href="tel:+77072553722" className="hover:text-amber-600">+7 707 255 37 22</a>
          <a href="tel:+77078781443" className="hover:text-amber-600">+7 707 878 14 43</a>
        </div>

        <a href="https://wa.me/77072553722" target="_blank" className="text-green-600">
          <Phone size={26} />
        </a>

        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2">
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </div>
  </div>
</header>

      {/* HERO */}
      <section className="min-h-screen bg-[linear-gradient(rgba(0,0,0,0.65),rgba(0,0,0,0.65)),url('https://images.unsplash.com/photo-1560518883-ce09059eeffa')] bg-cover bg-center flex items-center text-white pt-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-8">
            {current.heroTitle1}{' '}
            <span className="bg-gradient-to-r from-[#D4AF37] via-[#F5C518] to-[#E8B923] bg-clip-text text-transparent">
              {current.heroTitle2}
            </span><br />
            {current.heroSubtitle}
          </h1>
          <p className="text-2xl mb-12 max-w-3xl mx-auto">{current.heroDesc}</p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <button onClick={() => scrollTo('contacts')} className="bg-gradient-to-r from-[#D4AF37] to-[#F5C518] text-black font-semibold px-12 py-5 rounded-2xl text-lg hover:scale-105 transition-all shadow-lg">
              {current.ctaConsult}
            </button>
            <a href="tel:+77072553722" className="border-2 border-white text-white font-semibold px-12 py-5 rounded-2xl text-lg hover:bg-white hover:text-[#6B46C1] transition-all">
              {current.ctaCall}
            </a>
          </div>
        </div>
      </section>

      {/* О НАС */}
      <section id="about" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">{current.about}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Мы — команда профессиональных ипотечных консультантов с опытом более 7 лет. 
              Помогаем тысячам казахстанцев купить жильё на выгодных условиях.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d" 
                alt="Команда Altyn Ipoteka"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-3xl p-8 shadow">
                <div className="aspect-video bg-gray-900 rounded-2xl overflow-hidden mb-6 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-6xl mb-4">▶️</div>
                    <p className="text-lg">Видео о компании</p>
                  </div>
                </div>
                <p className="text-gray-600">Посмотрите, как мы помогаем нашим клиентам получить ипотеку мечты</p>
              </div>

              <div className="flex gap-6">
                <div className="flex-1 bg-white p-6 rounded-3xl shadow text-center">
                  <Award className="text-[#D4AF37] mx-auto mb-4" size={40} />
                  <h4 className="font-semibold text-lg">500+ одобренных ипотек</h4>
                </div>
                <div className="flex-1 bg-white p-6 rounded-3xl shadow text-center">
                  <Users className="text-[#6B46C1] mx-auto mb-4" size={40} />
                  <h4 className="font-semibold text-lg">98% довольных клиентов</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* УСЛУГИ */}
      <section id="services" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">{current.services}</h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">Полный спектр услуг по ипотечному кредитованию</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Home, title: "Подбор ипотеки", desc: "Анализ условий 20+ банков и подбор самого выгодного варианта" },
              { icon: Calculator, title: "Ипотечный калькулятор", desc: "Точный расчёт платежа и переплаты" },
              { icon: Award, title: "Госпрограммы", desc: "7-20-25, Орда, Молодёжная и другие льготные программы" },
              { icon: Star, title: "Сопровождение сделки", desc: "Полное сопровождение от документов до ключей" },
              { icon: Users, title: "Рефинансирование", desc: "Снижение ставки по существующей ипотеке" },
              { icon: Phone, title: "Бесплатная консультация", desc: "Онлайн и оффлайн консультации" },
            ].map((service, i) => (
              <div key={i} className="bg-white border border-gray-100 p-8 rounded-3xl hover:shadow-xl hover:border-[#D4AF37] transition-all group">
                <div className="w-14 h-14 bg-gradient-to-br from-[#D4AF37] to-[#F5C518] text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                  <service.icon size={28} />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ВАШ ПУТЬ */}
      <section id="path" className="py-24 bg-gradient-to-br from-[#6B46C1] to-[#553C9A] text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">{current.path}</h2>
          <p className="text-xl text-purple-200 mb-16 max-w-2xl mx-auto">Простой и понятный путь к вашему новому дому</p>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Консультация", desc: "Звонок или заявка → бесплатная консультация и предварительный расчёт" },
              { step: "02", title: "Сбор документов", desc: "Помогаем быстро собрать все необходимые документы" },
              { step: "03", title: "Подача и одобрение", desc: "Подаём заявку в банк и получаем одобрение" },
              { step: "04", title: "Сделка и ключи", desc: "Сопровождаем до подписания договора и получения ключей" },
            ].map((item, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-3xl hover:bg-white/20 transition-all group">
                <div className="text-5xl font-bold text-white/30 mb-4 group-hover:text-white/50 transition">{item.step}</div>
                <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                <p className="text-purple-100">{item.desc}</p>
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
          <p className="text-gray-600 mb-12">Наш главный офис в Астане</p>

          <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="p-12">
              <MapPin className="mx-auto text-[#D4AF37] mb-6" size={70} />
              <h3 className="text-3xl font-bold mb-3">{current.astana}</h3>
              <p className="text-xl text-gray-700 mb-8">ул. Бейбитшилик 14, БЦ Marden</p>

              <div className="space-y-4 text-left text-lg mb-10">
                <a href="tel:+77072553722" className="block hover:text-[#D4AF37]">+7 707 255 37 22</a>
                <a href="tel:+77078781443" className="block hover:text-[#D4AF37]">+7 707 878 14 43</a>
                <a href="https://wa.me/77072553722" target="_blank" className="block text-green-600 font-medium hover:underline">Написать в WhatsApp</a>
              </div>

              {/* Правильная карта для адреса: Бейбитшилик 14, БЦ Marden, Астана */}
                  <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-inner">
                        <iframe 
                                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2503.8!2d71.4295!3d51.1289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x424585a0f5b5b5b5%3A0x5f5f5f5f5f5f5f5f!2z0JHQsNC70YvQutCw0Y8g0JHQtdC70L3QvtC80LjQvdC-0L3QvtC5IDE0LCDQodCw0L3QsNC70YvQutCw0Y8!5e0!3m2!1sru!2skz!4v1740000000000" 
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

      {/* ОТЗЫВЫ — 5 готовых блоков */}
      <section id="reviews" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">{current.reviews}</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Айгуль Смагулова",
                city: "Астана",
                text: "Спасибо команде Altyn Ipoteka! Помогли оформить ипотеку по программе 7-20-25. Всё быстро, прозрачно и без лишней бюрократии. Очень рекомендую!",
                rating: 5
              },
              {
                name: "Нурлан Ахметов",
                city: "Астана",
                text: "Рефинансировали мою ипотеку. Платёж снизился на 48 000 тенге в месяц! Профессионалы своего дела. Большое спасибо!",
                rating: 5
              },
              {
                name: "Мария Ким",
                city: "Астана",
                text: "Очень приятные и компетентные сотрудники. Сопровождали всю сделку до конца. Получили квартиру в новом ЖК. Спасибо вам огромное!",
                rating: 5
              },
              {
                name: "Ерболат Тлеуов",
                city: "Астана",
                text: "Подобрали лучшую ставку среди всех банков. Сделали всё под ключ. Работать с вами — одно удовольствие.",
                rating: 5
              },
              {
                name: "Айжан Рахимова",
                city: "Астана",
                text: "Спасибо за помощь с документами и одобрением. Всё объясняли спокойно и понятно. Теперь у нас своя квартира! ❤️",
                rating: 5
              }
            ].map((review, i) => (
              <div key={i} className="bg-white border border-gray-100 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all">
                <div className="flex gap-1 text-[#D4AF37] mb-6">
                  {'★'.repeat(review.rating)}
                </div>
                <p className="text-gray-700 italic leading-relaxed mb-8">«{review.text}»</p>
                <div>
                  <div className="font-semibold">{review.name}</div>
                  <div className="text-sm text-gray-500">{review.city}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* КОНТАКТЫ */}
      <section id="contacts" className="py-24 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-10">Свяжитесь с нами</h2>
              <div className="space-y-8 text-xl">
                <a href="tel:+77072553722" className="block hover:text-amber-400">+7 707 255 37 22</a>
                <a href="tel:+77078781443" className="block hover:text-amber-400">+7 707 878 14 43</a>
                <div className="pt-4 text-lg">ул. Бейбитшилик 14, БЦ Marden<br />Астана, Казахстан</div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur p-10 rounded-3xl">
              <h3 className="text-2xl font-semibold mb-8">Оставить заявку</h3>
              <form className="space-y-6">
                <input type="text" placeholder={current.name} className="w-full bg-white/10 border border-white/30 rounded-2xl px-6 py-4 text-white placeholder-gray-400" />
                <input type="tel" placeholder={current.phone} className="w-full bg-white/10 border border-white/30 rounded-2xl px-6 py-4 text-white placeholder-gray-400" />
                <textarea placeholder={current.comment} rows={5} className="w-full bg-white/10 border border-white/30 rounded-2xl px-6 py-4 text-white placeholder-gray-400"></textarea>
                
                <button type="button" className="w-full bg-gradient-to-r from-[#D4AF37] to-[#F5C518] text-black font-semibold py-5 rounded-2xl text-lg hover:scale-105 transition-all">
                  {current.sendRequest}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black text-gray-400 py-10 text-center text-sm">
        © 2026 Altyn Ipoteka. Все права защищены.<br />
        Бейбитшилик 14, БЦ Marden, Астана
      </footer>
    </div>
  );
}

export default App;