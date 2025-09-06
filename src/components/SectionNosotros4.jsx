import React from "react";

const teamMembers = [
    {
        name: "Rafael Hernández",
        role: "Gerente Oficina Operativa",
        image: "/img/rafael.jpg",
    },
    {
        name: "Taniuska Hernández",
        role: "Coordinador Valor",
        image: "/img/taniuska.jpg",
    },
    {
        name: "Donovan Arteaga",
        role: "Coordinador Operaciones",
        image: "/img/donovan.jpg",
    },
    {
        name: "Brigitte Ramos",
        role: "Coordinador de Tráfico",
        image: "/img/brigitte.jpg",
    },
    {
        name: "Maria Alejandra Camara",
        role: "Coordinador Administrativo",
        image: "/img/maria.jpg",
    },
];

const SectionNosotros4 = () => {
    return (

        <div className="w-full bg-white py-[50px]">
            {/* Línea decorativa */}
            <div className="w-[1120px] h-[2px] bg-[#5e709d] mx-auto mb-[50px]"></div>

            <div className="max-w-[1200px] mx-auto text-center">
                {/* Título */}
                <h2 className="text-[50px] font-bold text-[#000047] mb-[10px]">
                    Nuestro Equipo de Trabajo
                </h2>



                {/* Grid de tarjetas */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-[30px]">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-lg overflow-hidden text-center"
                        >
                            {/* Imagen */}
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-[200px] object-cover"
                            />
                            {/* Información */}
                            <div className="p-[20px]">
                                <h3 className="text-[25px] font-bold text-[#222222] mb-[10px]">
                                    {member.name}
                                </h3>
                                <p className="text-[13px] text-[#000047]">{member.role}</p>
                                {/* Línea decorativa */}
                                <div className="w-[50px] h-[2px] bg-[#777777] mx-auto mt-[10px]"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Línea decorativa */}
            <div className="w-[1120px] h-[2px] bg-[#5e709d] mx-auto mt-[50px]"></div>
        </div>
    );
};

export default SectionNosotros4;