import React from "react";

const IconCard = (cardProps) => {
  return (
    <div className="border-t border-t-(--divider) flex flex-col lg:gap-8 pt-10">
      <div className="w-12 h-12 flex items-center ">{cardProps.icon}</div>

      <h3 className="text-2xl flex-1">{cardProps.title}</h3>

      <p className="text-(--gray-6f)">{cardProps.description}</p>
    </div>
  );
};

export default IconCard;
