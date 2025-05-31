import React from 'react';
import { FaTelegram, FaVk, FaEnvelope, FaYoutube } from "react-icons/fa";

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
  <footer className="bg-slate-50 border-t border-slate-200 dark:bg-neutral-900 dark:border-neutral-800 mt-12">
    <div className="max-w-7xl mx-auto px-6 py-12 grid gap-8 md:grid-cols-3">
      <div>
        <div className="flex items-center mb-4">
          <img src="/logo.png" alt="ДомашкаPRO AI" className="w-10 h-10 mr-2" />
          <span className="font-bold text-xl text-blue-800 dark:text-blue-200">ДомашкаPRO AI</span>
        </div>
        <p className="text-slate-600 dark:text-slate-400 text-sm mb-3">
          Помощник для школьников и родителей: умные решения, объяснения по ФГОС, индивидуальный подход к каждому заданию.
        </p>
        <ul className="flex space-x-4 mt-2">
          {navigation.social.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.name}
              >
                <item.icon size={24} />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-3">О проекте</h4>
        <ul className="space-y-2">
          {navigation.about.map((item) => (
            <li key={item.name}>
              <a href={item.href} className="text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 text-sm">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-3">Помощь</h4>
        <ul className="space-y-2">
          {navigation.help.map((item) => (
            <li key={item.name}>
              <a href={item.href} className="text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 text-sm">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-6 pb-6 flex flex-col md:flex-row justify-between items-center border-t border-slate-200 dark:border-neutral-800 pt-4">
      <div className="text-xs text-slate-500 dark:text-slate-400 mb-2 md:mb-0">
        © 2025 ДомашкаPRO AI. Все права защищены.
      </div>
      <div className="flex space-x-4">
        {navigation.legal.map((item) => (
          <a key={item.name} href={item.href} className="text-xs text-slate-500 underline hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400">
            {item.name}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
