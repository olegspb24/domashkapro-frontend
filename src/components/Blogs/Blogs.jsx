import React from 'react';
import { FaDrawPolygon, FaRegFileAlt, FaChalkboardTeacher } from "react-icons/fa";

const posts = [
  {
    id: 1,
    category: 'Анонс',
    title: 'Скоро: графические задачи и AI-чертежи!',
    description:
      'В ближайших обновлениях ДомашкаPRO AI появится возможность решать задачи по геометрии, физике, черчению — и получать подробные графические ответы прямо в личный кабинет. Следите за новостями!',
    href: '#',
    icon: <FaDrawPolygon size={52} className="text-red-500 mx-auto mt-6" />,
    alt: 'Графические задачи',
    metadata: {
      author: 'Команда ДомашкаPRO',
      authorImg: '/logo.png',
      datetime: '2025-08-01',
      date: '1 августа 2025',
    },
  },
  {
    id: 2,
    category: 'Инструкция',
    title: 'Как работает ДомашкаPRO AI',
    description:
      'Пошаговое руководство: как отправить задание, загрузить фото, получить решение с объяснением и графическим ответом.',
    href: '#',
    icon: <FaRegFileAlt size={52} className="text-blue-500 mx-auto mt-6" />,
    alt: 'Как пользоваться платформой',
    metadata: {
      author: 'Команда ДомашкаPRO',
      authorImg: '/logo.png',
      datetime: '2025-05-27',
      date: '27 мая 2025',
    },
  },
  {
    id: 3,
    category: 'Полезно',
    title: '5 советов школьникам и родителям',
    description:
      'Как повысить мотивацию, использовать цифровые помощники для учебы, не потерять индивидуальность и научиться “учиться”.',
    href: '#',
    icon: <FaChalkboardTeacher size={52} className="text-green-500 mx-auto mt-6" />,
    alt: 'Советы школьникам',
    metadata: {
      author: 'Педагог ДомашкаPRO',
      authorImg: '/teacher.png',
      datetime: '2025-05-20',
      date: '20 мая 2025',
    },
  },
];

const Blogs = () => {
  return (
    <div className="mx-auto mt-24 max-w-7xl px-4 sm:mt-32 sm:px-6 lg:mt-40 lg:px-8">
      <div className="block items-end justify-between lg:flex">
        <div className="flex max-w-4xl flex-col space-y-7">
          <h3 className="text-lg font-medium uppercase tracking-wide text-blue-700">
            Блог и новости
          </h3>

          <h2 className="text-4xl font-semibold leading-tight tracking-wide text-neutral-900 dark:text-neutral-50 xl:text-5xl">
            Советы, инструкции и анонсы ДомашкаPRO
          </h2>

          <p className="max-w-xl text-lg text-neutral-600 dark:text-neutral-400">
            Всё для успешной учебы: инструкции, полезные материалы для родителей, школьников и новости развития платформы.
          </p>
        </div>

        <div className="mt-6 flex justify-center">
          <a
            href="#"
            className="rounded-md bg-white px-10 py-3 text-base font-medium text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 hover:bg-neutral-50 dark:bg-neutral-900 dark:text-white dark:ring-neutral-800 dark:hover:bg-neutral-800"
          >
            Смотреть все
          </a>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-md sm:mt-14 md:max-w-2xl lg:mt-20 lg:max-w-none">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post) => (
            <div
              key={post.id}
              className="flex flex-col rounded-xl ring-2 ring-neutral-200 dark:ring-neutral-800 shadow-sm bg-white transition"
            >
              {/* Иконка в едином стиле */}
              <div className="w-full flex justify-center items-center h-[120px] bg-slate-50 rounded-t-xl">
                {post.icon}
              </div>

              <div className="px-3 py-8 lg:px-4 lg:py-10">
                <div className="flex items-center space-x-4">
                  <span className="rounded-sm bg-neutral-200 p-2 text-xs font-medium uppercase text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300">
                    {post.category}
                  </span>
                  <time
                    dateTime={post.metadata.datetime}
                    className="text-sm text-neutral-600 dark:text-neutral-300"
                  >
                    {post.metadata.date}
                  </time>
                </div>

                <dt className="mt-6">
                  <h3 className="text-2xl font-semibold leading-tight text-neutral-900 dark:text-neutral-100">
                    {post.title}
                  </h3>
                </dt>

                <dd className="mt-4 flex flex-auto flex-col text-base leading-7">
                  <p className="flex-auto text-base text-neutral-500 dark:text-neutral-500">
                    {post.description}
                  </p>

                  <div className="mt-6 flex items-center">
                    <a
                      href={post.href}
                      className="flex items-center gap-x-2 text-base text-blue-600 dark:text-blue-400 font-medium"
                    >
                      Читать подробнее
                      <ChevronIcon aria-hidden="true" className="h-4 w-4" />
                    </a>
                  </div>
                </dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

function ChevronIcon(props) {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 4.5l7.5 7.5-7.5 7.5"
      />
    </svg>
  );
}

export default Blogs;
