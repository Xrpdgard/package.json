import React, { useState, useEffect } from "react";

export default function App() {
  const [lang, setLang] = useState("ua");

  useEffect(() => {
    const savedLang = localStorage.getItem("preferredLang");
    if (savedLang) setLang(savedLang);
  }, []);

  const handleLangChange = (value) => {
    setLang(value);
    localStorage.setItem("preferredLang", value);
  };

  return (
    <main className="min-h-screen bg-white text-gray-800">
      <header className="bg-blue-700 text-white p-6 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">United for Sport</h1>
          <button
            onClick={() => handleLangChange(lang === "ua" ? "en" : "ua")}
            className="ml-4 px-2 py-1 bg-white text-blue-700 rounded"
          >
            {lang === "ua" ? "EN" : "UA"}
          </button>
        </div>
      </header>
      <section className="bg-blue-50 py-20 text-center">
        <h2 className="text-4xl font-semibold mb-4">
          {lang === "ua" ? "Разом заради спорту" : "Together for Sport"}
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          {lang === "ua"
            ? "Ми об’єднуємо людей та можливості, щоб підтримувати спорт."
            : "We unite people and opportunities to support sport."}
        </p>
      </section>
    </main>
  );
}
