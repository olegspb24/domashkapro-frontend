import React, { useRef, useState } from "react";
import { FaCamera } from "react-icons/fa";
import CircleBg from "../CircleBg"; // Импорт компонента фона

const sideImage = "/your-chosen-image.jpg"; // Имя файла в public/

const InputTask = () => {
  const fileInput = useRef();
  const [task, setTask] = useState("");
  const [fileName, setFileName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTask("");
    setFileName("");
    // ... действия по отправке ...
  };

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    } else {
      setFileName("");
    }
  };

  return (
    <section className="relative w-full bg-[#F8F5F0] py-16 overflow-hidden">
      <CircleBg />

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-stretch gap-8 px-4 relative z-10">
        {/* ФОРМА слева */}
        <div className="flex-1 bg-white/80 rounded-2xl shadow-xl px-6 py-8 border border-slate-200 flex flex-col justify-center max-w-[420px] min-w-[300px]">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-2 text-center">
            Введите задание или загрузите фото
          </h2>
          <p className="mb-5 text-center text-slate-500 text-base">
            Сфотографируйте задачу или вставьте текст — получите подробное решение и объяснение.
          </p>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="relative">
              <textarea
                className="peer border border-slate-200 rounded-xl p-4 w-full min-h-[90px] text-base bg-white placeholder-transparent focus:ring-2 focus:ring-blue-200 outline-none transition"
                placeholder="Ваша задача"
                id="taskInput"
                required
                value={task}
                onChange={(e) => setTask(e.target.value)}
              />
              <label
                htmlFor="taskInput"
                className="pointer-events-none absolute left-4 top-3 text-slate-500 transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-focus:top-1 peer-focus:text-xs peer-focus:text-blue-600"
              >
                Опишите задание или вставьте текст…
              </label>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => fileInput.current.click()}
                className="flex items-center gap-2 px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-600 font-semibold rounded-lg shadow-sm border border-blue-100 transition"
              >
                <FaCamera className="text-blue-500" />{" "}
                {fileName ? fileName : "Загрузить фото/файл"}
              </button>
              <input
                type="file"
                accept="image/*,application/pdf"
                ref={fileInput}
                className="hidden"
                onChange={handleFileChange}
              />
              <span className="text-xs text-slate-400">jpg, png, pdf</span>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl shadow-lg mt-2 transition-all text-lg"
            >
              Решить задачу
            </button>
          </form>
          <div className="mt-6 text-xs text-slate-500 text-center">
            Например: <b>“Реши 2x + 3 = 7”</b> или прикрепи фото из учебника
          </div>
        </div>
        {/* КАРТИНКА справа */}
        <div className="flex-1 flex items-center justify-center max-w-[420px] min-w-[300px]">
          <img
            src={sideImage}
            alt="Иллюстрация AI-решения"
            className="rounded-2xl shadow-xl object-cover w-full h-full max-h-[420px] bg-white"
            style={{ minHeight: 360 }}
          />
        </div>
      </div>
    </section>
  );
};

export default InputTask;
