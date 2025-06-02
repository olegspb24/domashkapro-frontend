import React from "react";

const Hero = () => {
  return (
    <section
      className="relative flex flex-col md:flex-row items-center justify-center min-h-[92vh] w-full overflow-hidden bg-[#F8F5F0]"
    >
      {/* Левая часть — текст */}
      <div className="flex-1 flex flex-col items-start justify-center px-4 md:pl-16 z-10">
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold mb-5 leading-tight text-slate-900 drop-shadow">
          ДомашкаPRO AI — ваш цифровой помощник для школы и семьи
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl text-slate-700 mb-8 font-medium">
          Сфотографируйте задачу или вставьте текст — получите подробное решение и объяснение по стандартам ФГОС.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-xl shadow-2xl text-lg transition-all">
          Попробовать бесплатно
        </button>
      </div>
      {/* Правая часть — картинка */}
      <div className="flex-1 flex items-center justify-center md:pr-16 z-10 mt-10 md:mt-0">
        <img
          src="/hero-ai-book.jpg"
          alt="Радостный ученик с пятёркой"
          className="rounded-2xl shadow-2xl object-cover max-h-[480px] w-full max-w-[420px] border-4 border-blue-100"
          style={{ aspectRatio: "1/1" }}
        />
      </div>
    </section>
  );
};

export default Hero;
