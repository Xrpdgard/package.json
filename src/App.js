import React, { useState, useEffect } from "react";

const translations = {
  ua: {
    langLabel: "UA",
    nav: ["Про нас", "Місія", "Проєкти", "Підтримати", "Контакти"],
    heroTitle: "Разом заради спорту, здоров’я та майбутнього",
    heroText: "Ми об’єднуємо людей та можливості, щоб підтримувати, розвивати і поширювати спорт як силу єдності.",
    aboutTitle: "Про організацію",
    aboutText: "Об’єднані заради спорту — незалежна ініціатива, що прагне зробити спорт доступним, інклюзивним і стійким.",
    missionTitle: "Наша місія",
    missionText: "Ми об’єднуємо людей, ресурси та можливості, щоб підтримувати спорт як інструмент єдності.",
    projectsTitle: "Наші проєкти",
    projectsList: [
      "«Шкільний спорт для всіх»: підтримка шкіл",
      "«Спорт без бар’єрів»: інклюзивні заходи",
      "«Громадські турніри»: щомісячні події"
    ],
    supportTitle: "Як підтримати",
    supportList: [
      "Пожертвувати кошти",
      "Стати волонтером",
      "Поширювати інформацію",
      "Партнерство з бізнесом"
    ],
    supportFormTitle: "Форма підтримки",
    namePlaceholder: "Ваше ім’я",
    emailPlaceholder: "Email",
    commentPlaceholder: "Коментар",
    sendButton: "Надіслати",
    donateButton: "Підтримати зараз",
    donateModalTitle: "Оберіть платформу",
    paypal: "PayPal",
    liqpay: "LiqPay",
    fondy: "Fondy / WayForPay",
    contactsTitle: "Контакти",
    footerText: "© 2025 Об’єднані заради спорту. Усі права захищено."
  },
  en: {
    langLabel: "EN",
    nav: ["About", "Mission", "Projects", "Support", "Contacts"],
    heroTitle: "Together for sport, health and the future",
    heroText: "We unite people and opportunities to support, grow and promote sport as a force for unity.",
    aboutTitle: "About the Organization",
    aboutText: "United for Sport is an independent initiative making sport accessible, inclusive and sustainable.",
    missionTitle: "Our Mission",
    missionText: "We unite people, resources and opportunities to promote sport as a tool for unity.",
    projectsTitle: "Our Projects",
    projectsList: [
      "School Sports for All: support for schools",
      "Sports Without Barriers: inclusive events",
      "Community Tournaments: monthly events"
    ],
    supportTitle: "How to Support",
    supportList: [
      "Donate to projects",
      "Become a volunteer",
      "Spread the word",
      "Partner with us"
    ],
    supportFormTitle: "Support Form",
    namePlaceholder: "Your Name",
    emailPlaceholder: "Email",
    commentPlaceholder: "Comment",
    sendButton: "Submit",
    donateButton: "Donate Now",
    donateModalTitle: "Choose a platform",
    paypal: "PayPal",
    liqpay: "LiqPay",
    fondy: "Fondy / WayForPay",
    contactsTitle: "Contacts",
    footerText: "© 2025 United for Sport. All rights reserved."
  }
};

export default function App() {
  const [lang, setLang] = useState("ua");
  const [showModal, setShowModal] = useState(false);
  const t = translations[lang];

  useEffect(() => {
    const savedLang = localStorage.getItem("preferredLang");
    if (savedLang && translations[savedLang]) {
      setLang(savedLang);
    }
  }, []);

  const handleLangChange = (value) => {
    setLang(value);
    localStorage.setItem("preferredLang", value);
  };

  return (
    <main className="min-h-screen bg-white text-gray-800">
      <header className="bg-blue-700 text-white p-6 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            {lang === "ua" ? "Об’єднані заради спорту" : "United for Sport"}
          </h1>
          <nav className="space-x-4">
            {t.nav.map((item, idx) => (
              <a key={idx} href={`#${item.toLowerCase()}`} className="hover:underline">
                {item}
              </a>
            ))}
          </nav>
          <select
            onChange={(e) => handleLangChange(e.target.value)}
            value={lang}
            className="ml-4 px-2 py-1 text-blue-700 rounded text-sm"
          >
            {Object.entries(translations).map(([key, value]) => (
              <option key={key} value={key}>{value.langLabel}</option>
            ))}
          </select>
        </div>
      </header>

      <section className="bg-blue-50 py-20 text-center">
        <h2 className="text-4xl font-semibold mb-4">{t.heroTitle}</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">{t.heroText}</p>
        <button
          onClick={() => setShowModal(true)}
          className="mt-6 bg-blue-700 text-white px-6 py-2 rounded"
        >
          {t.donateButton}
        </button>
      </section>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded shadow-md max-w-sm w-full text-center">
            <h3 className="text-xl font-bold mb-4">{t.donateModalTitle}</h3>
            <div className="space-y-3">
              <a href="https://www.paypal.com/donate" target="_blank" className="block bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600">{t.paypal}</a>
              <a href="https://www.liqpay.ua/en" target="_blank" className="block bg-green-600 text-white py-2 rounded hover:bg-green-700">{t.liqpay}</a>
              <a href="https://checkout.fondy.eu" target="_blank" className="block bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">{t.fondy}</a>
            </div>
            <button onClick={() => setShowModal(false)} className="mt-4 text-blue-700 hover:underline">
              ✕ Закрити
            </button>
          </div>
        </div>
      )}

      <footer className="text-center py-6 text-sm text-gray-500 bg-gray-50">
        {t.footerText}
      </footer>
    </main>
  );
}
