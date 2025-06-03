import React from "react";
import InscriptionForm from "../components/InscriptionForm";

export const metadata = {
  title: "Formulaire d'inscription | Loca Tunisie",
  description:
    "Page de formulaire d'inscription pour créer un compte sur Loca Tunisie.",
  keywords: ["inscription", "formulaire", "créer un compte", "mon site"],
  openGraph: {
    type: "website",
    title: "Formulaire d'inscription | Loca Tunisie",
    description:
      "Page de formulaire d'inscription pour créer un compte sur Loca-Tunisie.",
  },
};

const page = () => {
  return (
    <main>
      <InscriptionForm />
    </main>
  );
};

export default page;
