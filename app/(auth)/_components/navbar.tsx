import Image from 'next/image'
import React from 'react'

function AuthNavbar() {
    return (
        <div className='w-full bg-purple-400 py-2 text-white'>
            <div className="flex flex-row items-center justify-center gap-4 md:gap-12">
                <Image src={'/logo.png'} alt='logo' width={200} height={200} className='w-24 md:w-40' />
                <div className="items-center h-full justify-center gap-2 hidden md:flex">
                    <p className="text-sm md:text-2xl font-bold">Evolve A.I</p>
                    <div className='bg-white h-8 md:h-14 w-[0.5px]' />
                    <p className="text-sm md:text-2xl font-bold">Evolve Cyber</p>
                    <div className='bg-white h-12 md:h-14 w-[0.5px]' />
                    <p className="text-sm md:text-2xl font-bold">Evolve Cloud</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <p className="font-bold text-xs md:text-lg">01 - 02 May 2024</p>
                    <p className="font-bold text-xs md:text-lg">Harare, Zimbabwe</p>
                </div>
            </div>
        </div>
    )
}

export default AuthNavbar