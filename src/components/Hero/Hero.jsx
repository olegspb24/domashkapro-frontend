const Hero = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-14 grid grid-cols-1 items-center gap-14 sm:mt-32 lg:mt-40 lg:grid-cols-2">
      {/* Картинка */}
      <div className="order-2 lg:order-1 flex justify-center">
        <img
          src="/banner.jpg"
          alt="Радостный ученик с пятёркой"
          className="
            rounded-2xl shadow-xl
            w-[260px] h-[260px] 
            sm:w-[340px] sm:h-[340px]
            lg:w-[430px] lg:h-[430px]
            object-cover
            transition-all duration-300
          "
        />
      </div>

      {/* Тексты и форма */}
      <div className="order-1 lg:order-2 flex flex-col gap-6">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">
          ДомашкаPRO AI — ваш цифровой помощник для школы и семьи
        </h1>
        <p className="text-xl text-blue-700 font-semibold mb-2">
          Все задания — строго по стандартам ФГОС!
        </p>
        <p className="text-lg text-slate-700 mb-4">
          Решите любую задачу, получите объяснение, подготовьте сочинение или исследовательскую работу — всё понятно, быстро и по правилам школы.
        </p>
        {/* Универсальная форма */}
        <form className="flex flex-col gap-4 w-full max-w-md">
          <textarea
            className="border rounded-lg p-4 resize-y min-h-[100px] text-base"
            placeholder="Например: «Реши задачу по физике про скорость света» или загрузите фото задания 😎"
          />
          <label className="flex items-center gap-3 text-slate-700 text-base">
            или загрузите фото/скан:
            <input
              type="file"
              accept="image/*,application/pdf"
              className="block text-sm"
            />
          </label>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition"
          >
            Получить решение и объяснение
          </button>
          <p className="text-sm text-slate-500 text-center mt-1">
            Всё строго по <span className="text-blue-700 font-medium">ФГОС</span>. Без рекламы и спама!
          </p>
        </form>
      </div>
    </div>
  );
};

export default Hero;
