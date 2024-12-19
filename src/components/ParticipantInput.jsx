import React, { useState } from "react";
import { TrashIcon, UserCircleIcon } from "@heroicons/react/outline";
import "../snowflakes.css";

export function ParticipantInput({
  onAddParticipant,
  participants,
  onRemoveParticipant,
}) {
  const [currentName, setCurrentName] = useState("");

  const addParticipant = () => {
    if (currentName.trim() !== "") {
      onAddParticipant(currentName);
      setCurrentName("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addParticipant();
    }
  };

  return (
    <div className="flex flex-col gap-6 px-4 py-12 w-screen text-center items-center relative overflow-hidden bg-[var(--color-background)]">
      <div className="absolute w-full h-full top-0 left-0 z-0">
        <div className="snowflakes-container z-0">
          {participants.length > 0 &&
            [...Array(10)].map((_, i) => (
              <div
                key={i}
                className="snowflake"
                style={{
                  animationDuration: `${Math.random() * 5 + 5}s`,
                  animationDelay: `${Math.random() * 3}s`,
                }}
              />
            ))}
        </div>
      </div>

      <section className="flex flex-col items-center justify-start gap-4 z-10 transition-all duration-1000 h-full w-full">
        <h2 className="text-2xl font-bold text-center">
          Ajoutez les participants
        </h2>

        <div className="flex space-x-4 items-center w-full">
          <input
            type="text"
            className="w-full input p-2 rounded-lg text-base text-[var(--color-background)] bg-[var(--color-white)] border-2 border-[var(--color-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-third)] transition-all duration-300"
            placeholder="Entrez un prénom"
            value={currentName}
            onChange={(e) => setCurrentName(e.target.value)}
            onKeyDown={handleKeyPress}
            aria-label="Entrez un nom"
          />
          <button
            className="button px-6 py-2 text-base bg-bg-button text-text-button hover:text-bg-button hover:bg-text-button cursor-pointer rounded-lg transition-all duration-300"
            onClick={addParticipant}
            aria-label="Ajouter un participant"
          >
            Ajouter
          </button>
        </div>

        <ul className="flex flex-row flex-wrap justify-between w-full gap-y-4 sm:gap-4 sm:justify-start">
          {participants.map((name, index) => (
            <li
              key={index}
              className="flex flex-col gap-4 items-center justify-between p-2 bg-bg-button rounded-lg shadow-md transition-all duration-200"
            >
              {/* Icône profil */}
              <div className="flex flex-col items-center gap-2">
                <UserCircleIcon className="h-12 w-12 text-[var(--color-secondary)]" />
                <span className="text-[var(--color-text-button)]">{name}</span>
              </div>

              {/* Bouton de suppression */}
              <button
                className="group flex items-center gap-2 bg-secondary hover:bg-white transition-all duration-300 rounded-lg px-4 py-2"
                onClick={() => onRemoveParticipant(index)}
                aria-label={`Supprimer ${name}`}
                >
                <span className="group-hover:text-secondary">Supprimer</span>
                <TrashIcon className="group-hover:text-secondary text-white h-6 w-6" />
              </button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
