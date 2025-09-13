"use client";

import React, { useState } from "react";

const FlipCardSimple = ({ frontContent, backContent }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={`w-65 h-90 rounded-lg shadow-lg p-6 cursor-pointer flex items-center justify-center text-center transition-colors duration-300 ${
        isFlipped ? "bg-gray-700" : "bg-white"
      }`}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      {isFlipped ? (
        <div className="text-white flex items-center justify-center w-full h-full text-sm">
          {backContent}
        </div>
      ) : (
        <div className="font-bold text-lg w-full h-full flex flex-col items-center justify-center">
          {frontContent}
        </div>
      )}
    </div>
  );
};


const SectionInicio1 = () => {
  return (
    <div className="relative w-full h-[746px] flex flex-col items-center justify-center">
      {/* Banner de fondo */}
      <img
        className="h-full w-full object-cover opacity-75 absolute inset-0 z-0"
        src="/img/CardsBanner.jpg"
        alt="Banner fondo"
      />

      {/* Texto arriba de las cards */}
      <h2 className="relative z-10 text-center text-3xl font-bold mb-6 text-white pt-6">
        Razones para Elegirnos
      </h2>

      {/* Contenedor de cards */}
      <div className="relative z-10 flex gap-10 justify-center items-center ">
        <FlipCardSimple
          frontContent={<span className="text-[#000047] text-[29px]">
            <img decoding="async" className="h-[77px] w-[77px]" alt="" src="https://lagsaduana.com/wp-content/uploads/2023/11/crecer-1-1.png"></img>
            Experiencia</span>}
          backContent="Con más de 45 años de experiencia dedicados a brindar a nuestros clientes asistencia técnica especializada y personalizada para gestionar todos los trámites aduaneros de importación y exportación de acuerdo con la normatividad vigente."
        />
        <FlipCardSimple
          frontContent={<span className="text-[#000047] text-[29px]">
            <img decoding="async" className="h-[77px] w-[77px]" alt="" src="https://lagsaduana.com/wp-content/uploads/2023/11/empresario.png"></img>
            Profesionalismo</span>}
          backContent="El recurso humano de la Organización se ha nutrido con especialistas en el área técnica de comercio exterior tales como: Administradores de Empresas y Contables, Ciencias Fiscales con Mención Aduana, Técnicos Superiores en Aduanas, Capacitados Aduaneros prácticos en Operación y Administrativo entrenados con años de experiencia en su oficio."
        />
        <FlipCardSimple
          frontContent={<span className="text-[#000047] text-[29px]">
            <img decoding="async" className="h-[77px] w-[77px]" alt="" src="https://lagsaduana.com/wp-content/uploads/2023/11/objetivo.png"></img>
            Orientado a Resultados</span>}
          backContent="Nuestros clientes se encuentran respaldados en todas las fases del proceso de acompañamiento, confían en el éxito de los resultados y en el manejo eficiente que damos a cada proyecto que ejecutamos."
        />
        <FlipCardSimple
          frontContent={<span className="text-[#000047] text-[29px]">
            <img decoding="async" className="h-[77px] w-[77px]" alt="" src="https://lagsaduana.com/wp-content/uploads/2023/11/resultado.png"></img>
            Acompañamiento Personalizado</span>}
          backContent="Asistencia, Asesoría y acompañamiento cien por ciento personalizado, informamos permanentemente el estado de su carga, lo que ha garantizado una alta tasa de retención de clientes y la creación de relaciones sólidas a largo plazo."
        />
      </div>
    </div>
  );
};

export default SectionInicio1;
