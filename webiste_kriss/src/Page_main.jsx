// src/App.jsx
import React from 'react';
import PanelCursos from './PanelCursos';
import './index.css'; // Asegura que los estilos de Tailwind se importen
import miFoto from './assets/me_curriculum.jpg'; // Ajusta la ruta si es necesario

// Definiciones de datos para proyectos (buenas prácticas de React)
const proyectos = [
  {
    titulo: 'AI-Driven Tourism Assistant',
    descripcion: 'Virtual assistant designed for Ecuador’s tourism sector, integrating AI for itinerary generation, safety insights, and real‑time data. Built with a multidisciplinary team.',
    imagen: 'project-placeholder-1.jpg', // Reemplazar con URL real
  },
  {
    titulo: 'User Authentication System',
    descripcion: 'Secure verification and identity system developed using Java and Spring Boot, integrating Gmail services and ticket‑reset workflows.',
    imagen: 'project-placeholder-2.jpg',
  },
  {
    titulo: 'Environmental Monitoring Tools',
    descripcion: 'Collaborated with environmental engineers to design data‑driven tools for responsible and sustainable tourism in sensitive areas of Ecuador.',
    imagen: 'project-placeholder-3.jpg',
  },
];

// Componente para una tarjeta de proyecto reutilizable
const CardProyecto = ({ titulo, descripcion, imagen }) => (
  <div className="bg-gray-50 p-6 rounded-xl shadow-lg my-4 transition duration-300 hover:shadow-xl">
    <img
      src={imagen}
      alt={`Vista previa de ${titulo}`}
      className="w-full h-48 object-cover rounded-xl mb-3 bg-gray-200"
    />
    <h3 className="text-xl font-bold text-indigo-700 mb-1">{titulo}</h3>
    <p className="text-gray-700">{descripcion}</p>
  </div>
);


const Page_main = () => {
  // Las variables CSS se manejan con Tailwind:
  // --bg: #e6e6e6  -> bg-gray-200
  // --text: #111   -> text-gray-900
  // --accent: #4F46E5 -> text-indigo-600 / bg-indigo-600
  
  return (
    <div className="bg-gray-200 min-h-screen text-gray-900 font-sans antialiased">
      
      {/* HEADER */}
      <header className="py-12 px-4 text-center max-w-3xl mx-auto">
        <img
          src={miFoto}
          alt="Cristian Jimenez"
          className="w-32 h-32 rounded-full object-cover mx-auto mb-5 bg-gray-300 shadow-md"
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
        
        {/* ABOUT ME */}
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

        {/* KEY PROJECTS */}
        <section className="pt-8 mb-12">
          <h2 className="text-3xl font-bold border-l-4 border-indigo-500 pl-4 mb-6">
            Key Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {proyectos.map((p, index) => (
              <CardProyecto key={index} {...p} />
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section className="pt-8 mb-12">
          <h2 className="text-3xl font-bold border-l-4 border-indigo-500 pl-4 mb-6">
            Contact
          </h2>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <p className="mb-4">If you'd like to reach out or collaborate, feel free to contact me:</p>
            <p className="mb-2">Email: <a href="mailto:cmjimenez21@utpl.edu.ec" className="text-indigo-600 hover:text-indigo-800 font-medium">cmjimenez21@utpl.edu.ec</a></p>
            <p className="mb-2">GitHub: <a href="#" className="text-indigo-600 hover:text-indigo-800 font-medium">https://github.com/CristianJ23</a></p>
            <p>LinkedIn: <a href="#" className="text-indigo-600 hover:text-indigo-800 font-medium">www.linkedin.com/in/kriss-kriss</a></p>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="text-center py-12 px-4 text-gray-500 text-sm border-t border-gray-300">
        © 2025 Christian Jimenez — All Rights Reserved
      </footer>

      {/* SLIDING PANEL (Componente de lógica y UI) */}
      <PanelCursos />
      
    </div>
  );
};

export default Page_main;