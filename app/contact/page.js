import React from "react";
import ContactForm from "../components/ContactForm";

export const metadata = {
  title: "Contact | Loca-Tunisie",
  description: "Page de contact pour nous joindre chez Loca-Tunisie.",
  keywords: [
    "contact",
    "Loca-Tunisie",
    "envoyer un message",
    "formulaire de contact",
  ],
  openGraph: {
    type: "website",
    url: "https://loca-tunisie-three.vercel.app/contact",
    title: "Contactez-nous | Loca-Tunisie",
    description:
      "Envoyez-nous un message via notre page de contact officielle.",
  },
};

const page = () => {
  return (
    <main>
      <ContactForm />
    </main>
  );
};

export default page;
