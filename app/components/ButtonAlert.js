"use client";

import React from "react";
import logements from "../data/logements";

const ButtonAlert = ({ logementId }) => {
  const logement = logements.find((a) => a.id === parseInt(logementId, 10));

  if (!logement) {
    return (
      <div className="text-center mt-10 text-red-500">Logement non trouvé.</div>
    );
  }

  const handleOrder = () => {
    window.alert("Réservation confirmée.");
  };

  return (
    <div className="text-center mt-4">
      <button
        onClick={handleOrder}
        className="bg-primary text-white px-6 py-2 rounded-md hover:bg-secondary transition"
      >
        Réserver
      </button>
    </div>
  );
};

export default ButtonAlert;
