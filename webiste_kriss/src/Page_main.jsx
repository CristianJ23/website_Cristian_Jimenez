import React, { useState } from 'react';
// Se reemplaza la importación local de la imagen por un placeholder URL para resolver el error de compilación
const miFoto = "https://github.com/CristianJ23/website_Cristian_Jimenez/blob/gh-pages/assets/me_curriculum-m8aozocF.jpg?raw=true";

// --- Componentes de Datos y UI Reutilizables ---

// Datos de ejemplo para las secciones
const datosCursos = [
  { nombre: 'Deep Learning Specialization', emisor: 'Coursera', anio: 2024 },
  { nombre: 'Advanced React and Redux', emisor: 'Udemy', anio: 2023 },
  { nombre: 'Spring Boot Microservices', emisor: 'Platzi', anio: 2023 },
];

const datosTecnologias = {
  Backend: ['Java', 'Spring Boot', 'Node.js', 'Python (Django/Flask)'],
  Frontend: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'],
  Data: ['TensorFlow', 'PyTorch', 'Pandas', 'SQL'],
  DevOps: ['Git/GitHub', 'Docker', 'Firebase/GCP'],
};

const proyectos = [
  {
    titulo: 'Web to control sphero robot ',
    descripcion: 'Virtual assistant designed for Ecuador’s tourism sector, integrating AI for itinerary generation, safety insights, and real‑time data. Built with a multidisciplinary team.',
    imagen: 'https://placehold.co/600x400/1D4ED8/FFFFFF?text=Sphero+robot', 
  },
  {
    titulo: 'Medical administration system for hospitals',
    descripcion: 'Secure verification and identity system developed using Java and Spring Boot, integrating Gmail services and ticket‑reset workflows.',
    imagen: 'https://placehold.co/600x400/4F46E5/FFFFFF?text=medical+administration',
  },
  {
    titulo: 'Movill administration app for english academy',
    descripcion: 'Collaborated with environmental engineers to design data‑driven tools for responsible and sustainable tourism in sensitive areas of Ecuador.',
    imagen: 'https://placehold.co/600x400/6D28D9/FFFFFF?text=Academy+administration',
  },
];

const CardProyecto = ({ titulo, descripcion, imagen }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg my-4 transition duration-300 hover:shadow-xl hover:scale-[1.02] ease-in-out">
    <img
      src={imagen}
      alt={`Vista previa de ${titulo}`}
      className="w-full h-48 object-cover rounded-xl mb-3 bg-gray-200"
      // Manejo de error simple para la imagen (aunque aquí usamos placeholders)
      onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/9CA3AF/FFFFFF?text=No+Image"; }}
    />
    <h3 className="text-xl font-bold text-indigo-700 mb-1">{titulo}</h3>
    <p className="text-gray-700 text-sm">{descripcion}</p>
  </div>
);

// --- Navbar Fijo (Nuevo Componente) ---
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Clase para el enlace (scroll suave con hash)
  const linkClass = "text-gray-700 hover:text-indigo-600 transition duration-150 font-medium block md:inline-block py-2";

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-xl z-50">
      <div className="max-w-4xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo/Nombre */}
        <div className="text-2xl font-extrabold text-indigo-600 tracking-wider">
          C.J. Portfolio
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#cursos" className={linkClass}>Cursos y Certs</a>
          <a href="#tecnologias" className={linkClass}>Tecnologías</a>
          <a href="#proyectos" className={linkClass}>Proyectos</a>
          <a href="#contactos" className={linkClass}>Contacto</a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 hover:text-indigo-600 p-2 rounded"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* Icono de menú (Hamburguer/Close) */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-inner pb-2 border-t border-gray-100">
          <a href="#cursos" className={`${linkClass} px-4`} onClick={() => setIsOpen(false)}>Cursos y Certs</a>
          <a href="#tecnologias" className={`${linkClass} px-4`} onClick={() => setIsOpen(false)}>Tecnologías</a>
          <a href="#proyectos" className={`${linkClass} px-4`} onClick={() => setIsOpen(false)}>Proyectos</a>
          <a href="#contactos" className={`${linkClass} px-4`} onClick={() => setIsOpen(false)}>Contacto</a>
        </div>
      )}
      {/* Estilo para scroll suave (CSS puro, mejor que JS para esta simpleza) */}
      <style>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </nav>
  );
};


// --- Componente Principal (Page_main renombrado a App) ---

const Page_main = () => {
  return (
    // Agregamos pt-20 para compensar la altura del Navbar fijo
    <div className="bg-gray-200 min-h-screen text-gray-900 font-sans antialiased pt-20">
      
      <Navbar /> {/* Nuevo Navbar Fijo */}

      {/* HEADER (Se mantiene, pero ahora el pt-20 compensa el navbar) */}
      <header className="py-8 px-4 text-center max-w-3xl mx-auto">
        <img
          src={miFoto}
          alt="Cristian Jimenez"
          className="w-35 h-35 rounded-full object-cover mx-auto mb-5 bg-gray-300 shadow-md ring-4 ring-indigo-300"
        />
        <h1 className="text-4xl font-extrabold text-indigo-600 mb-2">
          Cristian Jimenez
        </h1>
        <p className="text-xl text-gray-600 mb-6">
          Computer science Student · AI & Data Enthusiast 
        </p>
        <p className="text-gray-700 max-w-xl mx-auto">
          I design software, build intelligent systems, and work on projects that combine technology with real-world impact. Passionate about AI, scientific computing, and global collaboration.
        </p>
      </header>

      {/* SECTIONS CONTAINER */}
      <main className="max-w-4xl mx-auto px-4 pb-16">
        
        {/* ABOUT ME (No tiene ID en el navbar) */}
        <section className="pt-8 mb-12">
          <h2 className="text-3xl font-bold border-l-4 border-indigo-500 pl-4 mb-6">
            About Me
          </h2>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <p className="mb-4">
              I am an Ecuadorian software engineering student focused on building meaningful technological solutions. I have experience leading multidisciplinary tech teams, integrating AI into real applications, developing backend services, and designing modern digital experiences.
            </p>
            <p>
              My long-term goal is to contribute to scientific and technological research at an international level, especially in areas such as data-intensive computing, AI-driven systems, and innovation for global communities.
            </p>
          </div>
        </section>

        {/* NUEVA SECCIÓN: CURSOS Y CERTIFICACIONES */}
        <section id="cursos" className="pt-8 mb-12">
          <h2 className="text-3xl font-bold border-l-4 border-indigo-500 pl-4 mb-6">
            Cursos y Certificaciones
          </h2>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <ul className="space-y-4">
              {datosCursos.map((curso, index) => (
                <li key={index} className="flex justify-between items-start border-b pb-2 last:border-b-0">
                  <div>
                    <p className="font-semibold text-gray-800">{curso.nombre}</p>
                    <p className="text-sm text-gray-600">Emisor: {curso.emisor}</p>
                  </div>
                  <span className="bg-indigo-100 text-indigo-700 text-xs font-semibold px-2.5 py-0.5 rounded-full">{curso.anio}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* NUEVA SECCIÓN: TECNOLOGÍAS CONOCIDAS */}
        <section id="tecnologias" className="pt-8 mb-12">
          <h2 className="text-3xl font-bold border-l-4 border-indigo-500 pl-4 mb-6">
            Tecnologías Conocidas
          </h2>
          <div className="bg-white p-6 rounded-xl shadow-lg grid grid-cols-2 md:grid-cols-4 gap-6">
            {Object.entries(datosTecnologias).map(([category, list]) => (
              <div key={category}>
                <h3 className="font-bold text-indigo-700 mb-2 border-b border-indigo-200 pb-1">{category}</h3>
                <ul className="text-sm space-y-1">
                  {list.map((tech, i) => (
                    <li key={i} className="text-gray-700 flex items-center">
                       <svg className="w-3 h-3 text-indigo-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                         <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                       </svg>
                       {tech}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>


        {/* KEY PROJECTS (ID añadido) */}
        <section id="proyectos" className="pt-8 mb-12">
          <h2 className="text-3xl font-bold border-l-4 border-indigo-500 pl-4 mb-6">
            Proyectos Clave
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {proyectos.map((p, index) => (
              <CardProyecto key={index} {...p} />
            ))}
          </div>
        </section>

        {/* CONTACT (ID añadido) */}
        <section id="contactos" className="pt-8 mb-12">
          <h2 className="text-3xl font-bold border-l-4 border-indigo-500 pl-4 mb-6">
            Contact
          </h2>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <p className="mb-4 text-gray-700">If you'd like to reach out or collaborate, feel free to contact me:</p>
            <p className="mb-2">Email: <a href="mailto:cmjimenez21@utpl.edu.ec" className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26c.8.53 1.2.8 2.3 0L21 8m-2 10a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h10a2 2 0 012 2v10z"></path></svg>
                cmjimenez21@utpl.edu.ec
            </a></p>
            <p className="mb-2">GitHub: <a href="https://github.com/CristianJ23" className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.6.111.815-.26.815-.572 0-.281-.01-1.03-.015-2.021-3.339.723-4.04-1.609-4.04-1.609-.546-1.387-1.334-1.756-1.334-1.756-1.087-.745.084-.729.084-.729 1.205.084 1.838 1.237 1.838 1.237 1.07 1.835 2.809 1.305 3.495.998.108-.775.419-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.383 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.046.138 3.003.404 2.293-1.552 3.3-1.23 3.3-1.23.653 1.652.241 2.873.118 3.176.77.838 1.233 1.911 1.233 3.221 0 4.609-2.806 5.626-5.474 5.924.43.37.818 1.11.818 2.247 0 1.605-.015 2.898-.015 3.297 0 .315.216.696.823.571C20.562 21.82 24 17.322 24 12c0-6.627-5.373-12-12-12z"/></svg>
                https://github.com/CristianJ23
            </a></p>
            <p>LinkedIn: <a href="www.linkedin.com/in/kriss-kriss" className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M22.23 0H1.77C.79 0 0 .78 0 1.74v20.52C0 23.22.79 24 1.77 24h20.46c.98 0 1.77-.78 1.77-1.74V1.74C24 .78 23.21 0 22.23 0zM7.17 20.46H3.59V8.42h3.58v12.04zM5.38 6.84c-1.16 0-1.92-.78-1.92-1.75s.76-1.76 1.92-1.76c1.16 0 1.92.79 1.92 1.76s-.76 1.75-1.92 1.75zM20.46 20.46h-3.58v-6.28c0-1.5-.54-2.52-1.88-2.52-1.02 0-1.63.7-1.9 1.38-.1.25-.13.59-.13.93v6.52H9.39s.05-10.9.0-12.04h3.58v1.54c.48-.73 1.35-1.77 3.22-1.77 2.34 0 4.1 1.54 4.1 4.87v7.39z"/></svg>
                www.linkedin.com/in/kriss-kriss
            </a></p>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="text-center py-12 px-4 text-gray-500 text-sm border-t border-gray-300">
        © 2025 Cristian Jiménez — All Rights Reserved
      </footer>

    </div>
  );
};

export default Page_main;