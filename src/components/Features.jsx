import React from "react";

const FeatureCard = ({ title, desc }) => (
  <div className="p-6 bg-zinc-900/60 border border-zinc-800 rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
    <h3 className="text-white font-semibold text-lg leading-snug">{title}</h3>
    {desc && <p className="text-sm text-zinc-400 mt-2">{desc}</p>}
  </div>
);

export default function Features() {
  return (
    <div className="bg-black text-white">
      {/* Seção 1 */}
      <section id="features" className="py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-10">
            <h4 className="text-2xl font-bold">
              Ative o modo queima - Transforme seu corpo naturalmente
            </h4>
            <p className="mt-3 text-zinc-400 text-base max-w-2xl mx-auto">
              Centenas de mulheres estão emagrecendo sem sofrimento ou dietas
              restritivas
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <FeatureCard title="Aprenda a ativar o modo queima, e emagreça até enquanto descansa" />
            <FeatureCard title="Reprograme o corpo pra usar gordura como fonte de energia" />
            <FeatureCard title="Ative o modo quiema, e fique magra pra sempre" />
          </div>
        </div>
      </section>

      {/* Seção 2 */}
      <section id="features" className="py-16 border-t border-zinc-800">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-10">
            <h4 className="text-2xl font-bold">Volte a ser jovem</h4>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <FeatureCard title="Elimine gordura localizada na barriga, cintura e braços com técnicas simples " />
            <FeatureCard title="Diferente de exercícios intensos e dietas restritivas — você vai ter ainda mais disposição e dormir melhor" />
            <FeatureCard title="Conquiste um corpo de dar inveja, e receba elogios (até do marido) nas primeiras semanas" />
          </div>
        </div>
      </section>

      {/* Seção 3 */}
      <section id="features" className="py-16 border-t border-zinc-800">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-10">
            <h4 className="text-2xl font-bold">
              Simples, natural e comprovado
            </h4>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <FeatureCard title="Faça tudo em casa — Pra quem não tem tempo pra academia e treinos longos" />
            <FeatureCard title="100% natural e seguro, baseado na ciência e mais de 20 anos de experiência, aplicado por +200 mulheres" />
            <FeatureCard title="Ebook com etapas práticas pra ativar o modo queima de gordura" />
          </div>
        </div>
      </section>
    </div>
  );
}
