import React from "react";

const OwlMascot = ({ className = "" }) => (
  <svg
    viewBox="0 0 68 68"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Тень */}
    <ellipse cx="34" cy="60" rx="24" ry="6" fill="#ececec" />
    {/* Туловище */}
    <ellipse cx="34" cy="34" rx="28" ry="28" fill="#6477D9" />
    {/* Левый глаз */}
    <ellipse cx="22" cy="32" rx="8" ry="12" fill="#fff" />
    {/* Правый глаз */}
    <ellipse cx="46" cy="32" rx="8" ry="12" fill="#fff" />
    {/* Зрачки */}
    <ellipse cx="22" cy="36" rx="3" ry="5" fill="#333" />
    <ellipse cx="46" cy="36" rx="3" ry="5" fill="#333" />
    {/* Брови */}
    <path d="M14 23 Q22 18 30 23" stroke="#333" strokeWidth="2" fill="none" />
    <path d="M54 23 Q46 18 38 23" stroke="#333" strokeWidth="2" fill="none" />
    {/* Крылья */}
    <path d="M7 43 Q0 60 20 65" stroke="#B4C5F5" strokeWidth="4" fill="none" />
    <path d="M61 43 Q68 60 48 65" stroke="#B4C5F5" strokeWidth="4" fill="none" />
    {/* Животик */}
    <ellipse cx="34" cy="50" rx="15" ry="9" fill="#F5F5F5" />
    {/* Клюв */}
    <polygon points="31,42 37,42 34,50" fill="#FFB74D" />
    {/* Ножки */}
    <rect x="28" y="58" width="3" height="8" rx="1.5" fill="#FFB74D" />
    <rect x="37" y="58" width="3" height="8" rx="1.5" fill="#FFB74D" />
  </svg>
);

export default OwlMascot;
