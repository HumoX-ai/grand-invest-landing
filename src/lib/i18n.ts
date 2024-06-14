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
    debug: true,
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
            dark: "Qorong'u",
            light: "Yorug'",
            system: "Sistema",
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
            dark: "Темная",
            light: "Светлая",
            system: "Система",
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
            dark: "Dark",
            light: "Light",
            system: "System",
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
        },
      },
    },
  });

export default i18n;
