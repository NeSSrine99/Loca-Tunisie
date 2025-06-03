import React from 'react'
import LogementCard from './LogementCard'
import logements from '../data/logements'


export const metadata = {
  title: "Longements| Discover Beautiful LocaTunisie  ",
  description:
    "Browse fascinating apartments, villas, and more with great views and affordable prices. Find your next rental home now!",
  keywords: [
    "Loca Tunisie",
    "apartments",
    "villas",
    "maison",
    "studio",
  ],
};

const LogementList = () => {
  return (
    
      <main className="grid lg:grid-col-3 md:grid-cols-2 grid-cols-1 items-center justify-center flex-wrapmd:gap-6 gap-4 lg:px-[120px] sm:px-[60px] px-4  py-[100px]">
      {logements.map((longement) => (
        <LogementCard key={longement.id} {...longement} />
      ))}
    </main>   
 
  )
}

export default LogementList