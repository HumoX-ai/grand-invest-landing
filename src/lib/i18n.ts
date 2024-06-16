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
        },
      },
    },
  });

export default i18n;
