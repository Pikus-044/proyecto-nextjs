"use client";

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#000047] text-white py-[50px]">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-[50px] px-[50px]">
        {/* Columna 1: Logo y enlaces */}
        <div className="flex flex-col items-start">
          <img
            className="h-[50px] w-auto mb-[20px]"
            src="/img/FooterLogo.png"
            alt="LAGS Aduana Logo"
          />
          <ul className="space-y-[10px]">
            <li>
              <a href="/" className="text-sm hover:underline flex items-center text-[#8992c2]">
                <span className="mr-[10px] text-[#acacac]">•</span> Inicio
              </a>
            </li>
            <hr className="border-t border-white w-full" />
            <li>
              <a href="/nosotros" className="text-sm hover:underline flex items-center text-[#8992c2]">
                <span className="mr-[10px] text-[#acacac]">•</span> Sobre Nosotros
              </a>
            </li>
            <hr className="border-t border-white w-full" />
            <li>
              <a href="/servicios" className="text-sm hover:underline flex items-center text-[#8992c2]">
                <span className="mr-[10px] text-[#acacac]">•</span> Servicios
              </a>
            </li>
            <hr className="border-t border-white w-full" />
            <li>
              <a href="/contacto" className="text-sm hover:underline flex items-center text-[#8992c2]">
                <span className="mr-[10px] text-[#acacac]">•</span> Contáctanos
              </a>
            </li>
          </ul>
        </div>

        {/* Columna 2: Oficina principal */}
        <div className="flex flex-col items-start">
          <h3 className="text-lg font-bold mb-[10px]">Oficina Principal</h3>
          <p className="text-sm mb-[10px] text-[#cacaca]">
            Av. Sur 25, Edificio Casio, Local C, Planta Baja. Sector: La
            Candelaria.
          </p>
          <p className="text-sm text-[#cacaca]">
            (Frente al SENIAT Región Libertador).
          </p>
          <p className="text-sm text-[#cacaca]">
            Teléfono: +58 (0212) 571-3413 / 571-2908
          </p>
        </div>

        {/* Columna 3: Aduana La Guaira */}
        <div className="flex flex-col items-start">
          <h3 className="text-lg font-bold mb-[10px]">Aduana La Guaira:</h3>
          <p className="text-sm mb-[10px] text-[#cacaca]">
            Calle real de Pariata, Viaducto a Desvío, Edificio Residencias
            Vargas N° 64, Planta Baja.
          </p>
          <p className="text-sm text-[#cacaca]">
            Maiquetía, Estado La Guaira. (Lateral al Hospital San José)
          </p>
          <p className="text-sm text-[#cacaca]">
            Teléfono: +58 (0212) 331-1554 / 332-3028
          </p>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="text-center mt-[30px] text-sm border-t border-white pt-[20px]">
        © LAGS Aduana, C.A. - Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;