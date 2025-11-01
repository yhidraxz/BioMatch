import React, { useState, useEffect } from "react";

export default function Hero() {
  const [showCTA, setShowCTA] = useState(false);

  useEffect(() => {
    // mostra o CTA e a parte de role após 5min40s
    const timer = setTimeout(() => setShowCTA(true), 340000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // injeta o script da Vturb
    const script = document.createElement("script");
    script.src =
      "https://scripts.converteai.net/a42e650c-b3dd-42c7-a94e-e132b603b19f/players/690557868764bca5bd179fd2/v4/player.js";
    script.async = true;
    document.head.appendChild(script);

    // cleanup para remover o script se o componente desmontar
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <section className="flex-col h-screen">
      <div className="flex-col text-center bg-red-600 flex mx-auto items-center align-center pb-2 py-1 font-bold">
        <h1 className="text-white">
          Alerta pra quem sente ficou mais díficil com o passar dos anos:
        </h1>
        <h1 className="font-medium text-white text-sm">
          já tentou de tudo? Existe um motivo, e não tem nada a ver com falta de
          disciplina ou força de vontade..
        </h1>
      </div>

      <div className="max-w-5xl text-center items-center mx-auto">
        <div className="headline">
          <h2 className="px-1 text-lg font-bold leading-tight text-white mt-12">
            Elas ouviam comentários da família até aprenderem esse mecanismo
            simples ativado em casa...
          </h2>

          <p className="text-yellow-300 text-sm mb-6 mt-2">
            (Sem remédios, sem academia, só com alguns minutos por dia em casa)
          </p>
        </div>

        {/* Player da VTurb */}
        <div
          className="flex justify-center w-full aspect-video mt-10"
          dangerouslySetInnerHTML={{
            __html: `
              <vturb-smartplayer
                id="vid-690557868764bca5bd179fd2"
                style="display: block; margin: 0 auto; width: 100%;"
              ></vturb-smartplayer>
            `,
          }}
        />

        {/* CTA temporizado */}
        {showCTA && (
          <>
            <div className="flex justify-center mt-8 sm:flex-row sm:items-center gap-3 transition-all duration-700">
              <a
                href="#cta"
                className="justify-center align-center btn text-white bg-green-500 btn-lg w-2/3 animate-bounce"
              >
                Adquira o método
              </a>
            </div>

            <div className="mt-24 flex justify-center transition-opacity duration-700">
              <div className="flex flex-col items-center text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
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
                <p className="text-xs text-white/80 mt-1">Role para ver mais</p>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
