"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Barra superior de info - fija y sin movimiento */}
      <div className="flex flex-col lg:flex-row bg-[#eff5fb] justify-center w-full items-center">
        <div className="flex flex-wrap gap-1 p-[13px] w-auto justify-center lg:justify-start max-w-7xl">
          {/* Oficinas, teléfonos y correo */}
          <div className="flex gap-1">
            {/* Icono */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="24"
              viewBox="0 0 24 24"
              fill="#8998c2"
            >
              <path
                fill="#8998c2"
                d="M13.839 13.84c-2.372 2.378-5.12 4.648-6.209 3.56c-1.557-1.56-2.517-2.913-5.951-.155s-.796 4.598.712 6.106c1.74 1.74 8.226.091 14.64-6.32s8.06-12.898 6.32-14.64c-1.512-1.505-3.347-4.139-6.105-.711s-1.403 4.39.153 5.946c1.088 1.094-1.182 3.841-3.56 6.214z"
              />
            </svg>
            <p className="text-black text-[14px] font-bold">
              Oficina de Caracas:
            </p>
            <p className="link text-blue-950 text-[14px] no-underline font-bold">
              +58 (0212) 571-3413 / 571-2908
            </p>
          </div>
          <div className="flex gap-1 ml-5">
            <p className="text-black text-[14px] font-bold">
              | Oficina en Maiquetía:
            </p>
            <p className="link text-blue-950 text-[14px] no-underline font-bold">
              +58 (0212) 331-1554 / 332-3028
            </p>
          </div>
          <div className="flex gap-1 ml-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="24"
              viewBox="0 0 432 384"
              fill="#8998c2"
            >
              <path
                fill="#8998c2"
                d="M384 21q18 0 30.5 12.5T427 64v256q0 18-12.5 30.5T384 363H43q-18 0-30.5-12.5T0 320V64q0-18 12.5-30.5T43 21h341zm0 86V64L213 171L43 64v43l170 106z"
              />
            </svg>
            <p className="link text-blue-950 text-[14px] no-underline font-bold">
              lagsaduana@lagsaduana.com
            </p>
          </div>
        </div>
      </div>

      {/* Navbar principal sticky con fade y cambio de fondo */}
      <div
        className={`w-full z-50 transition-all duration-700 ${
          scrolled ? "fixed top-0 left-0 shadow-lg" : "relative"
        }`}
        style={{
          backgroundColor: "white",
          backgroundImage: scrolled
            ? "none"
            : "linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0.8) 70%, rgba(255,255,255,0) 100%)",
          backdropFilter: "none",
        }}
      >
        <div className="navbar hidden lg:flex justify-center py-0 gap-[20px] max-w-7xl mx-auto">
          <a>
            <img src="/img/NavbarLogo.png" alt="Logo" className="w-auto h-12" />
          </a>
          <ul className="menu menu-horizontal text-blue-950 px-1 gap-[25px]">
            <Link href="/" className="text-[#26256c] text-[17px] font-bold">
              Inicio
            </Link>
            <Link
              href="/nosotros"
              className="text-[#26256c] text-[17px] font-bold"
            >
              Sobre Nosotros
            </Link>
            <Link
              href="/servicios"
              className="text-[#26256c] text-[17px] font-bold"
            >
              Servicios
            </Link>
            <Link
              href="/contacto"
              className="text-[#26256c] text-[17px] font-bold"
            >
              Contáctanos
            </Link>
          </ul>
          <div className="navbar-end w-auto justify-end">
            <a className="btn rounded-full text-white font-bold text-[18px] bg-blue-950 px-[60px]">
              ¡Asesórate!
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
