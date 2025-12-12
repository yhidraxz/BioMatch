import React from "react";

const PriceCard = ({ title, price, origPrice, perks }) => (
  <div className="p-6 rounded-xl bg-white border card-soft flex flex-col">
    <h4 className="text-lg font-semibold mb-2">{title}</h4>
    <div className="text-3xl font-extrabold text-red-500 mb-4 line-through">
      {origPrice}
    </div>
    <div className="text-3xl font-extrabold text-green-500 mb-4">{price}</div>
    <ul className="flex-grow text-gray-600 space-y-2 mb-6">
      {perks.map((p, i) => (
        <li key={i}>• {p}</li>
      ))}
    </ul>
    <a
      href="https://pay.kiwify.com.br/ycz35VV"
      className="justify-center align-center btn text-white bg-green-500 btn-xl "
    >
      Adquirir o método
    </a>
  </div>
);

export default function Pricing() {
  return (
    <section id="precos" className="py-10">
      <div className="container-mobile mx-auto max-w-5xl">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-white">Taxa simbólica</h3>
          <p className="text-gray-700">
            Você não precisa mais investir +R$1.200,00 todos os meses pra
            emagrecer
          </p>
        </div>

        <div className="grid gap-4 grid-cols-1">
          <PriceCard
            title="SOMENTE HOJE:"
            origPrice="R$ 300,00"
            price="R$ 147,00"
            perks={[]}
          />
        </div>
      </div>
    </section>
  );
}
