import React from 'react';

const row1 = [
  { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Spring Boot", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
];

const row2 = [
  { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
  { name: "PyTorch", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
  { name: "Pandas", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
  { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  { name: "GCP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
];

const Tecnologias = () => {
  return (
    <section className="py-20 bg-transparent overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-16">Stack Tecnológico</h2>

        {/* Contenedor con Perspectiva 3D y Máscara Circular */}
        <div className="relative perspective-1000 [mask-image:_linear-gradient(to_right,transparent_0,_black_20%,_black_80%,transparent_100%)]">
          
          {/* Fila 1 - Movimiento Izquierda */}
          <div className="flex w-[200%] animate-scroll-x mb-12">
            {[...row1, ...row1].map((tech, i) => (
              <div key={i} className="w-48 flex-shrink-0 flex flex-col items-center justify-center transition-all duration-500 hover:scale-125 hover:z-10">
                <div className="relative w-24 h-24 bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl flex items-center justify-center p-5 border border-white/20 transform-gpu rotate-y-12">
                   <img src={tech.logo} alt={tech.name} className="w-full h-full object-contain" />
                </div>
                <p className="mt-4 text-xs font-bold text-indigo-900/60 uppercase tracking-widest">{tech.name}</p>
              </div>
            ))}
          </div>

          {/* Fila 2 - Movimiento Derecha */}
          <div className="flex w-[200%] animate-scroll-x-reverse">
            {[...row2, ...row2].map((tech, i) => (
              <div key={i} className="w-48 flex-shrink-0 flex flex-col items-center justify-center transition-all duration-500 hover:scale-125 hover:z-10">
                <div className="relative w-24 h-24 bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl flex items-center justify-center p-5 border border-white/20 transform-gpu -rotate-y-12">
                   <img src={tech.logo} alt={tech.name} className="w-full h-full object-contain" />
                </div>
                <p className="mt-4 text-xs font-bold text-indigo-900/60 uppercase tracking-widest">{tech.name}</p>
              </div>
            ))}
          </div>
          
        </div>
      </div>

      {/* Estilos CSS adicionales para la "Curvatura" */}
      <style>{`
        .perspective-1000 {
          perspective: 1200px;
        }
        .rotate-y-12 {
          transform: rotateY(15deg);
        }
        .-rotate-y-12 {
          transform: rotateY(-15deg);
        }
      `}</style>
    </section>
  );
};

export default Tecnologias;