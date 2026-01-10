import React from 'react';

const Tecnologias = [
  { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'Spring', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
  { name: 'Tailwind', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
];

const techRow2 = [
  { name: 'TensorFlow', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
  { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
];

const TechFlow = () => {
  return (
    <section className="py-12 bg-transparent overflow-hidden">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center text-indigo-600 mb-10">Tecnologías</h2>
        
        {/* Contenedor principal con efecto de desvanecimiento en las esquinas */}
        <div className="relative flex flex-col gap-8 [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          
          {/* Fila 1: Se mueve a la izquierda */}
          <div className="flex w-[200%] animate-infinite-scroll">
            {[...techRow1, ...techRow1].map((tech, index) => (
              <div key={index} className="flex flex-col items-center justify-center w-40 flex-shrink-0 group">
                <div className="w-20 h-20 bg-white rounded-2xl shadow-md flex items-center justify-center p-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <img src={tech.logo} alt={tech.name} className="w-12 h-12" />
                </div>
                <span className="mt-2 text-sm font-medium text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity">{tech.name}</span>
              </div>
            ))}
          </div>

          {/* Fila 2: Se mueve a la derecha */}
          <div className="flex w-[200%] animate-infinite-scroll-reverse">
            {[...techRow2, ...techRow2].map((tech, index) => (
              <div key={index} className="flex flex-col items-center justify-center w-40 flex-shrink-0 group">
                <div className="w-20 h-20 bg-white rounded-2xl shadow-md flex items-center justify-center p-4 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                  <img src={tech.logo} alt={tech.name} className="w-12 h-12" />
                </div>
                <span className="mt-2 text-sm font-medium text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity">{tech.name}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Tecnologias;