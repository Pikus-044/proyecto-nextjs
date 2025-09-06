"use client";

import React from "react";

const BannerServicios = () => {
  return (
    <div className="relative w-full h-[400px]">
      {/* Imagen de fondo */}
      <img
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/img/BannerServicios.jpg"
        alt="Servicios"
      />

      {/* Capa blanca semitransparente */}
      <div className="absolute inset-0 bg-white/60 z-10"></div>

      {/* Contenido */}
      <div className="relative z-20 flex flex-col left-[415px] justify-end h-full">
        <h1 className="text-[50px] font-bold text-[#000047]">Servicios</h1>
      </div>
    </div>
  );
};

export default BannerServicios;