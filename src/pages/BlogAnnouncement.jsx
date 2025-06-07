import React from "react";
import { Link } from "react-router-dom";

const BlogAnnouncement = () => (
  <div className="min-h-[80vh] bg-[#F8F5F0] flex flex-col items-center justify-center px-4 py-12">
    <div className="max-w-2xl bg-white/95 rounded-3xl shadow-xl p-8 border border-blue-100">
      <h1 className="text-3xl font-bold mb-4 text-blue-700">Добро пожаловать в ДомашкаPRO!</h1>
      <p className="mb-4 text-lg text-slate-900">
        <b>ДомашкаPRO AI</b> — это ваш современный помощник в учёбе для школьников и их родителей.
        <br /><br />
        Мы создали платформу, которая делает выполнение домашних заданий проще и понятнее:
        <ul className="list-disc ml-6 my-4 text-base text-slate-800">
          <li>AI‑решения по фото и тексту;</li>
          <li>Объяснения “на пальцах” — будто объясняет учитель;</li>
          <li>Поддержка по всем школьным предметам: математика, русский, английский, физика и др.;</li>
          <li>Безопасность и конфиденциальность ваших данных;</li>
          <li>Советы и рекомендации для родителей — как помочь ребёнку учиться с интересом.</li>
        </ul>
        <b>Начните прямо сейчас:</b> просто сфотографируйте задачу или опишите её — и получите не только ответ, но и объяснение каждого шага!
        <br /><br />
        Вместе мы сделаем учёбу проще, интереснее и эффективнее.
      </p>
      <div className="mt-8 flex justify-end">
        <Link to="/" className="text-blue-600 hover:underline font-semibold text-base">
          ← На главную
        </Link>
      </div>
    </div>
  </div>
);

export default BlogAnnouncement;
