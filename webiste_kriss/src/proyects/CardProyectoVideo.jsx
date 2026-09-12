import React, { useState, useEffect } from 'react';

// Helper para extraer el ID de YouTube (acepta ID directo de 11 caracteres o enlaces completos)
const extraerYouTubeId = (urlOrId) => {
  if (!urlOrId) return null;
  const str = String(urlOrId).trim();
  if (/^[a-zA-Z0-9_-]{11}$/.test(str)) return str;
  const match = str.match(
    /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/
  );
  return match ? match[1] : null;
};

// Helper para resolver rutas de video locales respetando la ruta base de GitHub Pages
const resolverVideoLocal = (url) => {
  if (!url) return null;
  if (url.startsWith('http://') || url.startsWith('https://')) return url;
  const base = import.meta.env.BASE_URL || '/';
  const cleanUrl = url.startsWith('/') ? url.slice(1) : url;
  return `${base}${cleanUrl}`;
};

const CardProyectoVideo = ({
  titulo,
  descripcion,
  videoId,
  videoUrl,
  thumbnail,
  caracteristicas = [],
  links = [],
  tags = [],
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const ytId = extraerYouTubeId(videoId || videoUrl);
  const resolvedVideoUrl = !ytId ? resolverVideoLocal(videoUrl) : null;

  // Miniatura inicial (thumbnail personalizado o maxresdefault de YouTube)
  const [imgSrc, setImgSrc] = useState(
    thumbnail || (ytId ? `https://img.youtube.com/vi/${ytId}/maxresdefault.jpg` : null)
  );

  // Si maxresdefault no está disponible en YouTube, hace fallback a hqdefault
  const handleImageError = () => {
    if (ytId && imgSrc?.includes('maxresdefault.jpg')) {
      setImgSrc(`https://img.youtube.com/vi/${ytId}/hqdefault.jpg`);
    }
  };

  // Bloqueo de scroll en el body cuando el modal está abierto y cierre con ESC
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') setIsModalOpen(false);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = 'unset';
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isModalOpen]);

  return (
    <>
      {/* TARJETA DEL PROYECTO */}
      <div className="bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 flex flex-col h-full overflow-hidden transition-all duration-300 group hover:-translate-y-1">
        {/* Contenedor de la vista previa con botón Play */}
        <div
          onClick={() => setIsModalOpen(true)}
          className="relative w-full aspect-video bg-gray-900 overflow-hidden cursor-pointer group/thumb select-none"
        >
          {imgSrc ? (
            <img
              src={imgSrc}
              alt={titulo}
              onError={handleImageError}
              className="w-full h-full object-cover transition-transform duration-500 group-hover/thumb:scale-105"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-indigo-950 via-gray-900 to-black p-4 text-center">
              <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 mb-2">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <span className="text-white/80 text-xs font-medium">Ver video demo</span>
            </div>
          )}

          {/* Degradado para dar contraste cinematográfico */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent transition-opacity duration-300 group-hover/thumb:opacity-90" />

          {/* Botón Central de Play */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative flex items-center justify-center">
              <span className="absolute w-16 h-16 rounded-full bg-indigo-500/40 animate-ping opacity-75 pointer-events-none" />
              <button
                type="button"
                className="relative w-14 h-14 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white flex items-center justify-center shadow-xl shadow-indigo-600/50 transform group-hover/thumb:scale-110 transition-all duration-300 ring-4 ring-white/30 cursor-pointer"
                aria-label="Reproducir video en grande"
              >
                <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Badge inferior: Indicador de Pantalla Grande */}
          <div className="absolute bottom-2.5 right-2.5 bg-black/75 backdrop-blur-sm text-white/90 text-[11px] font-medium px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-md">
            <svg className="w-3.5 h-3.5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
            <span>Reproducir en grande</span>
          </div>
        </div>

        {/* CONTENIDO Y DESCRIPCIÓN DEBAJO DEL VIDEO */}
        <div className="p-6 flex flex-col flex-grow">
          {/* Tags de Tecnologías */}
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-3">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-0.5 bg-indigo-50 text-indigo-700 text-[11px] font-bold rounded-md uppercase tracking-wider border border-indigo-100/70"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Título del Proyecto */}
          <h3
            onClick={() => setIsModalOpen(true)}
            className="text-xl font-bold text-gray-800 mb-2 leading-snug group-hover:text-indigo-600 transition-colors cursor-pointer"
          >
            {titulo}
          </h3>

          {/* Descripción llamativa */}
          <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
            {descripcion}
          </p>

          {/* Puntos destacados opcionales */}
          {caracteristicas && caracteristicas.length > 0 && (
            <div className="mb-4 pt-3 border-t border-gray-100 space-y-1">
              {caracteristicas.map((item, idx) => (
                <div key={idx} className="flex items-start text-xs text-gray-600 gap-2">
                  <span className="text-indigo-500 font-bold leading-none mt-0.5">✦</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          )}

          {/* Footer con botones de acción y repositorios */}
          <div className="mt-auto pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:text-indigo-800 bg-indigo-50 hover:bg-indigo-100 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              Ver Video
            </button>

            <div className="flex flex-wrap gap-2">
              {links.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-gray-700 hover:text-indigo-600 flex items-center gap-1.5 bg-gray-50 hover:bg-gray-100 px-2.5 py-1.5 rounded-lg border border-gray-200/70 transition-all hover:border-indigo-300"
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.6.111.815-.26.815-.572 0-.281-.01-1.03-.015-2.021-3.339.723-4.04-1.609-4.04-1.609-.546-1.387-1.334-1.756-1.334-1.756-1.087-.745.084-.729.084-.729 1.205.084 1.838 1.237 1.838 1.237 1.07 1.835 2.809 1.305 3.495.998.108-.775.419-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.383 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.046.138 3.003.404 2.293-1.552 3.3-1.23 3.3-1.23.653 1.652.241 2.873.118 3.176.77.838 1.233 1.911 1.233 3.221 0 4.609-2.806 5.626-5.474 5.924.43.37.818 1.11.818 2.247 0 1.605-.015 2.898-.015 3.297 0 .315.216.696.823.571C20.562 21.82 24 17.322 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* MODAL LIGHTBOX EN PANTALLA GRANDE */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8 bg-black/85 backdrop-blur-md transition-opacity duration-300"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[92vh] overflow-hidden flex flex-col border border-gray-100"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón Cerrar */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 z-40 bg-black/70 hover:bg-black text-white rounded-full p-2 backdrop-blur-sm transition-all hover:scale-110 cursor-pointer flex items-center gap-1.5 shadow-lg"
              aria-label="Cerrar modal"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
              <span className="text-[10px] font-bold pr-1 text-gray-300 hidden sm:inline">ESC</span>
            </button>

            {/* Video Player en Pantalla Grande (16:9) */}
            <div className="relative w-full aspect-video bg-black flex-shrink-0">
              {ytId ? (
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube-nocookie.com/embed/${ytId}?autoplay=1&rel=0&modestbranding=1`}
                  title={titulo}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : resolvedVideoUrl ? (
                <video
                  className="w-full h-full object-contain"
                  src={resolvedVideoUrl}
                  controls
                  autoPlay
                  playsInline
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-white text-sm">
                  Video no disponible
                </div>
              )}
            </div>

            {/* Descripción Detallada y Llamativa dentro del Modal */}
            <div className="p-6 md:p-8 overflow-y-auto bg-white flex flex-col">
              {/* Badges */}
              {tags && tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-3">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-bold rounded-full uppercase tracking-wider border border-indigo-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Título */}
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3 tracking-tight">
                {titulo}
              </h2>

              {/* Descripción */}
              <p className="text-gray-700 text-base leading-relaxed mb-6">
                {descripcion}
              </p>

              {/* Características Clave Destacadas */}
              {caracteristicas && caracteristicas.length > 0 && (
                <div className="mb-6 bg-gradient-to-r from-indigo-50/70 to-purple-50/50 rounded-2xl p-4 border border-indigo-100/80">
                  <h4 className="text-xs font-extrabold uppercase text-indigo-900 tracking-wider mb-2.5">
                    Aspectos Destacados del Proyecto
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {caracteristicas.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-700 font-medium">
                        <span className="text-indigo-600 font-bold">✓</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Botones de acción del Modal */}
              <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4 mt-auto">
                <div className="flex flex-wrap gap-3">
                  {links.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold bg-indigo-600 hover:bg-indigo-700 text-white transition-all shadow-md hover:shadow-indigo-500/20"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.6.111.815-.26.815-.572 0-.281-.01-1.03-.015-2.021-3.339.723-4.04-1.609-4.04-1.609-.546-1.387-1.334-1.756-1.334-1.756-1.087-.745.084-.729.084-.729 1.205.084 1.838 1.237 1.838 1.237 1.07 1.835 2.809 1.305 3.495.998.108-.775.419-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.383 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.046.138 3.003.404 2.293-1.552 3.3-1.23 3.3-1.23.653 1.652.241 2.873.118 3.176.77.838 1.233 1.911 1.233 3.221 0 4.609-2.806 5.626-5.474 5.924.43.37.818 1.11.818 2.247 0 1.605-.015 2.898-.015 3.297 0 .315.216.696.823.571C20.562 21.82 24 17.322 24 12c0-6.627-5.373-12-12-12z" />
                      </svg>
                      {link.label}
                    </a>
                  ))}
                </div>

                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-xs text-gray-500 hover:text-gray-800 font-semibold cursor-pointer px-3 py-2"
                >
                  Cerrar vista previa
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CardProyectoVideo;