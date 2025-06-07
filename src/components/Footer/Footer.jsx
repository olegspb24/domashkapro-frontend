import React from 'react';
import { FaTelegram, FaVk, FaEnvelope, FaYoutube } from "react-icons/fa";
import OwlMascot from "../OwlMascot";

const navigation = {
  about: [
    { name: 'О проекте', href: '#' },
    { name: 'Блог', href: '#' },
    { name: 'Контакты', href: '#' },
    { name: 'Отзывы', href: '#' },
  ],
  help: [
    { name: 'Инструкция', href: '#' },
    { name: 'FAQ', href: '#' },
    { name: 'Тарифы', href: '#' },
    { name: 'Поддержка', href: '#' },
  ],
  legal: [
    { name: 'Политика конфиденциальности', href: '#' },
    { name: 'Пользовательское соглашение', href: '#' },
  ],
  social: [
    {
      name: 'Telegram',
      href: '#',
      icon: FaTelegram,
    },
    {
      name: 'VK',
      href: '#',
      icon: FaVk,
    },
    {
      name: 'Email',
      href: 'mailto:info@domashkapro.ru',
      icon: FaEnvelope,
    },
    {
      name: 'YouTube',
      href: '#',
      icon: FaYoutube,
    },
  ],
};

const Footer = () => (
  <footer className="bg-gradient-to-t from-[#f8f5f0] via-white to-[#eaf2fd] border-t border-slate-200 mt-24 shadow-inner">
    <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-3">
      <div className="flex flex-col items-start">
        <div className="flex items-center mb-4">
          <OwlMascot className="w-11 h-11 mr-2 transition-transform hover:scale-110" />
          <span className="font-bold text-xl text-blue-800">ДомашкаPRO AI</span>
        </div>
        <p className="text-slate-600 text-sm mb-3 max-w-xs">
          Помощник для школьников и родителей: умные решения, объяснения по ФГОС, индивидуальный подход к каждому заданию.
        </p>
        <ul className="flex space-x-3 mt-2">
          {navigation.social.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="text-slate-500 hover:text-blue-600 transition-transform transform hover:scale-125"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.name}
              >
                <item.icon size={26} />
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Навигация О проекте */}
      <div>
        <h4 className="font-semibold text-slate-800 mb-4">О проекте</h4>
        <ul className="space-y-2">
          {navigation.about.map((item) => (
            <li key={item.name}>
              <a href={item.href} className="text-slate-600 hover:text-blue-600 text-sm transition">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Навигация Помощь */}
      <div>
        <h4 className="font-semibold text-slate-800 mb-4">Помощь</h4>
        <ul className="space-y-2">
          {navigation.help.map((item) => (
            <li key={item.name}>
              <a href={item.href} className="text-slate-600 hover:text-blue-600 text-sm transition">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>

    {/* Юридические ссылки и копирайт */}
    <div className="max-w-7xl mx-auto px-6 pb-8 flex flex-col md:flex-row justify-between items-center border-t border-slate-200 pt-4">
      <div className="text-sm text-slate-500 mb-2 md:mb-0">
        © 2025 ДомашкаPRO AI. Все права защищены.
      </div>
      <div className="flex space-x-4">
        {navigation.legal.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-sm text-slate-500 underline hover:text-blue-600 transition"
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
