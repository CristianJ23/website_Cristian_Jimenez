import React from 'react';

const proyectos = [
  // {
  //   titulo: "Web to control sphero robot ",
  //   descripcion:
  //     "Virtual assistant designed for Ecuador’s tourism sector, integrating AI for itinerary generation, safety insights, and real‑time data. Built with a multidisciplinary team.",
  //   imagen: "https://placehold.co/600x400/1D4ED8/FFFFFF?text=Sphero+robot",
  // },
  {
    titulo: "Medical Administration System",
    tags: ["Spring Boot", "React", "PostgreSQL"],
    descripcion:
      "Full-stack system for hospital management. Includes JWT authentication, automated ticketing, and real-time database updates.",
    imagen:
      "https://www.youtube.com/watch?v=jvm6DpqqbLk&list=PLwR1545A9Prh_mbSLqAaE53R2hI_xzi3B&index=23",
    links: [
      { label: "Frontend UI", url: "https://github.com/..." },
      { label: "Backend API", url: "https://github.com/..." },
      { label: "Design", url: "https://figma.com/..." },
    ],
  },
  // {
  //   titulo: "Movill administration app for english academy",
  //   descripcion:
  //     "Collaborated with environmental engineers to design data‑driven tools for responsible and sustainable tourism in sensitive areas of Ecuador.",
  //   imagen:
  //     "https://placehold.co/600x400/6D28D9/FFFFFF?text=Academy+administration",
  // },
];
const CardProyectoVideo = ({ titulo, descripcion, videoId, links, tags }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 flex flex-col h-full transition-transform hover:scale-[1.01]">
      {/* Contenedor del Video (Iframe) */}
      <div className="relative w-full pb-[56.25%] bg-black"> 
        {/* El padding-bottom crea el aspecto 16:9 */}
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
          title={titulo}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex gap-2 mb-3">
          {tags.map(tag => (
            <span key={tag} className="px-2 py-0.5 bg-indigo-50 text-indigo-600 text-[10px] font-bold rounded uppercase">
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-xl font-bold text-gray-800 mb-2">{titulo}</h3>
        <p className="text-gray-600 text-sm mb-6">{descripcion}</p>

        {/* Links a Repositorios */}
        <div className="mt-auto pt-4 border-t border-gray-100 flex gap-4">
          {links.map((link, idx) => (
            <a 
              key={idx} 
              href={link.url} 
              target="_blank" 
              className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.6.111.815-.26.815-.572 0-.281-.01-1.03-.015-2.021-3.339.723-4.04-1.609-4.04-1.609-.546-1.387-1.334-1.756-1.334-1.756-1.087-.745.084-.729.084-.729 1.205.084 1.838 1.237 1.838 1.237 1.07 1.835 2.809 1.305 3.495.998.108-.775.419-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.383 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.046.138 3.003.404 2.293-1.552 3.3-1.23 3.3-1.23.653 1.652.241 2.873.118 3.176.77.838 1.233 1.911 1.233 3.221 0 4.609-2.806 5.626-5.474 5.924.43.37.818 1.11.818 2.247 0 1.605-.015 2.898-.015 3.297 0 .315.216.696.823.571C20.562 21.82 24 17.322 24 12c0-6.627-5.373-12-12-12z"/></svg>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardProyectoVideo;