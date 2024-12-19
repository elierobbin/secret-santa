import React, { useState, useEffect } from "react";

export function WelcomeScreen({ onStart }) {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsAnimating(false), 1000); // Animation d'initialisation
  }, []);

  return (
    <div className="flex flex-col gap-4 px-4 w-screen h-screen text-center items-center relative overflow-hidden">
      <img
        className={`absolute w-[85%] sm:w-1/3 transition-transform duration-1000 z-10 ${
          isAnimating ? "translate-y-full" : "translate-y-0"
        }`}
        src="pere-noel.svg"
        alt="Père Noël"
        style={{ bottom: "0" }}
      />
      <h1
        className={`font-sans transition-transform duration-1000 ${
          isAnimating ? "translate-y-[40vh]" : "translate-y-[125%]"
        } `}
      >
        Secret Santa
      </h1>
      <section
        className={`flex flex-col items-center gap-8 transition-all duration-1000 z-10 ${
          isAnimating
            ? "translate-y-[50vh] opacity-0"
            : "translate-y-[60%] opacity-100"
        }`}
      >
        <p className="font-sans">
          Bienvenue dans l'application Secret Santa ! Organisez facilement votre
          échange de cadeaux entre amis ou collègues.
        </p>
        <button
          onClick={onStart}
          className="button px-6 py-2 text-base bg-bg-button text-text-button hover:text-bg-button hover:bg-text-button cursor-pointer rounded-lg transition-all duration-300"
        >
          Commencer
        </button>
      </section>
    </div>
  );
}
