import React from "react";

const AssignmentCard = ({ giver, receiver }) => {
  return (
    <div className="flex flex-col relative overflow-hidden bg-gradient-to-br from-green-800 to-green-600 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-green-900">
      <div className="flex items-center space-x-3">
        <span className="text-4xl">🎄</span>
        <h3 className="text-xl font-bold text-white">{giver}</h3>
      </div>
      <p className="mt-3 text-gray-200">
        offre un merveilleux cadeau à{" "}
        <span className="font-semibold text-yellow-300">{receiver}</span>{" "}
        🎅
      </p>
      <img
        className="absolute bottom-[-25px] right-[-25px] w-32 h-32"
        src="gift.png"
        alt="gift"
      />
    </div>
  );
};

export default AssignmentCard;
