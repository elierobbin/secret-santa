import React from "react";
import AssignmentCard from "./AssignmentCard"; 

export function AssignmentDisplay({ assignments }) {
  return (
    <div className="flex flex-col gap-4 w-full">
      {assignments.map((assignment, index) => (
        <AssignmentCard
          key={index}
          giver={assignment.giver}
          receiver={assignment.receiver}
        />
      ))}
    </div>
  );
}
