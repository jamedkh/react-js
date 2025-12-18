import React from "react";

const NumberCard = (numberCardProps) => {
  return (
    <div className="border-t border-t-(--divider) flex flex-col lg:gap-8 gap-4 pt-10">
      <div className="flex items-center lg:text-8xl text-6xl text-(--gray-92) lg:mt-8 mt-0">
        {numberCardProps.number}
      </div>

      <h3 className="text-2xl flex-1">{numberCardProps.title}</h3>

      <p className="text-(--gray-6f)">{numberCardProps.description}</p>
    </div>
  );
};

export default NumberCard;
