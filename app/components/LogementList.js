import React from "react";
import LogementCard from "./LogementCard";
import logements from "../data/logements";

export const metadata = {
  title: "Longements| Discover Beautiful LocaTunisie  ",
  description:
    "Browse fascinating apartments, villas, and more with great views and affordable prices. Find your next rental home now!",
  keywords: ["Loca Tunisie", "apartments", "villas", "maison", "studio"],
};

const LogementList = () => {
  return (
    <main className="flex justify-center px-4 py-[40px]">
      <div className="grid lg:grid-cols-3 lg:gap-7 sm:grid-cols-2 grid-cols-1 sm:gap-4 lg:px-[120px] px-4 py-[40px] ">
        {logements.map((longement) => (
          <LogementCard key={longement.id} {...longement} />
        ))}
      </div>
    </main>
  );
};

export default LogementList;
