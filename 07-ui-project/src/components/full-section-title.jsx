import React from "react";

const FullSectionTitle = (titleProps) => {
  return (
    <>
      <div className="container mx-auto">
        <span className="caption-font text-(--primary-300) py-4 inline-block">
          {titleProps.caption}
        </span>
        <h2 className="lg:text-8xl text-6xl lg:py-20 py-8">
          {titleProps.title}
        </h2>
        <p className="text-(--gray-6f) text-sm">{titleProps.description}</p>
      </div>
    </>
  );
};

export default FullSectionTitle;
