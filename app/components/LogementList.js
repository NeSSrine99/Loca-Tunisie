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
    
      <main className="grid md:grid-cols-3 lg:gap-7 sm:grid-cols-2 grid-cols-1 lg:px-[120px] px-4 py-[150px] ">
      {logements.map((longement) => (
        <LogementCard key={longement.id} {...longement} />
      ))}
    </main>   
 
  )
}

export default LogementList