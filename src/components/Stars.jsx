import React from "react";

const ratingDescriptions = [
  "Básico",
  "Intermedio Bajo",
  "Intermedio Alto",
  "Avanzado",
  "Experto"
];

export const Stars = ({ rating }) => {
  // Array of 5 elements representing the stars
  const stars = Array.from({ length: 5 }, (_, index) => {
    const starClass = index < rating ? 'star star-filled' : 'star star-empty';
    const description = ratingDescriptions[index]; // Get the description based on index

    return (
      <div className="star-container" key={index}>
        <span className={starClass}>★</span>
        <span className="tooltip">{description}</span>
      </div>
    );
  });

  return <div>{stars}</div>;
};
