"use client";

import React from "react";

const Banner = () => {
  return (
    <>
      <div className="container-fluid relative w-full h-[700px]">
        {/* Cuadro de contexto */}
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center bg-black/50 px-[23px] pt-[55px] pb-[33px]"
        >
          <h1 className="text-[55px] font-bold text-white mb-[40px]">
            ¿Importas o Exportas?
          </h1>
          <div className="w-[300px] h-[3px] bg-[#FFD700] mx-auto mb-[20px]"></div>
          <p className="text-[20px] text-white">
            Coloque su carga o proyectos en manos de LAGS
          </p>
          <p className="text-[20px] text-white">
            Su agente de aduanas de confianza
          </p>
        </div>

        {/* Imagen de fondo */}
        <img
          className="h-full w-full object-cover"
          src="./img/Banner.jpg"
          alt="Banner"
        />
      </div>
    </>
  );
};

export default Banner;