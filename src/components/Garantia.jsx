import React from "react";

export default function Garantia() {
  return (
    <section id="sobre" className="py-10">
      <div className="container-mobile mx-auto max-w-5xl grid gap-8 items-center">
        <div>
          <h3 className="text-center text-2xl text-white font-bold mb-3">
            Não diga sim, diga talvez..
          </h3>
          <img className="mb-4 " src="../../garantia.png"></img>
          <h4 className="text-xl text-gray-600 font-medium text-center">
            Se você aplicar o método e não se sentir satisfeita, damos todo seu
            dinheiro de volta
          </h4>
          <div className="flex justify-center mt-8 gap-3">
            <a
              href="#a"
              className="justify-center align-center btn text-white bg-green-500 btn-xl"
            >
              Entrar pro desafio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
