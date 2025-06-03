import Image from "next/image";
import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <main className=" bg-[url(/images/logement1.jpg)] bg-cover bg-center  h-[700px] flex items-center justify-center">
      <div className="flex items-center gap-4">
        <Link href="/logements">
          <button className="bg-primary p-4 rounded-2xl text-white font-bold">
            Voir les logements
          </button>
        </Link>
        <Link href="/contact">
          <button className="text-white font-bold">Contactez-nous</button>
        </Link>
      </div>
    </main>
  );
};

export default Banner;
