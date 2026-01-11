import React, { useState } from "react";
import Tecnologias from "./tecnologias_conocidas/tecnologias";
import CardProyectoVideo from "./proyects/CardProyectoVideo";
import miFoto from "./assets/me_curriculum.jpg";
import certificate_phawai from "./assets/certificate_phawai.png";
import aceptacion_sala from "./assets/aceptacion_sala.png";
import chep from "./assets/chep_segundo_lugar.png";

// --- Componentes de Datos y UI Reutilizables ---

// Datos de ejemplo para las secciones
const datosCursos = [
  {
    nombre:
      "Becario Workshop Internacional Phawai + Tarecda: Investigación en inteligencia artificial -- Segundo lugar",
    emisor: "Phawai & Tarecda",
    anio: 2025,
    link: certificate_phawai,
    imagen: certificate_phawai, // Logo o captura
  },
  {
    nombre: "Participante Seleccionado - SALA 2026",
    emisor: "SALA - Summit of AI in Latin America",
    anio: 2026,
    link: aceptacion_sala,
    imagen: aceptacion_sala, // Logo o captura
  },
    {
    nombre: "Segundo lugar - reto internacional de sostenibilidad para escuela Europea",
    emisor: "Esscuela Europea de sostenibilidad",
    anio: 2025,
    link: "https://universidadeuropea.com/resources/media/documents/ACTA_JURADO_FASE_1_RETO_SOSTENIBILIDAD.pdf",
    imagen: chep, // Logo o captura
  },
  // ... agrega los demás
];

const proyectos = [
  {
    titulo: "Sistema de administracion medica",
    tags: ["Node", "React", "Mysql"],
    descripcion:
      "Proyecto para la gestion hospitalaria full-stack. Incluye autenticacion JWT. Arquitectura cliente servidor.",
    videoId: "jvm6DpqqbLk", // Solo el ID del video
    links: [
      {
        label: "enlace a Github",
        url: "https://github.com/CristianJ23/prototipo_clinicaHospital_SanJose",
      },
      // { label: "Backend API", url: "https://github.com/CristianJ23/repo-back" },
      // { label: "Design", url: "https://figma.com/..." },
    ],
  },
  {
    titulo: "Sistema de administracion estudiantil a la medida",
    tags: ["Fluter", "Firebase"],
    descripcion:
      "Proyecto para la gestion estudiantil creado a la medida para academia de ingles de Loja",
    videoId: "jvm6DpqqbLk", // Solo el ID del video
    links: [
      {
        label: "enlace a Github",
        url: "https://github.com/CristianJ23/fine-tuned-english",
      },
      // { label: "Backend API", url: "https://github.com/CristianJ23/repo-back" },
      // { label: "Design", url: "https://figma.com/..." },
    ],
  },
  {
    titulo: "Sistema de control remoto para sphero mini",
    tags: ["Python", "Javascript", "html", "css"],
    descripcion:
      "Proyecto para manejo remoto de robot sphero mini via web usando python.",
    videoId: "pojyX6XpNNA", // Solo el ID del video
    links: [
      {
        label: "enlace a Github",
        url: "https://github.com/CristianJ23/rimoto_sphero_minih",
      },
      // { label: "Backend API", url: "https://github.com/CristianJ23/repo-back" },
      // { label: "Design", url: "https://figma.com/..." },
    ],
  },
];

// --- Navbar Fijo (Nuevo Componente) ---
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Clase para el enlace (scroll suave con hash)
  const linkClass =
    "text-gray-700 hover:text-indigo-600 transition duration-150 font-medium block md:inline-block py-2";

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-xl z-50">
      <div className="max-w-4xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo/Nombre */}
        <div className="text-2xl font-extrabold text-indigo-600 tracking-wider">
          C.J. Portfolio
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#cursos" className={linkClass}>
            Cursos y Certs
          </a>
          <a href="#tecnologias" className={linkClass}>
            Tecnologías
          </a>
          <a href="#proyectos" className={linkClass}>
            Proyectos
          </a>
          <a href="#contactos" className={linkClass}>
            Contacto
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 hover:text-indigo-600 p-2 rounded"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* Icono de menú (Hamburguer/Close) */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-inner pb-2 border-t border-gray-100">
          <a
            href="#cursos"
            className={`${linkClass} px-4`}
            onClick={() => setIsOpen(false)}
          >
            Cursos y Certs
          </a>
          <a
            href="#tecnologias"
            className={`${linkClass} px-4`}
            onClick={() => setIsOpen(false)}
          >
            Tecnologías
          </a>
          <a
            href="#proyectos"
            className={`${linkClass} px-4`}
            onClick={() => setIsOpen(false)}
          >
            Proyectos
          </a>
          <a
            href="#contactos"
            className={`${linkClass} px-4`}
            onClick={() => setIsOpen(false)}
          >
            Contacto
          </a>
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
          className="w-45 h-45 rounded-full object-cover mx-auto mb-5 bg-gray-300 shadow-md ring-4 ring-indigo-300"
        />
        <h1 className="text-4xl font-extrabold text-indigo-600 mb-2">
          Cristian Jimenez
        </h1>
        <p className="text-xl text-gray-600 mb-6">
          Computer science Student · AI & Data Enthusiast
        </p>
        <p className="text-gray-700 max-w-xl mx-auto">
          I design software, build intelligent systems, and work on projects
          that combine technology with real-world impact. Passionate about AI,
          scientific computing, and global collaboration.
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
              I am an Ecuadorian software engineering student focused on
              building meaningful technological solutions. I have experience
              leading multidisciplinary tech teams, integrating AI into real
              applications, developing backend services, and designing modern
              digital experiences.
            </p>
            <p>
              My long-term goal is to contribute to scientific and technological
              research at an international level, especially in areas such as
              data-intensive computing, AI-driven systems, and innovation for
              global communities.
            </p>
          </div>
        </section>

        {/* NUEVA SECCIÓN: CURSOS Y CERTIFICACIONES */}
<section id="cursos" className="pt-8 mb-12">
  <h2 className="text-3xl font-bold border-l-4 border-indigo-500 pl-4 mb-6">
    Formación y Certificaciones
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {datosCursos.map((curso, index) => (
      <div
        key={index}
        className="group relative bg-white p-5 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300"
      >
        <div className="flex items-center gap-4">
          {/* Contenedor de la imagen con Zoom Gigante */}
          <div className="relative w-16 h-16 flex-shrink-0 z-10">
            <div className="w-16 h-16 bg-indigo-50 rounded-xl flex items-center justify-center overflow-hidden border border-indigo-100 transition-all duration-500 group-hover:scale-[4] group-hover:shadow-2xl group-hover:z-50 group-hover:absolute group-hover:top-0 group-hover:left-0 bg-white">
              <img
                src={curso.imagen}
                alt={curso.nombre}
                className="w-full h-full object-contain p-1"
              />
            </div>
          </div>

          {/* Texto que se vuelve opaco cuando el zoom ocurre para no estorbar */}
          <div className="flex-1 transition-opacity duration-300 group-hover:opacity-20">
            <h3 className="font-bold text-gray-800 leading-tight">
              {curso.nombre}
            </h3>
            <p className="text-sm text-gray-500">
              {curso.emisor} • {curso.anio}
            </p>
          </div>
        </div>

        {/* Botón de enlace */}
        <div className="mt-4 flex justify-end transition-opacity duration-300 group-hover:opacity-10">
          <a
            href={curso.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-indigo-600 flex items-center gap-1"
          >
            VER CREDENCIAL →
          </a>
        </div>
      </div>
    ))}
  </div>
</section>

                {/* Botón "Conoce más" que aparece al pasar el mouse */}
                <div className="mt-4 flex justify-end">
                  <a
                    href={curso.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 group-hover:translate-x-[-5px] transition-transform"
                  >
                    See more
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* NUEVA SECCIÓN: TECNOLOGÍAS CONOCIDAS */}
        <div id="tecnologias" className="pt-8 mb-12">
          <h2 className="text-3xl font-bold border-l-4 border-indigo-500 pl-4 mb-6">
            known technologies
          </h2>
          <Tecnologias />
        </div>

        {/* KEY PROJECTS (ID añadido) */}
        <section id="proyectos" className="pt-8 mb-12">
          <h2 className="text-3xl font-bold border-l-4 border-indigo-500 pl-4 mb-6">
            developed proyects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {proyectos.map((proyecto, index) => (
              <CardProyectoVideo
                key={index}
                titulo={proyecto.titulo}
                descripcion={proyecto.descripcion}
                videoId={proyecto.videoId}
                links={proyecto.links}
                tags={proyecto.tags}
              />
            ))}

            {/* {proyectos.map((p, index) => (
              <CardProyecto key={index} {...p} />
            ))} */}
          </div>
        </section>

        {/* CONTACT (ID añadido) */}
        <section id="contactos" className="pt-8 mb-12">
          <h2 className="text-3xl font-bold border-l-4 border-indigo-500 pl-4 mb-6">
            Contact
          </h2>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <p className="mb-4 text-gray-700">
              If you'd like to reach out or collaborate, feel free to contact
              me:
            </p>
            <p className="mb-2">
              phone number:{" "}
              <a
                href="mailto:cmjimenez21@utpl.edu.ec"
                className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ color: "#25D366" }} // Color oficial de WhatsApp
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.658 1.43 5.63 1.43h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                + 593 960273271
              </a>
            </p>
            <p className="mb-2">
              Email:{" "}
              <a
                href="mailto:cmjimenez21@utpl.edu.ec"
                className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26c.8.53 1.2.8 2.3 0L21 8m-2 10a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h10a2 2 0 012 2v10z"
                  ></path>
                </svg>
                cmjimenez21@utpl.edu.ec
              </a>
            </p>
            <p className="mb-2">
              GitHub:{" "}
              <a
                href="https://github.com/CristianJ23"
                className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.6.111.815-.26.815-.572 0-.281-.01-1.03-.015-2.021-3.339.723-4.04-1.609-4.04-1.609-.546-1.387-1.334-1.756-1.334-1.756-1.087-.745.084-.729.084-.729 1.205.084 1.838 1.237 1.838 1.237 1.07 1.835 2.809 1.305 3.495.998.108-.775.419-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.383 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.046.138 3.003.404 2.293-1.552 3.3-1.23 3.3-1.23.653 1.652.241 2.873.118 3.176.77.838 1.233 1.911 1.233 3.221 0 4.609-2.806 5.626-5.474 5.924.43.37.818 1.11.818 2.247 0 1.605-.015 2.898-.015 3.297 0 .315.216.696.823.571C20.562 21.82 24 17.322 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
                https://github.com/CristianJ23
              </a>
            </p>
            <p>
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/kriss-kriss"
                className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.23 0H1.77C.79 0 0 .78 0 1.74v20.52C0 23.22.79 24 1.77 24h20.46c.98 0 1.77-.78 1.77-1.74V1.74C24 .78 23.21 0 22.23 0zM7.17 20.46H3.59V8.42h3.58v12.04zM5.38 6.84c-1.16 0-1.92-.78-1.92-1.75s.76-1.76 1.92-1.76c1.16 0 1.92.79 1.92 1.76s-.76 1.75-1.92 1.75zM20.46 20.46h-3.58v-6.28c0-1.5-.54-2.52-1.88-2.52-1.02 0-1.63.7-1.9 1.38-.1.25-.13.59-.13.93v6.52H9.39s.05-10.9.0-12.04h3.58v1.54c.48-.73 1.35-1.77 3.22-1.77 2.34 0 4.1 1.54 4.1 4.87v7.39z" />
                </svg>
                https://www.linkedin.com/in/kriss-kriss
              </a>
            </p>
            <p className="mb-2">
              Instagram:{" "}
              <a
                href="https://www.instagram.com/cristian_cj_jimenez" // Reemplaza con tu usuario real
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 hover:text-pink-800 font-medium flex items-center transition-colors"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                instagram.com/cristian_cj_jimenez
              </a>
            </p>
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
