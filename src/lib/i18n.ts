import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: "uz",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      uz: {
        translation: {
          header: {
            home: "Bosh sahifa",
            about: "Biz haqimizda",
            products: {
              title: "Mahsulotlar",
              courses: "Kurslar",
              robots: "Robotlar",
              propAccounts: "Prop Akkountlar",
            },
            features: {
              title: "Xususiyatlar",
              signals: "Signallar",
              exchangeRates: "Valyuta kurslari",
              downloads: "Yuklamlar",
            },
            blog: "Blog",
            contacts: "Aloqa",
            login: "Kirish",
          },
          hero: {
            title:
              '<span style="color: #E38B05;">Forex Savdo</span> salohiyatingizni maksimal darajada oshiring',
            title2:
              '<span style="color: #E38B05;">Cripto Savdo</span> salohiyatingizni maksimal darajada oshiring',
            subtitle:
              "Eng zamonaviy vositalar va mutaxassislarni qo'llab-quvvatlash uchun etakchi Forex savdo platformasiga qo'shiling",
            button: "Hoziroq boshlash",
          },
          exChangeRate: {
            title1: "Kapitalni boshqarish",
            title2: "Har bir savdodan foyda",
            title3: "Barqaror daromadga ega bo'lgan mamnun talabalar",
          },
          aboutUs: {
            whatwedo: "Biz nima qilamiz",
            title: "Forex savdo tajribamiz bilan tanishing",
            subtitle:
              "Bizning vazifamiz barcha darajadagi treyderlarga o'z potentsialini maksimal darajada oshirish imkonini beradigan xavfsiz va foydalanuvchilarga qulay platformani taqdim etishdir.",
            subtitle2:
              "Tajribali mutaxassislar jamoasi va ilg'or texnologiyalar bilan biz keng qamrovli savdo yechimlari, ta'lim resurslari va shaxsiy yordamni taklif etamiz.",
            subtitle3:
              "Bizga qo'shiling, bag'ishlangan va professional savdo hamkori yarata oladigan farqni his qiling.",
            button: "Hoziroq qo'shiling",
          },
          products: {
            span: "Mahsulotlarimiz",
            title: "Trading kurslari",
            title2: "Robotlarimiz yordami",
            subtitle:
              "Moliyaviy salohiyatingizni ishga soling: yangi boshlanuvchilar va tajribali treyderlar uchun moʻljallangan keng qamrovli kurslar bilan ishonch va mahorat bilan savdo qilishni oʻrganing.",
            button: "Batafsil",
          },
          signals: {
            title: "Signallar",
            free: {
              title: "Bepul",
              price: "$0",
              feature_1: "Asosiy signallar",
              feature_2: "Oddiy diagrammalar va ko'rsatkichlar",
              feature_3: "Asosiy qo'llanmalar va qo'llanmalar",
              feature_4: "Jamoa forumlari yoki guruhlarida ishtirok etish",
              feature_5: "Moslashtirish va ogohlantirishlar",
              feature_6: "Reklama yo'q",
              button: "Rejani tanlang",
            },
            premium: {
              title: "Premium",
              price: "$100",
              feature_1: "Cheksiz signallar",
              feature_2: "Kengaytirilgan tahlil vositalari",
              feature_3: "Murakkab darsliklar, kurslar va vebinarlar",
              feature_4:
                "Premium forumlar, chat xonalari va ijtimoiy savdo xususiyatlariga kirish",
              feature_5: "Moslashtirish va ogohlantirishlar",
              feature_6: "Reklama yo'q",
              button: "Rejani tanlang",
            },
          },
          reviews: {
            title: "Fikrlar",
            head: "Biz haqimizda nima deyishadi",
          },
          contactus: {
            title: "Biz bilan bog'lanish",
            contact: "Aloqa",
            address: "Manzil",
            socialMedia: "Ijtimoiy tarmoqlar",
            fullName: "To'liq ism",
            email: "Elektron pochta",
            phone: "Telefon raqami",
            whereHeard: "Grand Invest haqida qayerdan eshitgansiz?",
          },

          categories: {
            all: "Barchasi",
            signals: "Signallar",
            learningTrading: "Tajribani oshirish",
            robots: "Robotlar",
          },
          downloads: {
            title: "Grand Invest har doim yordam berishga tayyor",
            subtitle:
              "Savdo yo'lingizni muhim manbalar va eksklyuziv ma'lumotlar bilan kengaytiring",
            files: "Fayllar",
            inputPlaceholder: "Barcha fayllarni qidirish...",
            button: "Yuklab olish",
          },
          exchangeRate: {
            title: "Valyuta kurslari",
            subtitle:
              "Haqiqiy vaqtda valyuta kurslari, bozor tendentsiyalari va keng qamrovli tahliliy vositalar",
            convert: "Valyuta konvertori",
            convertButton: "Konvertatsiya qilish",
            currencyRate: "Valyuta kursi",
            currency: "valyuta",
            purchase: "sotib olish",
            change: "o'zgarish",
            loadMoreButton: "Ko'proq yuklash",
          },
          robots: {
            title: "TOP G - Scalpel",
            description:
              "Moliyaviy salohiyatingizni oching: yangi boshlanuvchilar va ilg'or treyderlar uchun mo'ljallangan keng qamrovli kurslar orqali ishonch va mahorat bilan savdo qilishni o'rganing.",
            button: "Xarid qilish uchun o'ting",
            description2:
              "Bizning ilg'or savdo robotlarimiz bilan savdo kelajagini kashf eting. 24/7 ishlash uchun mo'ljallangan ushbu robotlar hissiy qarorlar qabul qilishni bartaraf qiladi va qayta sinovdan o'tgan va optimallashtirilgan strategiyalar asosida savdolarni amalga oshiradi, maksimal samaradorlik va rentabellikni ta'minlaydi.",
            button2: "Batafsil ma'lumot",
          },
        },
      },
      ru: {
        translation: {
          header: {
            home: "Главная",
            about: "О нас",
            products: {
              title: "Продукты",
              courses: "Курсы",
              robots: "Роботы",
              propAccounts: "Проп Аккаунты",
            },
            features: {
              title: "Характеристики",
              signals: "Сигналы",
              exchangeRates: "Курсы валют",
              downloads: "Загрузки",
            },
            blog: "Блог",
            contacts: "Контакты",
            login: "Вход",
          },
          hero: {
            title:
              'Максимизируйте свой торговый потенциал на <span style="color: #E38B05;">Форекс</span>',
            title2:
              'Максимизируйте свой потенциал <span style="color: #E38B05;">Kриптовалютной торговли</span>',
            subtitle:
              "Присоединяйтесь к ведущей торговой платформе Форекс, чтобы получить доступ к новейшим инструментам и экспертной поддержке.",
            button: "Начать сейчас",
          },
          exChangeRate: {
            title1: "Управляйте капиталом до",
            title2: "Прибыль от каждой сделки",
            title3: "Довольные студенты со стабильным доходом",
          },
          aboutUs: {
            whatwedo: "Что мы делаем",
            title: "Откройте для себя наш опыт торговли на Форекс",
            subtitle:
              "Наша миссия — предоставить безопасную и удобную для пользователя платформу, которая позволит трейдерам всех уровней максимизировать свой потенциал.",
            subtitle2:
              "Благодаря команде опытных профессионалов и новейшим технологиям мы предлагаем комплексные торговые решения, образовательные ресурсы и индивидуальную поддержку.",
            subtitle3:
              "Присоединяйтесь к нам и почувствуйте разницу, которую может сделать преданный своему делу и профессиональный торговый партнер.",
            button: "Присоединяйся сейчас",
          },
          products: {
            span: "Продукты",
            title: "Курсы трейдинга",
            title2: "Помощь роботов",
            subtitle:
              "Раскройте свой финансовый потенциал: научитесь торговать с уверенностью и навыками с помощью комплексных курсов, адаптированных как для начинающих, так и для опытных трейдеров.",
            button: "Подробнее",
          },
          signals: {
            title: "Сигналы",
            free: {
              title: "Бесплатно",
              price: "$0",
              feature_1: "Основные сигналы",
              feature_2: "Простые графики и индикаторы",
              feature_3: "Базовые уроки и руководства",
              feature_4: "Участие в общественных форумах или группах",
              feature_5: "Настройка и оповещения",
              feature_6: "Нет рекламы",
              button: "Выберите план",
            },
            premium: {
              title: "Премиум",
              price: "$100",
              feature_1: "Неограниченные сигналы",
              feature_2: "Инструменты расширенного анализа",
              feature_3: "Расширенные руководства, курсы и вебинары",
              feature_4:
                "Доступ к премиум-форумам, чатам и функциям социального трейдинга.",
              feature_5: "Настройка и оповещения",
              feature_6: "Нет рекламы",
              button: "Выберите план",
            },
          },
          reviews: {
            title: "Отзывы",
            head: "Что они говорят о нас",
          },
          contactus: {
            title: "Связаться с нами",
            contact: "Контакт",
            address: "Адрес",
            socialMedia: "Социальные медиа",
            fullName: "Полное имя",
            email: "Электронная почта",
            phone: "Номер телефона",
            whereHeard: "Откуда вы услышали о Гранд Инвест?",
          },
          categories: {
            all: "Все",
            signals: "Сигналы",
            learningTrading: "Обучающие трейдинг",
            robots: "Роботы",
          },
          downloads: {
            title: "Гранд Инвест всегда готов помочь",
            subtitle:
              "Расширение возможностей вашего торгового пути с помощью необходимых ресурсов и эксклюзивной информации",
            files: "Файлы",
            inputPlaceholder: "Искать все файлы...",
            button: "Скачать",
          },
          exchangeRate: {
            title: "Курсы валют",
            subtitle:
              "RКурсы обмена валют в режиме реального времени, рыночные тенденции и комплексные аналитические инструменты",
            convert: "Конвертер валют",
            convertButton: "Конвертировать",
            currencyRate: "Курс валюты",
            currency: "валюта",
            purchase: "покупка",
            change: "изменение",
            loadMoreButton: "Загрузи больше",
          },
          robots: {
            title: "ТОП G — Скальпер",
            description:
              "Раскройте свой финансовый потенциал: научитесь торговать с уверенностью и навыками с помощью комплексных курсов, адаптированных как для начинающих, так и для опытных трейдеров.",
            button: "Перейти к покупке",
            description2:
              "Откройте для себя будущее торговли с нашими передовыми торговыми роботами. Эти роботы, предназначенные для работы круглосуточно и без выходных, исключают эмоциональное принятие решений и совершают сделки на основе проверенных и оптимизированных стратегий, обеспечивая максимальную эффективность и прибыльность.",
            button2: "Узнать больше",
          },
        },
      },
      en: {
        translation: {
          header: {
            home: "Home",
            about: "About Us",
            products: {
              title: "Products",
              courses: "Trading Courses",
              robots: "Robots",
              propAccounts: "Prop Accounts",
            },
            features: {
              title: "Features",
              signals: "Signals",
              exchangeRates: "Exchange Rates",
              downloads: "Downloads",
            },
            blog: "Blog",
            contacts: "Contacts",
            login: "Login",
          },
          hero: {
            title:
              'Maximize Your <span style="color: #E38B05;">Forex Trading</span> Potential',
            title2:
              'Maximize Your <span style="color: #E38B05;">Crypto Trading</span> Potential',
            subtitle:
              "Join the Leading Forex Trading Platform for Cutting-Edge Tools and Expert Support",
            button: "Get Started",
          },
          exChangeRate: {
            title1: "Manage capital up to",
            title2: "Profit by every trade",
            title3: "Satisfied students with stable income",
          },
          aboutUs: {
            whatwedo: "What we do",
            title: "Discover Our Forex Trading Experience",
            subtitle:
              "Our mission is to provide a secure and user-friendly platform that enables traders of all levels to maximize their potential.",
            subtitle2:
              " With a team of experienced professionals and cutting-edge technology,we offer comprehensive trading solutions, educational resources, and personalized support.",
            subtitle3:
              "Join us and experience the difference that a dedicated and professional trading partner can make.",
            button: "Join Now",
          },
          products: {
            span: "Products",
            title: "Trading Courses",
            title2: "Robots Help",
            subtitle:
              "Unlock Your Financial Potential: Learn to Trade with Confidence and Skill Through Comprehensive Courses Tailored for Beginners to Advanced Traders",
            button: "Learn More",
          },
          signals: {
            title: "Signals",
            free: {
              title: "Free",
              price: "$0",
              feature_1: "Basic signals",
              feature_2: "Simple charts and indicators",
              feature_3: "Basic tutorials and guides",
              feature_4: "Participation in community forums or groups",
              feature_5: "Customization and Alerts",
              feature_6: "No Advertising",
              button: "Choose Plan",
            },
            premium: {
              title: "Premium",
              price: "$100",
              feature_1: "Unlimited Signals",
              feature_2: "Advanced Analysis Tools",
              feature_3: "Advanced tutorials, courses, and webinars",
              feature_4:
                "Access to premium forums, chat rooms, and social trading features",
              feature_5: "Customization and Alerts",
              feature_6: "No Advertising",
              button: "Choose Plan",
            },
          },
          reviews: {
            title: "Reviews",
            head: "What They Say About Us",
          },
          contactus: {
            title: "About Us",
            contact: "Contact",
            address: "Address",
            socialMedia: "Social Media",
            fullName: "Full Name",
            email: "Email",
            phone: "Phone Number",
            whereHeard: "Where you heard about Grand Invest?",
          },
          categories: {
            all: "All",
            signals: "Signals",
            learningTrading: "Learning Trading",
            robots: "Robots",
          },
          downloads: {
            title: "Grand Invest is always ready to help",
            subtitle:
              "Empowering Your Trading Journey with Essential Resources and Exclusive Insights",
            files: "Files",
            inputPlaceholder: "Search all files...",
            button: "Download",
          },
          exchangeRate: {
            title: "Exchange Rates",
            subtitle:
              "Real-Time Currency Exchange Rates, Market Trends, and Comprehensive Analytical Tools",
            convert: "Currency Converter",
            convertButton: "Convert",
            currencyRate: "Currency Rate",
            currency: "currency",
            purchase: "purchase",
            change: "change",
            loadMoreButton: "Load More",
          },
          robots: {
            title: "TOP G - Scalpel",
            description:
              "Unlock Your Financial Potential: Learn to Trade with Confidence and Skill Through Comprehensive Courses Tailored for Beginners to Advanced Traders",
            button: "Go to purchase",
            description2:
              "Discover the future of trading with our advanced trading robots. Designed to operate 24/7, these robots eliminate emotional decision-making and execute trades based on backtested and optimized strategies, ensuring maximum efficiency and profitability.",
            button2: "Learn More",
          },
        },
      },
    },
  });

export default i18n;
