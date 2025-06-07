import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaChalkboardTeacher,
  FaGraduationCap,
  FaRegFileAlt,
  FaStopwatch,
  FaBookOpen,
  FaLock,
} from "react-icons/fa";
import CircleBg from "../CircleBg";

const benefits = [
  {
    icon: <FaChalkboardTeacher size={38} className="text-blue-600" />,
    title: "Педагогическое объяснение",
    text: "Решения с разбором, как на уроке с учителем.",
  },
  {
    icon: <FaGraduationCap size={38} className="text-green-600" />,
    title: "Соответствие ФГОС",
    text: "Всё по федеральным стандартам и школьным требованиям.",
  },
  {
    icon: <FaRegFileAlt size={38} className="text-purple-600" />,
    title: "Сочинения и проекты",
    text: "Поможем с сочинениями, эссе и научными работами.",
  },
  {
    icon: <FaStopwatch size={38} className="text-pink-600" />,
    title: "Быстрое решение",
    text: "Подробный ответ за пару минут.",
  },
  {
    icon: <FaBookOpen size={38} className="text-yellow-600" />,
    title: "Все предметы",
    text: "Математика, русский, английский, физика и другие.",
  },
  {
    icon: <FaLock size={38} className="text-slate-600" />,
    title: "Конфиденциальность",
    text: "Только вы видите свои задания и решения.",
  },
];

const About = () => {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 640);

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <CircleBg>
      <div className="mx-auto mt-24 max-w-7xl px-2 sm:mt-32 sm:px-6 lg:mt-40 lg:px-8 bg-[#F8FAFF] py-10 rounded-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-10">
          Почему выбирают ДомашкаPRO AI?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((b, idx) =>
            isDesktop ? (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: idx * 0.12,
                  ease: "easeOut",
                }}
                className="bg-white rounded-3xl shadow-2xl border border-slate-100 flex flex-col items-center p-10 text-center transition hover:scale-102 group"
              >
                <div className="mb-4 transition-transform group-hover:scale-105 group-hover:-translate-y-0.5">
                  {b.icon}
                </div>
                <div className="font-semibold text-xl mb-2">{b.title}</div>
                <div className="text-slate-700">{b.text}</div>
              </motion.div>
            ) : (
              <div
                key={idx}
                className="bg-white rounded-3xl shadow-2xl border border-slate-100 flex flex-col items-center p-10 text-center transition hover:scale-102 group"
              >
                <div className="mb-4 transition-transform group-hover:scale-105 group-hover:-translate-y-0.5">
                  {b.icon}
                </div>
                <div className="font-semibold text-xl mb-2">{b.title}</div>
                <div className="text-slate-700">{b.text}</div>
              </div>
            )
          )}
        </div>
      </div>
    </CircleBg>
  );
};

export default About;
