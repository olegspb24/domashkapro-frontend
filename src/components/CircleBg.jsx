import React from "react";

const CircleBg = ({ children }) => (
  <div className="relative">
    {/* Левый верхний угол */}
    <div
      className="absolute left-[-40px] top-[-40px] w-32 h-32 rounded-full"
      style={{ background: "#FFD580", opacity: 0.13, zIndex: 1 }}
    />
    {/* Правый верхний угол */}
    <div
      className="absolute right-[-40px] top-[-40px] w-24 h-24 rounded-full"
      style={{ background: "#A7F3D0", opacity: 0.11, zIndex: 1 }}
    />
    {/* Левый нижний угол */}
    <div
      className="absolute left-[-30px] bottom-[-30px] w-20 h-20 rounded-full"
      style={{ background: "#6D93F6", opacity: 0.09, zIndex: 1 }}
    />
    {/* Правый нижний угол */}
    <div
      className="absolute right-[-40px] bottom-[-40px] w-36 h-36 rounded-full"
      style={{ background: "#E5EDFB", opacity: 0.12, zIndex: 1 }}
    />
    <div className="relative z-10">{children}</div>
  </div>
);

export default CircleBg;
