import React, { useState, useEffect } from "react";

export default function Hero() {
  const [showCTA, setShowCTA] = useState(false);

  //380000
  useEffect(() => {
    const timer = setTimeout(() => setShowCTA(true), 380000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="flex flex-col min-h-screen bg-[#FFFDF9] text-center">
      {/* Cabeçalho */}
      <div className="bg-[#FFF1DD] text-[#D97706] font-semibold py-2 shadow-sm">
        <h1 className="text-sm md:text-base">
          Pra quem sente que ficou mais difícil com o passar dos anos:
        </h1>
        <p className="text-xs md:text-sm font-normal mt-1 text-[#B46904]">
          já tentou de tudo? Existe um motivo, e não tem nada a ver com falta de
          disciplina ou força de vontade..
        </p>
      </div>

      {/* Conteúdo */}
      <div className="flex flex-col justify-center items-center px-4 mt-14">
        <h2 className="text-[#1C1C1C] font-bold text-lg md:text-xl leading-snug max-w-md md:max-w-2xl">
          Comunidade de emagrecimento, perca 4kgs em somente 8 semanas...
        </h2>

        <p className="text-[#4A4A4A] text-xs md:text-sm mb-10 mt-4">
          (Sem remédios, sem dietas malucas, sem efeito sanfona)
        </p>

        {/* PLAYER CENTRALIZADO */}
        <div className="w-full flex justify-center">
          <div className="w-full max-w-[720px] aspect-video rounded-lg overflow-hidden shadow-md border border-[#F1E7D6]"></div>
        </div>

        {/* CTA temporizado */}
        {showCTA && (
          <>
            <div className="flex justify-center mt-10">
              <a
                href="#a"
                className="bg-[#3BAA7A] hover:bg-[#2E8C62] text-white font-semibold py-3 px-8 rounded-sm shadow-lg hover:shadow-xl transition-all duration-300 animate-bounce"
              >
                Adquira o método
              </a>
            </div>

            <div className="mt-16 flex justify-center">
              <div className="flex flex-col items-center text-[#555]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
                <p className="text-xs mt-1 text-black">Role para ver mais</p>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
