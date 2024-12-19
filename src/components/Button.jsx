import React from "react";

const StartButton = ({ onClick, label = "Commencer" }) => {
  return (
    <button
      onClick={onClick}
      className="w-full px-6 py-2 mb-4 text-base bg-bg-button text-text-button hover:text-bg-button hover:bg-text-button cursor-pointer rounded-lg transition-all duration-300"
    >
      {label}
    </button>
  );
};

export default StartButton;
