"use client";

import React from "react";

const SectionNosotros1 = () => {
  return (
    <div className="w-full bg-white px-[50px] py-[100px]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-[px] items-center">
        {/* Columna izquierda: Títulos */}
        <div className="flex flex-col justify-end ml-[100px]">
          <h3 className="text-[21px] text-[#000047] font-bold mb-[10px]">
            ¿Quiénes Somos?
          </h3>
          <h1 className="text-[50px] font-bold text-[#222222] leading-[1.2]">
            Su agente de aduanas de confianza
          </h1>
        </div>

        {/* Columna central: Imagen */}
        <div className="flex justify-center items-center">
          <img
            className="w-full h-[419px] max-w-[262px] shadow-lg"
            src="/img/SectionNosotros1.webp"
            alt="Puerto"
          />
        </div>

        {/* Columna derecha: Párrafos largos */}
        <div className="flex flex-col justify-center">
          <p className="text-[18px] text-[#7a7a7a] mb-[24px] leading-[1.8]">
            Somos Agentes de Aduana con más de 45 años de experiencia dedicados
            a brindar a nuestros clientes asistencia técnica especializada y
            personalizada para gestionar todos los trámites aduaneros de
            importación y exportación de acuerdo con las normativas vigentes,
            así mismo, acompañamos en la estrategia logística de proyectos para
            garantizar que las cargas lleguen a su destino con las mejores
            condiciones de seguridad, tiempo y costo.
          </p>
          <p className="text-[18px] text-[#7a7a7a] leading-[1.8]">
            Contamos con oficinas en Caracas y Maiquetía y con un equipo de
            profesionales con conocimiento y experiencia que brindan asesorías
            especializadas y personalizadas a todos los sectores, por mencionar
            algunos: Ferretero, Alimentos, Textiles; y principalmente a la
            industria Farmacéutica, Humana, Veterinaria y de Agroquímicos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionNosotros1;