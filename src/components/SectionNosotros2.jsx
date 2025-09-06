import React from "react";

const SectionNosotros2 = () => {
  return (
    <div className="relative w-full h-[903px]">
      {/* Imagen de fondo */}
      <img
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/img/BannerServicios.jpg"
        alt="Servicios"
      />

      {/* Contenido */}
      <div className="relative z-10 max-w-[1200px] mx-auto h-full flex items-center justify-between px-[50px] gap-[50px]">
        {/* Columna izquierda: Nuestra Misión */}
        <div className="bg-white p-[30px] rounded-lg shadow-lg h-[448px] w-[628px]">
          <div className="flex items-center mb-[20px]">
          <svg xmlns="http://www.w3.org/2000/svg" width="74" height="74" viewBox="0 0 512 512" fill="#000047"><path fill="#000047" d="M384 42.667v64h85.333q-.874 77.24-24.27 108.943l-2.396 3.057q-18.81 22.572-64.215 32.088c-13.989 45.811-52.981 80.715-101.073 88.801a27 27 0 0 0-.046 1.777c0 47.129 38.205 85.334 85.334 85.334v42.666H149.333v-42.666c47.129 0 85.334-38.205 85.334-85.334l-.046-1.777c-48.091-8.086-87.082-42.99-101.065-88.805c-30.278-6.34-51.683-17.036-64.223-32.084q-25.748-30.899-26.666-112H128v-64zm-42.667 42.666H170.667v128c0 45.701 35.924 83.01 81.074 85.229l4.259.105c47.128 0 85.333-38.205 85.333-85.334zM256 106.667l21.579 51.37l53.088 5.75l-39.798 37.333L302.144 256L256 227.776L209.856 256l11.275-54.955l-39.798-37.333l53.088-5.749zm-128 42.666H88.277l.464 3.072c2.735 17.512 6.933 29.937 11.975 37.119l1.395 1.828c3.936 4.724 11.335 9.173 22.297 12.91l3.592 1.135zm295.723 0H384v56.064l3.592-1.135c10.962-3.737 18.361-8.186 22.297-12.91l1.396-1.828c5.041-7.182 9.239-19.607 11.975-37.119z"/></svg>
          </div>
          <h2 className="text-[33px] font-bold text-[#000047] mb-[20px]">
            Nuestra Misión
          </h2>
          <p className="text-[18px] text-[#000047] leading-[1.8]">
            Proporcionar a nuestros clientes asistencia, asesoría y
            acompañamiento personalizado a través de un equipo profesional y
            experto en el proceso de importación y exportación de acuerdo con
            las normas técnicas vigentes garantizando a nuestros clientes las
            mejores condiciones de seguridad, tiempo y costo.
          </p>
        </div>

        {/* Columna derecha: Nuestra Visión */}
        <div className="bg-white p-[30px] rounded-lg shadow-lg h-[448px] w-[628px]">
          <div className="flex items-center mb-[20px]">
          <svg xmlns="http://www.w3.org/2000/svg" width="74" height="74" viewBox="0 0 21 21" fill="#000047"><g fill="none" fill-rule="evenodd" stroke="#000047" stroke-linecap="round" stroke-linejoin="round"><path d="M10.5 16c3.13 0 5.963-1.833 8.5-5.5C16.463 6.833 13.63 5 10.5 5S4.537 6.833 2 10.5c2.537 3.667 5.37 5.5 8.5 5.5z"/><path d="M10.5 7c.185 0 .366.014.543.042a2.5 2.5 0 0 0 2.915 2.916A3.5 3.5 0 1 1 10.5 7z"/></g></svg>
          </div>
          <h2 className="text-[33px] font-bold text-[#000047] mb-[20px]">
            Nuestra Visión
          </h2>
          <p className="text-[18px] text-[#000047] leading-[1.8]">
            Convertirnos en un aliado estratégico reconocido y de preferencia en
            el mercado, por el nivel de profesionalismo en la asesoría,
            asistencia y acompañamiento en todos los servicios relacionados con
            la operación de importación y exportación de productos y empaques.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionNosotros2;