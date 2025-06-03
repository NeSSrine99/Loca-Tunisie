import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Banner = () => {
  return (
    <main className="  h-[800px] " >
      <Image src="/images/logement2.jfif" alt='banner' width={500} height={500} className='w-full h-[800px] '  />
        <div className='absolute top-1/2 right-1/2 flex items-center gap-4'>
            <Link href="/logements"><button className='bg-primary p-4 rounded-2xl text-white font-bold'>Voir les logements</button></Link>
            <Link href="/contact"><button className='text-white font-bold'>Contactez-nous</button></Link>
        </div>
    </main>
  )
}

export default Banner