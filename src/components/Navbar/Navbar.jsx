// src/components/Navbar.jsx

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Меню секций — можешь менять ссылки под свои нужды
const NAV_ITEMS = [
  { label: 'Как работает', href: '#how-it-works' },
  { label: 'Категории', href: '#categories' },
  { label: 'FAQ', href: '#faq' },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-gray-50 border-b border-blue-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-4 md:px-8">
        {/* Логотип */}
        <div className="flex items-center">
          <span
            className="text-2xl font-bold text-blue-700 cursor-pointer select-none"
            onClick={() => navigate('/')}
          >
            ДомашкаPRO Al
          </span>
        </div>

        {/* Меню (десктоп) */}
        <nav className="hidden md:flex gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-base font-medium text-gray-700 hover:text-blue-700 transition"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Кнопки справа (десктоп) */}
        <div className="hidden md:flex items-center gap-3">
          {!token ? (
            <>
              <Link to="/login">
                <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md font-semibold hover:bg-blue-50 transition">
                  Войти
                </button>
              </Link>
              <Link to="/register">
                <button className="px-4 py-2 border border-gray-300 text-gray-800 bg-white rounded-md font-semibold hover:bg-gray-100 transition">
                  Регистрация
                </button>
              </Link>
            </>
          ) : (
            <>
              <Link to="/profile">
                <button className="px-4 py-2 border border-gray-300 text-gray-800 bg-white rounded-md font-semibold hover:bg-gray-100 transition">
                  Профиль
                </button>
              </Link>
              <button
                onClick={handleLogout}
                className="px-4 py-2 border border-red-200 text-red-600 bg-white rounded-md font-semibold hover:bg-red-50 transition"
              >
                Выйти
              </button>
            </>
          )}
          <Link to="/solve">
            <button className="px-5 py-2 bg-blue-600 text-white font-semibold rounded-md ml-2 shadow hover:bg-blue-700 transition">
              Отправить задачу
            </button>
          </Link>
        </div>

        {/* Бургер для мобилы */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 bg-transparent border-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="w-7 h-0.5 bg-gray-700 mb-1 rounded"></span>
          <span className="w-7 h-0.5 bg-gray-700 mb-1 rounded"></span>
          <span className="w-7 h-0.5 bg-gray-700 rounded"></span>
        </button>
      </div>

      {/* Мобильное меню */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute left-0 w-full py-4 px-4 z-50 border-b border-blue-100 animate-fade-in">
          <nav className="flex flex-col gap-4 mb-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-base font-medium text-gray-700 hover:text-blue-700 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex flex-col gap-3">
            {!token ? (
              <>
                <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                  <button className="w-full px-4 py-2 border border-blue-600 text-blue-600 rounded-md font-semibold hover:bg-blue-50 transition">
                    Войти
                  </button>
                </Link>
                <Link to="/register" onClick={() => setMobileMenuOpen(false)}>
                  <button className="w-full px-4 py-2 border border-gray-300 text-gray-800 bg-white rounded-md font-semibold hover:bg-gray-100 transition">
                    Регистрация
                  </button>
                </Link>
              </>
            ) : (
              <>
                <Link to="/profile" onClick={() => setMobileMenuOpen(false)}>
                  <button className="w-full px-4 py-2 border border-gray-300 text-gray-800 bg-white rounded-md font-semibold hover:bg-gray-100 transition">
                    Профиль
                  </button>
                </Link>
                <button
                  onClick={() => {
                    handleLogout();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full px-4 py-2 border border-red-200 text-red-600 bg-white rounded-md font-semibold hover:bg-red-50 transition"
                >
                  Выйти
                </button>
              </>
            )}
            <Link to="/solve" onClick={() => setMobileMenuOpen(false)}>
              <button className="w-full px-5 py-2 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-700 transition">
                Отправить задачу
              </button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
