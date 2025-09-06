import React, { useRef } from "react";

const SectionNosotros3 = () => {
  const timelineRef = useRef(null);

  const scrollLeft = () => {
    timelineRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    timelineRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="w-full bg-white py-[50px]">
      <div className="max-w-[1200px] mx-auto text-center relative">
        {/* Título */}
        <h2 className="text-[50px] font-bold text-[#222222] mb-[10px]">
          Nuestra Historia
        </h2>

        {/* Controles de navegación */}
        <div className="flex justify-between items-center mb-[20px] relative">
          <button
            onClick={scrollLeft}
            className="p-[10px] bg-[#000047] text-white rounded-full z-10"
          >
            &#8249;
          </button>
          <button
            onClick={scrollRight}
            className="p-[10px] bg-[#000047] text-white rounded-full z-10"
          >
            &#8250;
          </button>

          {/* Línea detrás de las flechas */}
          <div className="absolute top-[50%] left-0 right-0 h-[2px] bg-[#000047] z-0"></div>
        </div>

        {/* Timeline */}
        <div
          ref={timelineRef}
          className="relative flex items-center gap-[50px] overflow-x-auto scrollbar-hide"
        >
          {/* Línea detrás de los eventos */}
          <div className="absolute top-[50%] left-0 right-0 h-[2px] bg-[#000047] z-0"></div>

          {/* Evento 1 */}
          <div className="relative flex flex-col items-center w-[300px] flex-shrink-0 z-10">
            <div className="flex items-center justify-center w-[60px] h-[60px] bg-[#000047] rounded-full text-white mb-[20px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
                fill="currentColor"
              >
                <path d="M336.174 80c-49.132 0-93.305-32-161.913-32c-31.301 0-58.303 6.482-80.721 15.168a48.04 48.04 0 0 0 2.142-20.727C93.067 19.575 74.167 1.594 51.201.104C23.242-1.71 0 20.431 0 48c0 17.764 9.657 33.262 24 41.562V496c0 8.837 7.163 16 16 16h16c8.837 0 16-7.163 16-16v-83.443C109.869 395.28 143.259 384 199.826 384c49.132 0 93.305 32 161.913 32c58.479 0 101.972-22.617 128.548-39.981C503.846 367.161 512 352.051 512 335.855V95.937c0-34.459-35.264-57.768-66.904-44.117C409.193 67.309 371.641 80 336.174 80zM464 336c-21.783 15.412-60.824 32-102.261 32c-59.945 0-102.002-32-161.913-32c-43.361 0-96.379 9.403-127.826 24V128c21.784-15.412 60.824-32 102.261-32c59.945 0 102.002 32 161.913 32c43.271 0 96.32-17.366 127.826-32v240z" />
              </svg>
            </div>
            <h3 className="text-[18px] font-bold text-[#000047] mb-[10px]">
              Junio 1979
            </h3>
            <div className="bg-white p-[20px] rounded-lg shadow-lg text-left">
              <p className="text-[16px] text-[#000047] leading-[1.8]">
                La Organización formaliza su personalidad jurídica, como
                Sociedad de Responsabilidad Limitada (S.R.L.), presentada y
                representada por su actual presidente Lic. Luis Alberto González
                Salas.
              </p>
            </div>
          </div>

          {/* Evento 2 */}
          <div className="relative flex flex-col items-center w-[300px] flex-shrink-0 z-10">
            <div className="flex items-center justify-center w-[60px] h-[60px] bg-[#000047] rounded-full text-white mb-[20px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M21.945 2.765a1.552 1.552 0 0 0-1.572-.244L2.456 9.754a1.543 1.543 0 0 0 .078 2.884L6.4 13.98l2.095 6.926c.004.014.017.023.023.036a.486.486 0 0 0 .093.15a.49.49 0 0 0 .226.143c.01.004.017.013.027.015h.006l.003.001a.448.448 0 0 0 .233-.012c.008-.002.016-.002.025-.005a.495.495 0 0 0 .191-.122c.006-.007.016-.008.022-.014l3.013-3.326l4.397 3.405c.267.209.596.322.935.322c.734 0 1.367-.514 1.518-1.231L22.469 4.25a1.533 1.533 0 0 0-.524-1.486zM9.588 15.295l-.707 3.437l-1.475-4.878l7.315-3.81l-4.997 4.998a.498.498 0 0 0-.136.253zm8.639 4.772a.54.54 0 0 1-.347.399a.525.525 0 0 1-.514-.078l-4.763-3.689a.5.5 0 0 0-.676.06L9.83 19.07l.706-3.427l7.189-7.19a.5.5 0 0 0-.584-.797L6.778 13.054l-3.917-1.362A.526.526 0 0 1 2.5 11.2a.532.532 0 0 1 .334-.518l17.914-7.233a.536.536 0 0 1 .558.086a.523.523 0 0 1 .182.518l-3.261 16.015z"
                />
              </svg>
            </div>
            <h3 className="text-[18px] font-bold text-[#000047] mb-[10px]">
              Agosto 1982
            </h3>
            <div className="bg-white p-[20px] rounded-lg shadow-lg text-left">
              <p className="text-[16px] text-[#000047] leading-[1.8]">
                Inicia su actividad como Agencia de Aduanas, de conformidad con
                la G.O. Ordinaria Nº 3.006 de fecha 27/08/82, Luis A. González
                Salas &amp; Asociados, S.R.L.
              </p>
            </div>
          </div>

          {/* Evento 3 */}
          <div className="relative flex flex-col items-center w-[300px] flex-shrink-0">
            <div className="flex items-center justify-center w-[60px] h-[60px] bg-[#000047] rounded-full text-white mb-[20px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 20 20"
              >
                <path
                  fill="currentColor"
                  d="M7 13.33a7 7 0 1 1 6 0V16H7v-2.67zM7 17h6v1.5c0 .83-.67 1.5-1.5 1.5h-3A1.5 1.5 0 0 1 7 18.5V17zm2-5.1V14h2v-2.1a5 5 0 1 0-2 0z"
                />
              </svg>
            </div>
            <h3 className="text-[18px] font-bold text-[#000047] mb-[10px]">
              Durante 1989
            </h3>
            <div className="bg-white p-[20px] rounded-lg shadow-lg text-left">
              <p className="text-[16px] text-[#000047] leading-[1.8]">
                Especializa sus servicios hacia la industria farmacéutica
                manejando embarques relacionados con Principios Activos,
                Sustancias Controladas, Insumos, Especialidades Farmacéuticas.
              </p>
            </div>
          </div>

          {/* Evento 4 */}
          <div className="relative flex flex-col items-center w-[300px] flex-shrink-0">
            <div className="flex items-center justify-center w-[60px] h-[60px] bg-[#000047] rounded-full text-white mb-[20px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 1024 1024"
              >
                <path
                  fill="currentColor"
                  d="m992 896l-74-74q-71 94-177.5 148T512 1024t-228.5-54T106 822l-74 74q-13 0-22.5-9.5T0 864V672q0-13 9.5-22.5T32 640h192q13 0 22.5 9.5T256 672l-59 59q44 63 109 104.5T448 890V576h-64q-26 0-45-18.5t-19-45t19-45.5t45-19h64v-76q-57-20-92.5-69T320 192q0-80 56-136T512 0t136 56.5T704 192q0 62-35.5 111T576 372v76h64q27 0 45.5 19t18.5 45.5t-18.5 45T640 576h-64v314q77-13 142-54.5T827 731l-59-59q0-13 9.5-22.5T800 640h192q13 0 22.5 9.5t9.5 22.5v192q0 13-9.5 22.5T992 896zM511.5 128q-26.5 0-45 18.5t-18.5 45t18.5 45.5t45 19t45.5-19t19-45t-19-45t-45.5-19z"
                />
              </svg>
            </div>
            <h3 className="text-[18px] font-bold text-[#000047] mb-[10px]">
              Septiembre 1991
            </h3>
            <div className="bg-white p-[20px] rounded-lg shadow-lg text-left">
              <p className="text-[16px] text-[#000047] leading-[1.8]">
                Se transforma su personalidad jurídica de Sociedad de
                Responsabilidad Limitada (S.R.L.) a Compañía Anónima (C.A.).
              </p>
            </div>
          </div>

          {/* Evento 5 */}
          <div className="relative flex flex-col items-center w-[300px] flex-shrink-0">
            <div className="flex items-center justify-center w-[60px] h-[60px] bg-[#000047] rounded-full text-white mb-[20px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
                fill="currentColor"
              >
                <path d="M336.174 80c-49.132 0-93.305-32-161.913-32c-31.301 0-58.303 6.482-80.721 15.168a48.04 48.04 0 0 0 2.142-20.727C93.067 19.575 74.167 1.594 51.201.104C23.242-1.71 0 20.431 0 48c0 17.764 9.657 33.262 24 41.562V496c0 8.837 7.163 16 16 16h16c8.837 0 16-7.163 16-16v-83.443C109.869 395.28 143.259 384 199.826 384c49.132 0 93.305 32 161.913 32c58.479 0 101.972-22.617 128.548-39.981C503.846 367.161 512 352.051 512 335.855V95.937c0-34.459-35.264-57.768-66.904-44.117C409.193 67.309 371.641 80 336.174 80zM464 336c-21.783 15.412-60.824 32-102.261 32c-59.945 0-102.002-32-161.913-32c-43.361 0-96.379 9.403-127.826 24V128c21.784-15.412 60.824-32 102.261-32c59.945 0 102.002 32 161.913 32c43.271 0 96.32-17.366 127.826-32v240z" />
              </svg>
            </div>
            <h3 className="text-[18px] font-bold text-[#000047] mb-[10px]">
              Agosto 2011
            </h3>
            <div className="bg-white p-[20px] rounded-lg shadow-lg text-left">
              <p className="text-[16px] text-[#000047] leading-[1.8]">
                Se modifica la denominación de empresa por LAGS Aduana, C.A.,
                presidida por el Lic. Luis Alberto González Salas y representada
                por sus directores y actualmente opera bajo esa denominación.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionNosotros3;
