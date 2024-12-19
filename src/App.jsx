import { useState, useEffect } from "react";
import { WelcomeScreen } from "./components/WelcomeScreen";
import { ParticipantInput } from "./components/ParticipantInput";
import { AssignmentDisplay } from "./components/AssignmentDisplay";

export default function App() {
  const [participants, setParticipants] = useState([]);
  const [assignments, setAssignments] = useState([]);
  const [currentScreen, setCurrentScreen] = useState("welcome");
  const [flakes, setFlakes] = useState([]);





  useEffect(() => {
    setTimeout(() => setIsAnimating(false), 1000); // Animation d'initialisation

    // Générer les flocons
    const numFlakes = Math.floor(Math.random() * 16) + 15; // entre 15 et 30 flocons
    setFlakes(
      [...Array(numFlakes)].map((_, i) => ({
        id: i,
        size: Math.random() * 5 + 5,
        xStart: Math.random() * 100,
        animationDuration: Math.random() * 5 + 5,
        delay: Math.random() * 2,
      }))
    );
  }, []);




  const addParticipant = (name) => {
    setParticipants([...participants, name]);
  };

  const removeParticipant = (index) => {
    setParticipants(participants.filter((_, i) => i !== index));
  };

  const distributeGifts = () => {
    if (participants.length < 2) {
      alert("Il faut au moins 2 participants pour faire un Secret Santa !");
      return;
    }

    const shuffled = [...participants].sort(() => Math.random() - 0.5);
    const newAssignments = shuffled.map((giver, index) => ({
      giver,
      receiver: shuffled[(index + 1) % shuffled.length],
    }));

    setAssignments(newAssignments);
    setCurrentScreen("assignments");
  };

  const resetApp = () => {
    setParticipants([]);
    setAssignments([]);
    setCurrentScreen("input");
  };

  return (
    <div className="w-screen h-screen bg-background">
      <div className="card">
        {currentScreen === "welcome" && (
          <WelcomeScreen onStart={() => setCurrentScreen("input")} />
        )}
        {currentScreen === "input" && (
          <>
            <ParticipantInput
              onAddParticipant={addParticipant}
              participants={participants}
              onRemoveParticipant={removeParticipant}
            />
            <button className="button py-2 px-4 text-base bg-text-button text-bg-button rounded-lg" onClick={distributeGifts}>
              Distribuer les cadeaux
            </button>
          </>
        )}
        {currentScreen === "assignments" && (
          <>
            <h2 className="text-2xl font-bold mb-6 text-center">
              Attributions des cadeaux
            </h2>
            <AssignmentDisplay assignments={assignments} />
            <div className="mt-6">
              <button className="button px-6 py-2 text-base bg-bg-button text-text-button hover:text-bg-button hover:bg-text-button cursor-pointer rounded-lg transition-all duration-300" onClick={resetApp}>
                Recommencer
              </button>
            </div>
          </>
        )}
      </div>

      {flakes.map(({ id, size, xStart, animationDuration, delay }) => (
        <div
          key={id}
          className="snowflake"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            left: `${xStart}%`,
            animationDuration: `${animationDuration}s`,
            animationDelay: `${delay}s`,
          }}
        />
      ))}
    </div>

    // <div className="container mx-auto p-4">
    //   <div className="card">
    //     <h1 className="text-2xl font-bold mb-6 text-center">Secret Santa</h1>
    //     {!showAssignments ? (
    //       <ParticipantInput
    //         onAddParticipant={addParticipant}
    //         participants={participants}
    //       />
    //     ) : (
    //       <AssignmentDisplay assignments={assignments} />
    //     )}
    //     <div className="mt-6">
    //       {!showAssignments ? (
    //         <button className="button w-full" onClick={distributeGifts}>
    //           Distribuer les cadeaux
    //         </button>
    //       ) : (
    //         <button
    //           className="button w-full"
    //           onClick={() => {
    //             setParticipants([]);
    //             setAssignments([]);
    //             setShowAssignments(false);
    //           }}
    //         >
    //           Recommencer
    //         </button>
    //       )}
    //     </div>
    //   </div>
    // </div>
  );
}
