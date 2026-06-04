import React from "react";

function CardSkeleton() {
  return (
    <div className="rounded-2xl overflow-clip mb-4 animate-pulse">
      <div className="w-full h-48 bg-gray-300"></div>
    </div>
  );
}

export default CardSkeleton;
