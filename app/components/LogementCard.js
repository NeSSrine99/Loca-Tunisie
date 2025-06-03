import Image from "next/image";
import Link from "next/link";
import React from "react";

const LogementCard = ({
  id,
  image = "/images/logement2.jfif",
  nom = "Appartement S+1 à El Menzah 9",
  prix = "1200",
  categorie = "Appartement",
}) => {
  return (
    <Link href={`/logements/${id}`}>
      <div className="border rounded p-2 shadow w-[300px] h-fit border-gray-300 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:shadow-2xl">
        <Image
          src={image}
          alt="logement1"
          width={300}
          height={200}
          className="w-[300px] h-[200px] object-fill rounded"
        />
        <div className="mt-2">
          <h1 className="text-primary font-bold text-xl  whitespace-nowrap overflow-hidden text-ellipsis ">
            {nom}{" "}
          </h1>
          <p className="text-sm text-gray-400">{categorie} </p>
          <p className="text-secondary text-sm font-bold">{prix} TDN</p>
        </div>
      </div>
    </Link>
  );
};

export default LogementCard;
