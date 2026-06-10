import React from "react";

const Card = (blogCard) => {
  console.log(blogCard);

  return (
    <div className="card">
      <img src={blogCard.img} alt={blogCard.title} />

      <h2>{blogCard.title}</h2>

      <p>{blogCard.description}</p>

      {blogCard.actions}
    </div>
  );
};

export default Card;
