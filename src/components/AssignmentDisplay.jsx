export function AssignmentDisplay({ assignments }) {
  return (
    <div className="grid grid-cols-1 px-4 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {assignments.map((assignment, index) => (
        <div
          key={index}
          className="relative overflow-hidden bg-gradient-to-br from-green-800 to-green-600 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-green-900"
        >
          <div className="flex items-center space-x-3">
            <span className="text-4xl">🎄</span>
            <h3 className="text-xl font-bold text-white">{assignment.giver}</h3>
          </div>
          <p className="mt-3 text-gray-200">
            offre un merveilleux cadeau à{" "}
            <span className="font-semibold text-yellow-300">
              {assignment.receiver}
            </span>{" "}
            🎅
          </p>
          <img
            className="absolute bottom-[-25px] right-[-25px] w-32 h-32"
            src="gift.png"
            alt="gift"
          />
        </div>
      ))}
    </div>
  );
}
