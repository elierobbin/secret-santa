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
    <div className="flex flex-col gap-6 w-screen text-center items-center relative overflow-hidden">
      <section className="flex flex-col items-center gap-6 z-10 w-full max-w-md py-8">
        <h2 className="text-3xl font-extrabold text-white drop-shadow-lg">
          🎄 Ajoutez les participants 🎅
        </h2>

        <div className="flex w-full gap-4 items-center">
          <input
            type="text"
            className="w-full p-3 rounded-lg text-gray-800 bg-white border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-500 transition-all"
            placeholder="Entrez un prénom"
            value={currentName}
            onChange={(e) => setCurrentName(e.target.value)}
            onKeyDown={handleKeyPress}
            aria-label="Entrez un nom"
          />
          <button
            className="px-5 py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-green-500 hover:shadow-lg transition-all"
            onClick={addParticipant}
            aria-label="Ajouter un participant"
          >
            Ajouter
          </button>
        </div>

        <ul className="flex flex-col w-full gap-4">
          {participants.map((name, index) => (
            <li
              key={index}
              className="flex justify-between items-center p-4 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-3">
                <UserCircleIcon className="h-10 w-10 text-emerald-700" />
                <span className="text-gray-800 font-semibold">{name}</span>
              </div>

              <button
                className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-400 hover:shadow-md transition-all"
                onClick={() => onRemoveParticipant(index)}
                aria-label={`Supprimer ${name}`}
              >
                <TrashIcon className="h-5 w-5" />
                <span>Supprimer</span>
              </button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
