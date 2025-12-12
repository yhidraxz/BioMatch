import React, { useState } from "react";

const Question = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b text-white py-3">
      <button
        className="w-full text-left flex justify-between items-center"
        onClick={() => setOpen(!open)}
      >
        <span className="font-medium">{q}</span>
        <svg
          className={`w-5 h-5 transition-transform ${open ? "rotate-180" : ""}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {open && <p className="text-gray-600 mt-2">{a}</p>}
    </div>
  );
};

export default function FAQ() {
  const faqs = [
    {
      q: "Como funciona a comunidade?",
      a: "Você vai aprender tudo que precisa pra no seu dia a dia e começar a ter resultados de verdade",
    },
    {
      q: "Tem garantia?",
      a: "Sim! Se você aplicar tudo e não se sentir satisfeita com os resultados, damos todo seu dinheiro de volta",
    },
    {
      q: "Quanto tempo pra ver resultados?",
      a: "Se tudo for seguido corretamente, poderá ver resultados visíveis nas primeiras semanas!",
    },
    {
      q: "Como vai ser entregue?",
      a: "Assim que você adquirir, enviaremos um email com um ebook contendo todas as técnicas e explicando como funciona o método",
    },
    {
      q: "Funciona pra mim?",
      a: "O meu método foi desenvolvido baseado em ciência para todas mulheres, independente do peso, idade ou tempo disponível",
    },
  ];

  return (
    <section id="faq" className="py-10">
      <div className="container-mobile mx-auto max-w-5xl">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold">Perguntas frequentes</h3>
        </div>

        <div className="grid gap-4 grid-cols-1">
          <div>
            {faqs.map((f, i) => (
              <Question key={i} {...f} />
            ))}
          </div>
          {/* <div className="p-4 bg-brand-50 rounded-lg">
            <h4 className="font-semibold mb-2">Ainda com dúvidas?</h4>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              <a href="#cta" className="text-brand-600 underline">
                Fale conosco
              </a>
              .
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
}
