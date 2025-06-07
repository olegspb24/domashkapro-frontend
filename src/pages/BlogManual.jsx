import React from "react";
import { Link } from "react-router-dom";

const BlogManual = () => (
  <div className="min-h-[80vh] bg-[#F8F5F0] flex flex-col items-center justify-center px-4 py-12">
    <div className="max-w-2xl bg-white/95 rounded-3xl shadow-xl p-8 border border-blue-100">
      <h1 className="text-3xl font-bold mb-4 text-blue-700">Как быстро получить решение задачи</h1>
      <p className="mb-4 text-lg text-slate-900">
        Просто опишите задачу или загрузите фото. <br /><br />
        <ul className="list-disc ml-6 my-4 text-base text-slate-800">
          <li>Введите текст задачи или прикрепите фотографию;</li>
          <li>AI‑ассистент распознает условия и решит пример;</li>
          <li>Через минуту получите не только ответ, но и объяснение — как на уроке с учителем!</li>
        </ul>
        <b>Всё работает онлайн и бесплатно.</b>
      </p>
      <div className="mt-8 flex justify-end">
        <Link to="/" className="text-blue-600 hover:underline font-semibold text-base">
          ← На главную
        </Link>
      </div>
    </div>
  </div>
);

export default BlogManual;
