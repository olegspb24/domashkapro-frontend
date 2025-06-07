import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaDrawPolygon, FaRegFileAlt, FaChalkboardTeacher } from "react-icons/fa";
import CircleBg from "../CircleBg";

const posts = [
  {
    id: 1,
    category: 'Анонс',
    title: 'Добро пожаловать в ДомашкаPRO!',
    description: 'Ваша персональная AI‑помощь в учёбе теперь доступна онлайн. Решайте задачи, получайте объяснения и советы для школьников и родителей — всё в одном сервисе.',
    href: '#',
    icon: <FaRegFileAlt size={52} className="text-blue-500 mx-auto mt-6" />,
    alt: 'Добро пожаловать',
    metadata: {
      author: 'Команда ДомашкаPRO',
      authorImg: '/logo.png',
      datetime: '2025-06-01',
      date: '1 июня 2025',
    },
  },
  {
    id: 2,
    category: 'Инструкция',
    title: 'Как быстро получить решение задачи',
    description: 'Просто опишите задачу или загрузите фото. Через минуту вы получите не только ответ, но и объяснение — как на уроке с учителем!',
    href: '#',
    icon: <FaDrawPolygon size={52} className="text-red-500 mx-auto mt-6" />,
    alt: 'Инструкция',
    metadata: {
      author: 'Команда ДомашкаPRO',
      authorImg: '/logo.png',
      datetime: '2025-06-01',
      date: '1 июня 2025',
    },
  },
  {
    id: 3,
    category: 'Полезно',
    title: '3 совета для родителей',
    description: 'Помогайте ребёнку учиться с интересом: обсуждайте задания, пробуйте решать вместе, доверяйте объяснениям AI как дополнительному ресурсу.',
    href: '#',
    icon: <FaChalkboardTeacher size={52} className="text-green-500 mx-auto mt-6" />,
    alt: 'Совет родителям',
    metadata: {
      author: 'Педагог ДомашкаPRO',
      authorImg: '/teacher.png',
      datetime: '2025-06-01',
      date: '1 июня 2025',
    },
  },
];

const Blogs = () => {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <CircleBg>
      <div className="mx-auto mt-24 max-w-7xl px-4 sm:mt-32 sm:px-6 lg:mt-40 lg:px-8">
        <div className="block items-end justify-between lg:flex">
          <div className="flex max-w-4xl flex-col space-y-7">
            <h3 className="text-lg font-medium uppercase tracking-wide text-blue-700">
              Блог и новости
            </h3>
            <h2 className="text-4xl font-semibold leading-tight tracking-wide text-neutral-900 xl:text-5xl">
              Советы, инструкции и анонсы ДомашкаPRO
            </h2>
            <p className="max-w-xl text-lg text-neutral-600">
              Всё для успешной учёбы: инструкции, полезные материалы для родителей, школьников и новости развития платформы.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-md sm:mt-14 md:max-w-2xl lg:mt-20 lg:max-w-none">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 xl:grid-cols-3">
            {posts.map((post, idx) =>
              isDesktop ? (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: idx * 0.12,
                    ease: "easeOut",
                  }}
                  className="flex flex-col rounded-3xl ring-2 ring-neutral-200 shadow-2xl bg-white transition-all duration-300 hover:scale-105 hover:ring-blue-300 group"
                >
                  {/* Иконка */}
                  <div className="w-full flex justify-center items-center h-[120px] bg-slate-50 rounded-t-3xl">
                    {post.icon}
                  </div>
                  <div className="px-3 py-8 lg:px-4 lg:py-10">
                    <div className="flex items-center space-x-4">
                      <span className="rounded-sm bg-neutral-200 p-2 text-xs font-medium uppercase text-neutral-600">
                        {post.category}
                      </span>
                      <time
                        dateTime={post.metadata.datetime}
                        className="text-sm text-neutral-600"
                      >
                        {post.metadata.date}
                      </time>
                    </div>
                    <dt className="mt-6">
                      <h3 className="text-2xl font-semibold leading-tight text-neutral-900">
                        {post.title}
                      </h3>
                    </dt>
                    <dd className="mt-4 flex flex-auto flex-col text-base leading-7">
                      <p className="flex-auto text-base text-neutral-500">
                        {post.description}
                      </p>
                      <div className="mt-6 flex items-center">
                        <a
                          href="#"
                          className="flex items-center gap-x-2 text-base text-blue-600 font-medium"
                        >
                          Читать подробнее
                        </a>
                      </div>
                    </dd>
                  </div>
                </motion.div>
              ) : (
                <div
                  key={post.id}
                  className="flex flex-col rounded-3xl ring-2 ring-neutral-200 shadow-2xl bg-white transition-all duration-300 hover:scale-105 hover:ring-blue-300 group"
                >
                  {/* Иконка */}
                  <div className="w-full flex justify-center items-center h-[120px] bg-slate-50 rounded-t-3xl">
                    {post.icon}
                  </div>
                  <div className="px-3 py-8 lg:px-4 lg:py-10">
                    <div className="flex items-center space-x-4">
                      <span className="rounded-sm bg-neutral-200 p-2 text-xs font-medium uppercase text-neutral-600">
                        {post.category}
                      </span>
                      <time
                        dateTime={post.metadata.datetime}
                        className="text-sm text-neutral-600"
                      >
                        {post.metadata.date}
                      </time>
                    </div>
                    <dt className="mt-6">
                      <h3 className="text-2xl font-semibold leading-tight text-neutral-900">
                        {post.title}
                      </h3>
                    </dt>
                    <dd className="mt-4 flex flex-auto flex-col text-base leading-7">
                      <p className="flex-auto text-base text-neutral-500">
                        {post.description}
                      </p>
                      <div className="mt-6 flex items-center">
                        <a
                          href="#"
                          className="flex items-center gap-x-2 text-base text-blue-600 font-medium"
                        >
                          Читать подробнее
                        </a>
                      </div>
                    </dd>
                  </div>
                </div>
              )
            )}
          </dl>
        </div>
      </div>
    </CircleBg>
  );
};

export default Blogs;
