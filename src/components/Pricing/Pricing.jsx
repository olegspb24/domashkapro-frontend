import React from "react";
import CircleBg from "../CircleBg";

const tiers = [
  {
    name: 'Старт',
    id: 'tier-start',
    href: '#',
    price: { monthly: '0₽', annually: '' },
    features: [
      '3 задачи бесплатно',
      'Педагогическое объяснение',
      'Сочинения и эссе',
      'Доступ ко всем предметам',
      'Решения по фото и тексту',
    ],
    cta: 'Попробовать бесплатно',
    subtitle: 'Пробный период 7 дней',
    highlight: false,
  },
  {
    name: 'Премиум',
    id: 'tier-premium',
    href: '#',
    price: { monthly: '299₽', annually: '2990₽' },
    features: [
      'Безлимитные задачи и объяснения',
      'Сочинения, НИР и эссе',
      'Приоритетная поддержка',
      'Всё по ФГОС',
      'Конфиденциальность и безопасность',
    ],
    cta: 'Оформить подписку',
    subtitle: 'в месяц или 2990₽/год',
    highlight: true,
  },
  {
    name: 'Разовое решение',
    id: 'tier-single',
    href: '#',
    price: { monthly: '99₽', annually: '' },
    features: [
      'Быстрое решение с объяснением',
      '1 фото или файл',
      'Индивидуальный разбор',
      'Без подписки и лимитов',
    ],
    cta: 'Получить решение',
    subtitle: '1 сложное задание',
    highlight: false,
  },
];

const Pricing = () => {
  return (
    <CircleBg>
      <div className="mx-auto mt-24 max-w-7xl px-4 sm:mt-32 sm:px-6 lg:mt-40 lg:px-8">
        <div className="mx-auto flex max-w-4xl flex-col space-y-7 text-center">
          <h3 className="text-lg font-medium uppercase tracking-wide text-blue-600">
            Для всех и каждого
          </h3>
          <h2 className="text-4xl font-bold leading-tight tracking-wide text-neutral-900 xl:text-5xl">
            Выберите свой тариф
          </h2>
          <p className="text-lg text-neutral-600">
            Попробуйте бесплатно — убедитесь, как удобно учиться с ДомашкаPRO AI
          </p>
        </div>

        <div className="isolate mx-auto mt-14 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:mt-24 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`flex flex-col justify-between space-y-10 rounded-3xl bg-white p-10 text-center ring-2 transition-all duration-300 
                ${tier.highlight 
                  ? "ring-blue-500 shadow-2xl" 
                  : "ring-neutral-200"}
                hover:scale-105 hover:shadow-2xl`}
            >
              <div>
                {/* Можно добавить лейбл “Рекомендуем” */}
                {tier.highlight && (
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-xs font-semibold">
                      Рекомендуем
                    </span>
                  </div>
                )}
                <h3
                  id={tier.id}
                  className="text-lg font-semibold leading-8 text-neutral-900"
                >
                  {tier.name}
                </h3>

                <div className="mt-2 flex flex-col space-y-2">
                  <p className="flex items-baseline justify-center gap-x-1">
                    <span className={`font-bold tracking-tight text-neutral-900 text-5xl ${tier.highlight ? 'text-6xl' : ''}`}>
                      {tier.price.monthly}
                    </span>
                    {tier.name !== "Разовое решение" && (
                      <span className="text-neutral-600">
                        /мес
                      </span>
                    )}
                  </p>
                  {tier.price.annually && (
                    <p className="text-base text-neutral-600">
                      или {tier.price.annually}/год
                    </p>
                  )}
                  {tier.subtitle && (
                    <p className="text-sm text-blue-600 font-medium">{tier.subtitle}</p>
                  )}
                </div>

                <ul
                  role="list"
                  className="mt-6 space-y-3 text-base leading-6 text-neutral-700 text-left self-stretch list-none pl-0"
                >
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex gap-x-2 items-start">
                      <CheckIcon
                        className="h-5 w-5 flex-none text-blue-500 mt-1"
                        aria-hidden="true"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={`rounded-md px-10 py-3 text-sm font-semibold shadow-sm transition mt-2
                  ${tier.highlight
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-neutral-200 text-neutral-900 hover:bg-neutral-300"
                  }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </CircleBg>
  );
};

function CheckIcon(props) {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  );
}

export default Pricing;
