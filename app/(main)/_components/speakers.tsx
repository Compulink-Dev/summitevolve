'use client'
import Subtitle from '@/components/subtitle'
import Title from '@/components/title'
import { Button } from '@/components/ui/button'
import { speakers } from '@/constants/data'
import Link from 'next/link'
import React from 'react'
import { MdPerson } from 'react-icons/md'
import { useState, CSSProperties } from "react";
import PulseLoader from "react-spinners/PulseLoader";

const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};


const Speaker = () => {
    return (
        <div className="mx-8 flex justify-between">
            <div className="border border-white w-full h-[400px] rounded text-white">
                <div className="h-4/6 flex items-center justify-center">
                    <MdPerson className='text-[200px] ' />
                </div>
                <hr />
                <div className="p-4 text-center text-sm">
                    <p className="font-bold">Name</p>
                    <p className="">Occupation</p>
                    <p className="font-bold">Company</p>
                </div>
            </div>
        </div>
    )
}

function Speakers() {
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#ffffff");
    return (
        <div className=" bg-purple-600 py-4">
            <div className='m-8'>
                <Title color='text-white' title='Speakers' />
                <Subtitle title='Evolve ICT Summit' color='text-white' />
            </div>

            <div className="flex w-full my-40 items-center justify-center text-lg text-white">
                <div className="flex flex-col items-center justify-center">
                    <p className="mb-4">Speakers are loading soon</p>
                    <PulseLoader
                        color="#ffffff"
                        loading={loading}
                        cssOverride={override}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                </div>
            </div>

            {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-0">
                        {
                            speakers.map((speaker) => (
                                <Speaker key={speaker} />
                            ))
                        }
                    </div> */}

            <div className="flex items-center justify-center my-8">
                <Button className='md:w-1/5 p-6 bg-purple-950 mb-8'>
                    <Link href={'/speakers'}>View all speakers</Link>
                </Button>
            </div>
        </div>
    )
}

export default Speakers