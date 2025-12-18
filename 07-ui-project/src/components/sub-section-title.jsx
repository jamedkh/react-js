import React from "react";

const SubSectionTitle = (subTitleProps) => {
  return (
    <>
      <span className="caption-font text-(--primary-300) py-4 inline-block">
        {subTitleProps.caption}
      </span>
      <h2 className="lg:text-6xl text-4xl lg:py-14 py-8">
        {subTitleProps.title}
      </h2>
      <p className="text-(--gray-6f) text-lg">{subTitleProps.description}</p>
    </>
  );
};

export default SubSectionTitle;
