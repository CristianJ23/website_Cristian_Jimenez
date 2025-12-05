// src/PanelCursos.jsx
import React, { useState } from 'react';

const cursos = [
  'Machine Learning Specialization – Coursera',
  'DeepLearning.AI – Neural Networks',
  'Intro to High‑Energy Physics – CERN Resources',
  'Data Analysis with Python – freeCodeCamp',
];

const PanelCursos = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  // Clases condicionales de Tailwind para el desplazamiento
  const panelClasses = `fixed top-0 right-0 w-72 h-full bg-indigo-50 shadow-2xl p-6 transition-transform duration-300 z-50 transform 
    ${isOpen ? 'translate-x-0' : 'translate-x-full'}`;
  
  // Clases condicionales para el botón de alternancia
  const toggleClasses = `fixed top-1/2 right-0 transform -translate-y-1/2 cursor-pointer p-3 rounded-l-lg text-white font-semibold text-lg z-50 transition duration-300 
    ${isOpen ? 'bg-indigo-800 hover:bg-indigo-900' : 'bg-indigo-600 hover:bg-indigo-700'}`;

  // Clase para la animación "wiggle" (requiere CSS customizado o un framework de animación)
  const wiggleClass = !isOpen ? 'animate-wiggle' : '';

  return (
    <>
      {/* Botón de alternancia */}
      <div 
        onClick={togglePanel} 
        className={`${toggleClasses} ${wiggleClass}`}
      >
        {isOpen ? '◀' : '▶'}
      </div>

      {/* Panel Deslizable */}
      <div id="courses-panel" className={panelClasses}>
        <h2 className="text-2xl font-extrabold text-indigo-700 mb-4 border-b pb-2">
          Cursos & Certificaciones
        </h2>
        <ul className="space-y-3 list-disc list-inside text-gray-700">
          {cursos.map((curso, index) => (
            <li key={index}>{curso}</li>
          ))}
        </ul>
      </div>

      {/* Estilos CSS puros para animaciones complejas (se agregan en index.css) */}
      <style>{`
        /* La animación 'wiggle' no es estándar en Tailwind y debe ser customizada */
        @keyframes wiggle {
          0%, 100% { transform: translateY(-50%) rotate(0deg); }
          50% { transform: translateY(-50%) rotate(10deg); }
        }
        .animate-wiggle {
          animation: wiggle 1.4s infinite ease-in-out;
        }
      `}</style>
    </>
  );
};

export default PanelCursos;