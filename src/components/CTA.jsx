import React from "react";

export default function CTA() {
  return (
    <section id="cta" className="py-12 bg-black">
      <div className="container-mobile mx-auto max-w-4xl text-center">
        <h3 className="text-2xl text-white font-bold mb-3">
          Decida aqui, e agora.
        </h3>
        <p className="text-gray-700 mb-6">
          Adquira agora por preço simbólico! não deixe pra depois, você
          provavelmente nunca mais vai ter uma oportunidade de tomar uma decisão
          dessa.
        </p>
        <div className="flex justify-center mt-8 sm:flex-row ">
          <a
            href="https://pay.kiwify.com.br/ycz35VV"
            className="animate-bounce justify-center align-center btn text-white bg-green-500 btn-xl"
          >
            Adquirir o método
          </a>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 text-center">
          <div>
            <div className="text-lg font-bold text-yellow-300">30 dias</div>
            <div className="text-sm text-gray-500">Garantia</div>
          </div>
          <div>
            <div className="text-lg font-bold text-yellow-300">
              Acesso Mensal
            </div>
            <div className="text-sm text-gray-500">Investimento único</div>
          </div>
        </div>
      </div>
    </section>
  );
}
