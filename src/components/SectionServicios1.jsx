import React from 'react'

const SectionServicios1 = () => {
    return (
        <>
            <div className="container-fluid px-[132.781px] py-[100px] bg-white relative w-full h-auto">
                <h3 className="text-center text-[20px] text-[#080f53] z-10">Te acompañamos en tu proceso de comercio internacional</h3>
                <h2 className="text-center text-[40px] font-bold text-[#080f53] z-10">Conoce lo que tenemos para ofrecerte</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px] mt-[61px] relative z-0">
                    {/* Importación */}
                    <div className="flex flex-col justify-center w-[381px] h-auto mx-auto">
                        <img
                            src="img/SectionInicio3img1.jpg"
                            alt="Importación"
                            className="w-[381px] h-[381px] mb-[15px]"
                        />
                        <h3 className="text-[24px] font-bold mb-[15px] text-[#1c244b]">En el área de Importación</h3>
                        <p className="text-[18px] text-[#324a6d]">
                            Procesamos su carga antes, durante y a su llegada en puerto hasta su entrega en la puerta de su fábrica debidamente nacionalizada.
                        </p>
                    </div>
                    {/* Exportación */}
                    <div className="flex flex-col justify-center w-[381px] h-auto mx-auto">
                        <img
                            src="img/SectionInicio3img2.jpg"
                            alt="Exportación"
                            className="w-[381px] h-[381px] mb-[15px]"
                        />
                        <h3 className="text-[24px] font-bold mb-[15px] text-[#1c244b]">En el área de Exportación</h3>
                        <p className="text-[18px] text-[#324a6d]">
                            Recogemos su mercancía en la puerta de su fábrica, se formalizan las inspecciones de ley correspondientes hasta su embarque en el transporte designado.
                        </p>
                    </div>
                    {/* Tránsito */}
                    <div className="flex flex-col justify-center w-[381px] h-auto mx-auto">
                        <img
                            src="img/SectionInicio3img3.jpg"
                            alt="Tránsito"
                            className="w-[381px] h-[381px] mb-[15px]"
                        />
                        <h3 className="text-[24px] font-bold mb-[15px] text-[#1c244b]">Tránsito</h3>
                        <p className="text-[18px] text-[#324a6d]">
                            Se coordina la actividad en alianza con transportistas especializados y autorizados.
                        </p>
                    </div>
                </div>
            </div>


        </>
    )
}

export default SectionServicios1
