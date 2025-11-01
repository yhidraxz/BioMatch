import React from "react";

// Ícone de estrela preenchida (você pode trocar por outline se quiser)
const StarIcon = ({ filled = true }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill={filled ? "gold" : "none"}
    stroke="gold"
    className="w-4 h-4"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.286 3.967c.3.921-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.176 0l-3.385 2.46c-.784.57-1.838-.197-1.539-1.118l1.286-3.967a1 1 0 00-.364-1.118L2.045 9.394c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.288-3.967z"
    />
  </svg>
);

const TestimonialCard = ({ name, text, rating = 5, photo }) => (
  <div className="p-5 rounded-xl bg-white border shadow-sm hover:shadow-md transition-all duration-200">
    <div className="flex items-start gap-3">
      <img
        src={
          photo || `https://via.placeholder.com/80.png?text=${name.charAt(0)}`
        }
        alt={name}
        className="w-12 h-12 rounded-full object-cover"
      />
      <div>
        <div className="font-semibold text-gray-900">{name}</div>

        {/* Estrelas */}
        <div className="flex mt-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <StarIcon key={i} filled={i < rating} />
          ))}
        </div>

        <p className="text-sm text-gray-600">{text}</p>
      </div>
    </div>
  </div>
);

export default function Testimonials() {
  const items = [
    {
      name: "Ana",
      text: "Já tinha tentado de tudo, tava quase desistindo, hoje já perdi mais de 20kgs",
      rating: 5,
      photo: "../../test1.webp",
    },
    {
      name: "Mariana",
      text: "Na segunda semana meu marido já veio me elogiar e perguntar o que eu to fazendo😍",
      rating: 5,
      photo: "../../test2.webp",
    },
    {
      name: "Carla",
      text: "Estou a 1 mês e já perdi 5 kgs, nada vale se sentir bem com meu corpo de novo",
      rating: 5,
      photo: "../../test3.webp",
    },
  ];

  return (
    <section id="depoimentos" className="py-10 bg-gray-50">
      <div className="container-mobile mx-auto max-w-5xl">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-800">
            O que as alunas estão dizendo..
          </h3>
          <p className="text-sm text-gray-500">
            Resultados reais de quem aplicou o método
          </p>
        </div>

        <div className="grid gap-4 grid-cols-1 ">
          {items.map((it, idx) => (
            <TestimonialCard key={idx} {...it} />
          ))}
        </div>
        <div className="flex justify-center mt-8 sm:flex-row sm:items-center gap-3">
          <a
            href="https://pay.kiwify.com.br/ycz35VV"
            className="justify-center align-center btn text-white bg-green-500 btn-xl"
          >
            Adquirir o método
          </a>
        </div>
      </div>
    </section>
  );
}
