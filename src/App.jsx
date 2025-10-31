import React, { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Garantia from "./components/Garantia";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  const [showRest, setShowRest] = useState(false);

  useEffect(() => {
    // Tempo em milissegundos (ex: 60000 = 1 minuto)
    const timer = setTimeout(() => {
      setShowRest(true);
    }, 340000); // aqui define o tempo pra liberar o resto da página
    //340000
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <main className="flex-grow">
        <Hero />

        {/* Só mostra o resto da página depois do tempo definido */}
        {showRest && (
          <div className="bg-black transition-opacity duration-1000 opacity-100">
            <Features />
            <Pricing />
            <Garantia />
            <Testimonials />
            <FAQ />
            <CTA />
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
