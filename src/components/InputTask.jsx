import React from "react";
import OwlMascot from "./OwlMascot";

const InputTask = () => {
  return (
    <section className="w-full flex justify-center items-center py-10 px-2 md:px-0 bg-gradient-to-br from-[#F8F5F0] via-[#F2F7FD] to-[#e3eafc] min-h-[60vh]">
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 w-full max-w-5xl bg-white/60 rounded-3xl shadow-xl p-4 md:p-8 backdrop-blur-md">
        {/* Левая колонка — форма */}
        <div className="flex-1 flex flex-col justify-center items-start bg-white/90 rounded-2xl shadow-md p-8 max-w-[430px] min-w-[320px]">
          {/* Заголовок + маскот */}
          <div className="flex items-center gap-3 mb-2">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              Введите задание или загрузите фото
            </h2>
            <OwlMascot className="w-16 h-16" />
          </div>
          {/* Призыв-подсказка под заголовком */}
          <div className="text-slate-500 text-sm mb-2">
            Я помогу тебе с задачей!
          </div>
          <p className="text-md text-slate-700 mb-5">
            Сфотографируйте задачу или вставьте текст — получите подробное решение и объяснение.
          </p>
          <textarea
            className="w-full mb-4 p-3 rounded-xl border border-slate-200 bg-slate-50 resize-none focus:ring-2 focus:ring-blue-200 outline-none"
            rows={3}
            placeholder="Опишите задание или вставьте текст…"
          />
          <div className="flex items-center w-full gap-3 mb-5">
            <label className="flex items-center px-4 py-2 bg-blue-50 hover:bg-blue-100 transition rounded-lg cursor-pointer border border-blue-200 shadow-sm">
              <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
              Загрузить фото/файл
              <input type="file" accept="image/*,.pdf" className="hidden" />
            </label>
            <span className="text-xs text-slate-400">jpg, png, pdf</span>
          </div>
          <button className="w-full py-3 rounded-xl bg-blue-600 text-white text-lg font-semibold shadow-md hover:bg-blue-700 transition">
            Решить задачу
          </button>
          <div className="mt-3 text-sm text-slate-500">
            Например: <span className="font-semibold text-blue-500">Реши 2x + 3 = 7</span> или прикрепи фото из учебника.
          </div>
        </div>

        {/* Правая колонка — иллюстрация */}
        <div className="flex-1 flex justify-center items-center">
          <div className="w-[350px] h-[260px] md:w-[390px] md:h-[290px] bg-gradient-to-br from-[#eaf2fd] to-[#d4e2fc] rounded-3xl overflow-hidden flex items-end shadow-lg">
            <img
              src="/your-chosen-image.jpg"
              alt="Иллюстрация задачи"
              className="w-full h-full object-cover object-center rounded-3xl transition-all duration-300 hover:scale-105"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InputTask;
