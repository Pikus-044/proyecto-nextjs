"use client";

import React, { useState } from "react";

const FlipCardSimple = ({ number, title, description }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="w-65 h-90 bg-white rounded-lg shadow-lg p-6 cursor-pointer flex items-center justify-center text-center transition-transform duration-500"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      {isFlipped ? (
        // Parte trasera
        <div className="text-white bg-[#000047] flex items-center justify-center p-4 h-full w-full rounded-lg">
          <p className="text-sm">{description}</p>
        </div>
      ) : (
        // Parte frontal
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-[50px] font-bold text-[#000047]">{number}</h1>
          <h2 className="text-[24px] font-bold text-[#000047] mb-[10px]">
            {title}
          </h2>
          <p className="text-[16px] text-[#7a7a7a]">{description}</p>
        </div>
      )}
    </div>
  );
};

const SectionNosotros5 = () => {
  const cards = [
    {
      number: "01",
      title: "Respeto",
      description:
        "Nos regimos estrictamente por el marco legal, la Constitución y las leyes, lo cual garantiza a nuestra distinguida clientela una gestión completamente lícita e impecable.",
    },
    {
      number: "02",
      title: "Honestidad",
      description:
        "Realizar el trabajo con rectitud, utilizando de manera óptima los recursos que la organización ha puesto a su disposición tales como: recursos tecnológicos, físicos y financieros.",
    },
    {
      number: "03",
      title: "Solidaridad",
      description:
        "Los empleados de LAGS Aduana, C.A., se caracterizan por tener el carisma y la capacidad de trabajar en equipo, atraer a otros y actuar en torno a un objetivo común.",
    },
    {
      number: "04",
      title: "Excelencia",
      description:
        "Los empleados actuarán siempre bajo la premisa del servicio personalizado de calidad fomentando la eficiencia y eficacia para satisfacer las necesidades de nuestros grupos de interés.",
    },
    {
      number: "05",
      title: "Ética",
      description:
        "Nuestro comportamiento se basa en rigurosos principios éticos, evitando beneficiar o perjudicar la gestión ante cualquier Institución Gubernamental, siempre apegados al Marco Legal.",
    },
    {
      number: "06",
      title: "Responsabilidad",
      description:
        "LAGS Aduana, C.A. promueve la capacitación permanente de su capital humano, como parte fundamental en el crecimiento y desarrollo de la organización.",
    },
  ];

  return (
    <div className="w-full bg-white py-[50px]">
      <div className="max-w-[1200px] mx-auto text-center">
        {/* Grid de tarjetas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {cards.map((card, index) => (
            <FlipCardSimple
              key={index}
              number={card.number}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionNosotros5;