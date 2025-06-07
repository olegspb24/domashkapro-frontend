import React from "react";
import OwlMascot from "./OwlMascot"; // путь './OwlMascot' если оба в components/

const HeroBackground = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 1440 600"
    fill="none"
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: 0,
      pointerEvents: "none"
    }}
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Волна */}
    <path
      d="M0,100 C480,250 960,0 1440,150 L1440,600 L0,600 Z"
      fill="#E5EDFB"
      opacity="0.7"
    />
    {/* Круги */}
    <circle cx="200" cy="150" r="45" fill="#FFD580" opacity="0.6" />
    <circle cx="1100" cy="80" r="38" fill="#A7F3D0" opacity="0.5" />
    {/* Книга */}
    <rect x="350" y="370" rx="16" width="120" height="60" fill="#6D93F6" opacity="0.6"/>
    {/* Молекула */}
    <circle cx="750" cy="400" r="16" fill="#f59e42" />
    <circle cx="780" cy="420" r="10" fill="#fff" />
    <circle cx="720" cy="430" r="9" fill="#fff" />
    <line x1="750" y1="400" x2="780" y2="420" stroke="#f59e42" strokeWidth="2" />
    <line x1="750" y1="400" x2="720" y2="430" stroke="#f59e42" strokeWidth="2" />
    {/* Здесь не SVG, а реальный React-компонент для совы */}
    <foreignObject x="1280" y="470" width="120" height="120">
      <div style={{ width: "100px", height: "100px" }}>
        <OwlMascot />
      </div>
    </foreignObject>
  </svg>
);

export default HeroBackground;
