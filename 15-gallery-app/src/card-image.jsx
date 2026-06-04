import React from "react";

const CardImage = ({ item }) => {
  return (
    <a href={item.url} target="_blank" rel="noopener noreferrer">
      <img
        src={item.download_url}
        alt={item.author}
        className="rounded-2xl overflow-clip mb-4"
        loading="lazy"
        decoding="async"
        fetchPriority="low"
      />
    </a>
  );
};

export default CardImage;
