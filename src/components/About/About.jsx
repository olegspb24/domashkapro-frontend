import { motion } from "framer-motion";
import { FaChalkboardTeacher, FaGraduationCap, FaRegFileAlt, FaStopwatch, FaBookOpen, FaLock } from "react-icons/fa";

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
  return (
    <div className="mx-auto mt-24 max-w-7xl px-4 sm:mt-32 sm:px-6 lg:mt-40 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-10">
        Почему выбирают ДомашкаPRO AI?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits.map((b, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.85,     // мягче и плавнее
              delay: idx * 0.17,  // плавная очередность
              ease: "easeOut",    // плавное завершение
            }}
            className="bg-white rounded-2xl shadow-lg flex flex-col items-center p-8 text-center transition hover:scale-105"
          >
            <div className="mb-4">{b.icon}</div>
            <div className="font-semibold text-xl mb-2">{b.title}</div>
            <div className="text-slate-700">{b.text}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;
