import React from "react";

const PointContent = (pointProps) => {
  return (
    <div className="flex gap-7 items-center py-6 border-t border-t-(--divider)">
      <span className="text-(--gray-6f)">{pointProps.index}</span>
      {pointProps.text}
    </div>
  );
};

export default PointContent;
