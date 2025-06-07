import React from "react";
import { Link } from "react-router-dom";

const BlogTips = () => (
  <div className="min-h-[80vh] bg-[#F8F5F0] flex flex-col items-center justify-center px-4 py-12">
    <div className="max-w-2xl bg-white/95 rounded-3xl shadow-xl p-8 border border-blue-100">
      <h1 className="text-3xl font-bold mb-4 text-blue-700">3 совета для родителей</h1>
      <p className="mb-4 text-lg text-slate-900">
        Помогайте ребёнку учиться с интересом:
        <ul className="list-disc ml-6 my-4 text-base text-slate-800">
          <li><b>Обсуждайте задания.</b> Узнавайте, как ребёнок понял материал, задавайте вопросы, вместе анализируйте условия задач.</li>
          <li><b>Пробуйте решать вместе.</b> Не бойтесь ошибаться! Совместное решение задач — это повод для общения и взаимопомощи.</li>
          <li><b>Используйте AI как дополнительный ресурс.</b> Не стесняйтесь просить платформу ДомашкаPRO объяснить сложные темы простыми словами — пусть это будет частью вашей образовательной рутины!</li>
        </ul>
        Главное — поддержка и доверие. Вместе учиться всегда легче!
      </p>
      <div className="mt-8 flex justify-end">
        <Link to="/" className="text-blue-600 hover:underline font-semibold text-base">
          ← На главную
        </Link>
      </div>
    </div>
  </div>
);

export default BlogTips;
