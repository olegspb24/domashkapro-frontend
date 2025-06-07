import React from "react";
import HeroBackground from "../HeroBackground";

const Hero = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center w-full overflow-hidden bg-[#F8F5F0]">
      <HeroBackground />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="mt-24 grid grid-cols-1 items-center gap-14 sm:mt-32 lg:mt-40 lg:grid-cols-2">
          <div className="mx-auto flex max-w-3xl flex-col gap-8 z-10">
            <span className="text-lg font-medium text-neutral-800 dark:text-neutral-200">
              ДомашкаPRO — умный помощник для школы и семьи
            </span>
            <h2 className="text-4xl font-bold leading-tight tracking-wide text-neutral-900 dark:text-neutral-50 xl:text-5xl">
              Поможем с учебой, творчеством, проектами и домашкой за 1 минуту!
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              Просто сфотографируйте задание, напишите вопрос или прикрепите файл — получите не только готовое решение, но и понятное объяснение, чтобы понять логику ответа. Поддержим с сочинением, эссе или проектом. Всё — по стандартам ФГОС, дружелюбно и без списывания.
            </p>
            <div className="flex space-x-8">
              <a
                href="#about"
                className="rounded-md bg-blue-600 px-10 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
              >
                Как это работает
              </a>
              <a
                href="#pricing"
                className="rounded-md bg-white px-10 py-3 text-sm font-semibold text-blue-600 shadow-sm ring-1 ring-inset ring-blue-300 hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
              >
                Тарифы
              </a>
            </div>
          </div>
          <div className="order-last mx-auto max-w-lg lg:order-first z-10">
            <img
              src="/hero-ai-book.jpg"
              alt="Радостный ученик с пятёркой"
              width={1000}
              height={1000}
              className="rounded-xl object-cover border-4 border-blue-100 shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
