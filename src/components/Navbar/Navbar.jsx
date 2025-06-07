import React, { useState } from 'react';

const NAV_ITEMS = [
  { label: 'Как работает', href: '#about' },
  { label: 'Тарифы', href: '#pricing' },
  { label: 'Блог', href: '#blogs' },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-gray-50 border-b border-blue-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-4 md:px-8">
        {/* Логотип */}
        <div className="flex items-center">
          <a
            className="text-2xl font-bold text-blue-700 cursor-pointer select-none"
            href="#hero"
          >
            ДомашкаPRO AI
          </a>
        </div>

        {/* Меню (десктоп) */}
        <nav className="hidden md:flex gap-8">
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

        {/* Кнопка для мобилы */}
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
        </div>
      )}
    </header>
  );
};

export default Navbar;
