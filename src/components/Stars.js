import React from "react";

export const Stars = ({ rating }) => {
  // Crea un array de 5 elementos para representar las estrellas
  const stars = Array.from({ length: 5 }, (_, index) => {
    if (index < rating) {
      return (<span key={index} style={{ color: 'gold' }}>★</span>); // Estrella llena
    }
    return (<span key={index} style={{ color: 'lightgray' }}>★</span>); // Estrella vacía
  });

  return <div>{stars}</div>;
};
