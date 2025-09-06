"use client";

import React from "react";

const SectionContacto = () => {
  return (
    <div className="container-fluid px-[50px] py-[100px] bg-white flex items-center justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[50px] w-full max-w-[1200px]">
        {/* Columna izquierda: Información de contacto y mapa */}
        <div>
          <h2 className="text-[33px] font-bold text-[#343f5a] mb-[15px] text-center lg:text-left">
            Ponemos a su disposición nuestras dos oficinas
          </h2>
          <div className="space-y-[20px]">
            {/* Oficina principal */}
            <div className="flex items-start mb-[16.5px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 512 512"
                fill="#080f53"
                className="mr-[10px]"
              >
                <path
                  fill="#080f53"
                  d="M256 0C149.3 0 64 85.3 64 192c0 36.9 11 65.4 30.1 94.3l141.7 215c4.3 6.5 11.7 10.7 20.2 10.7s16-4.3 20.2-10.7l141.7-215C437 257.4 448 228.9 448 192C448 85.3 362.7 0 256 0zm0 298.6c-58.9 0-106.7-47.8-106.7-106.8S197.1 85 256 85c58.9 0 106.7 47.8 106.7 106.8S314.9 298.6 256 298.6z"
                />
              </svg>
              <p className="text-[18px] text-[#777777]">
                Av. Sur 25, Edificio Casio, Local C, Planta Baja. Sector: La
                Candelaria, Caracas Dto. Capital.
              </p>
            </div>
            <div className="flex items-start mb-[16.5px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 717 717"
                color="#080f53"
                className="mr-[10px]"
              >
                <path
                  fill="currentColor"
                  d="M0 179c0 30 11 63 25 98s32 68 46 93c38 66 87 131 143 185s122 99 196 126c43 17 86 36 134 36c24 0 58-9 89-22c30-13 57-33 67-57c4-9 9-21 12-35c3-13 5-26 5-35c0-5 0-10-1-11c-3-6-10-11-18-16c-18-9-21-12-48-28c-28-16-57-34-82-47c-12-7-20-10-23-10c-16 0-36 22-53 46c-18 24-38 46-52 46c-7 0-14-3-22-8s-16-9-21-12c-88-50-147-109-197-196c-6-10-20-31-20-42c0-13 18-28 36-44c17-15 35-33 35-55c0-3-2-12-6-25c-9-26-21-56-31-85c-5-14-9-24-10-29c-2-3-3-7-4-12s-3-9-4-13c-3-9-8-16-13-20c-5-2-17-5-29-6c-12 0-26-1-32-1c-3 0-7 0-11 1H98C66 15 43 43 26 76C10 109 0 146 0 179z"
                />
              </svg>
              <p className="text-[18px] text-[#777777]">
                +58 (0212) 571-3413 / 571-2908
              </p>
            </div>

            {/* Aduana La Guaira */}
            <div className="flex items-start mb-[16.5px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
                fill="#080f53"
                className="mr-[10px]"
              >
                <path
                  fill="#080f53"
                  d="M256 0C149.3 0 64 85.3 64 192c0 36.9 11 65.4 30.1 94.3l141.7 215c4.3 6.5 11.7 10.7 20.2 10.7s16-4.3 20.2-10.7l141.7-215C437 257.4 448 228.9 448 192C448 85.3 362.7 0 256 0zm0 298.6c-58.9 0-106.7-47.8-106.7-106.8S197.1 85 256 85c58.9 0 106.7 47.8 106.7 106.8S314.9 298.6 256 298.6z"
                />
              </svg>
              <p className="text-[18px] text-[#777777]">
                Calle real de Pariata, Viaducto a Desvío, Edificio Residencias
                Vargas N° 64, Planta Baja. Maiquetía, Estado La Guaira.
              </p>
            </div>
            <div className="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 717 717"
                color="#080f53"
                className="mr-[10px]"
              >
                <path
                  fill="currentColor"
                  d="M0 179c0 30 11 63 25 98s32 68 46 93c38 66 87 131 143 185s122 99 196 126c43 17 86 36 134 36c24 0 58-9 89-22c30-13 57-33 67-57c4-9 9-21 12-35c3-13 5-26 5-35c0-5 0-10-1-11c-3-6-10-11-18-16c-18-9-21-12-48-28c-28-16-57-34-82-47c-12-7-20-10-23-10c-16 0-36 22-53 46c-18 24-38 46-52 46c-7 0-14-3-22-8s-16-9-21-12c-88-50-147-109-197-196c-6-10-20-31-20-42c0-13 18-28 36-44c17-15 35-33 35-55c0-3-2-12-6-25c-9-26-21-56-31-85c-5-14-9-24-10-29c-2-3-3-7-4-12s-3-9-4-13c-3-9-8-16-13-20c-5-2-17-5-29-6c-12 0-26-1-32-1c-3 0-7 0-11 1H98C66 15 43 43 26 76C10 109 0 146 0 179z"
                />
              </svg>
              <p className="text-[18px] text-[#777777]">
                +58 (0212) 331-1554 / 332-3028
              </p>
            </div>
          </div>

          {/* Mapa */}
          <div className="mt-[30px]">
            <iframe
              className="w-full h-[300px] border"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3922.981895617189!2d-66.90307781460471!3d10.502091837473085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2a59c6cb3b3f71%3A0xbc4c08a710bc413e!2sLags%20aduana%20C.A!5e0!3m2!1ses!2sve!4v1700236437757!5m2!1ses!2sve"
              allowFullScreen=""
              loading="lazy"
              title="Mapa de LAGS Aduana"
            ></iframe>
          </div>
        </div>

        {/* Columna derecha: Formulario de contacto */}
        <div>
          <form className="space-y-[20px]">
            <div>
              <label
                htmlFor="nombre"
                className="block text-[16px] text-[#5e709d] mb-[5px]"
              >
                Nombre Completo
              </label>
              <input
                type="text"
                id="nombre"
                className="w-full border border-[#5e709d] rounded px-[10px] py-[8px] text-[16px]"
              />
            </div>
            <div>
              <label
                htmlFor="correo"
                className="block text-[16px] text-[#5e709d] mb-[5px]"
              >
                Correo Electrónico
              </label>
              <input
                type="email"
                id="correo"
                className="w-full border border-[#5e709d] rounded px-[10px] py-[8px] text-[16px]"
              />
            </div>
            <div>
              <label
                htmlFor="asunto"
                className="block text-[16px] text-[#5e709d] mb-[5px]"
              >
                Asunto
              </label>
              <input
                type="text"
                id="asunto"
                className="w-full border border-[#5e709d] rounded px-[10px] py-[8px] text-[16px]"
              />
            </div>
            <div>
              <label
                htmlFor="mensaje"
                className="block text-[16px] text-[#5e709d] mb-[5px]"
              >
                Mensaje
              </label>
              <textarea
                id="mensaje"
                rows="5"
                className="w-full border border-[#5e709d] rounded px-[10px] py-[8px] text-[16px]"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#080f53] text-white px-[20px] py-[10px] rounded text-[16px] hover:bg-[#000033]"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SectionContacto;
