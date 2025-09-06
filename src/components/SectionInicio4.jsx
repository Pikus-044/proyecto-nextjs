"use client";

import React from "react";

const SectionInicio4 = () => {
  return (
    <div className="relative w-full h-auto">
      {/* Imagen de fondo */}
      <img
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/img/SectionInicio3img1.jpg"
        alt="Fondo"
      />

      {/* Capa blanca semitransparente */}
      <div className="absolute inset-0 bg-white/70 z-10"></div>

      {/* Contenido */}
      <div className="relative z-20 container mx-auto px-[50px] py-[100px]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[50px] text-center">
          {/* Columna 1: Título */}
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-[36px] font-bold text-[#080f53]">
              ¿Qué nos hace especiales?
            </h2>
          </div>

          {/* Columna 2: Primeros dos textos */}
          <div className="flex flex-col items-start">
            <div className="mb-[30px]">
              <h3 className="text-[20px] font-bold text-[#080f53] mb-[10px]">
                Conocimiento del territorio:
              </h3>
              <p className="text-[16px] text-[#080f53]">
                Por ello, disminuimos los riesgos del proceso de importación y exportación.
              </p>
            </div>
            <div>
              <h3 className="text-[20px] font-bold text-[#080f53] mb-[10px]">
                Know How:
              </h3>
              <p className="text-[16px] text-[#080f53]">
                Tenemos habilidades y conocimientos técnicos, operativos, estratégicos y experiencia adquiridas a lo largo del tiempo y que la ponemos a su disposición.
              </p>
            </div>
          </div>

          {/* Columna 3: Últimos dos textos */}
          <div className="flex flex-col items-start">
            <div className="mb-[30px]">
              <h3 className="text-[20px] font-bold text-[#080f53] mb-[10px]">
                Reconocimiento:
              </h3>
              <p className="text-[16px] text-[#080f53]">
                Por entidades gubernamentales, asociaciones de cámaras de comercio y gremiales tanto nacionales e internacionales en comercio exterior sobre nuestro profesionalismo y transparencia.
              </p>
            </div>
            <div>
              <h3 className="text-[20px] font-bold text-[#080f53] mb-[10px]">
                Brindar Soluciones:
              </h3>
              <p className="text-[16px] text-[#080f53]">
                A sus nuevas ideas y proyectos siempre amparados por las legislaciones y normas técnicas vigentes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionInicio4;