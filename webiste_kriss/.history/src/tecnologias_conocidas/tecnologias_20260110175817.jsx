import React, { useState } from 'react';

const techData = {
  Backend: [
    { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "Spring Boot", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" }
  ],
  Frontend: [
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" }
  ],
  Data: [
    { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
    { name: "PyTorch", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
    { name: "Pandas", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
    { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" }
  ],
  DevOps: [
    { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
    // { name: "GCP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" }
  ]
};

const Tecnologias = () => {
  const [activeTab, setActiveTab] = useState('Todos');
  const categories = ['Todos', ...Object.keys(techData)];

  // Aplanar todos los logos para el carrusel
  const allLogos = Object.values(techData).flat();

  return (
    <section id="tecnologias" className="py-20 bg-gray-50/50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-center text-indigo-700 mb-4">Tech Stack</h2>
        <p className="text-center text-gray-600 mb-12">Explora las herramientas que utilizo para dar vida a mis proyectos.</p>

        {/* --- 1. CARRUSEL VISUAL (IMPACTO) --- */}
        <div className="relative mb-16 perspective-1000 [mask-image:_linear-gradient(to_right,transparent_0,_black_20%,_black_80%,transparent_100%)]">
          <div className="flex w-[200%] animate-scroll-x hover:[animation-play-state:paused] cursor-pointer">
            {[...allLogos, ...allLogos].map((tech, i) => (
              <div key={i} className="w-40 flex-shrink-0 flex flex-col items-center group">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center p-3 border border-gray-100 transform-gpu rotate-y-12 group-hover:rotate-0 transition-transform duration-500">
                  <img src={tech.logo} alt={tech.name} className="w-full h-full object-contain" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- 2. SELECTOR DE CATEGORÍAS (INTERACTIVIDAD) --- */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                activeTab === cat 
                ? 'bg-indigo-600 text-white shadow-lg scale-105' 
                : 'bg-white text-gray-600 hover:bg-indigo-50 border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* --- 3. GRILLA ESTÁTICA (LECTURA RÁPIDA) --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {Object.entries(techData).map(([cat, techs]) => (
            // Solo mostrar si es la categoría activa o si está en "Todos"
            (activeTab === 'Todos' || activeTab === cat) && techs.map((tech, i) => (
              <div 
                key={`${cat}-${i}`}
                className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-100 shadow-sm hover:border-indigo-300 transition-colors animate-in fade-in zoom-in duration-300"
              >
                <img src={tech.logo} alt="" className="w-6 h-6" />
                <span className="text-sm font-semibold text-gray-700">{tech.name}</span>
              </div>
            ))
          ))}
        </div>
      </div>

      <style>{`
        .perspective-1000 { perspective: 1000px; }
        .rotate-y-12 { transform: rotateY(20deg); }
      `}</style>
    </section>
  );
};

export default Tecnologias;