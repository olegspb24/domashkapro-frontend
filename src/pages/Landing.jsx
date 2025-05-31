// src/pages/Landing.jsx
import React, { useState } from 'react';

export default function Landing() {
  const [text, setText] = useState('');
  const [image, setImage] = useState(null);

  return (
    <main className="container mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">ДомашкаPRO AI — умный помощник для школьников и родителей</h1>
      <p className="mb-6 text-lg text-gray-600">
        Вставьте текст задачи или загрузите изображение — получите решение за пару минут!
      </p>
      <form className="bg-white rounded shadow-md p-6 flex flex-col gap-4 max-w-xl mx-auto">
        <textarea
          className="border p-3 rounded min-h-[80px]"
          placeholder="Вставьте текст задачи..."
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <input
          type="file"
          accept="image/*"
          className="block"
          onChange={e => setImage(e.target.files[0])}
        />
        <button
          type="submit"
          className="mt-2 px-6 py-3 bg-blue-600 text-white rounded font-semibold hover:bg-blue-700"
        >
          Отправить
        </button>
      </form>
    </main>
  );
}
