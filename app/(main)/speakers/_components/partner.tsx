'use client'
import Subtitle from '@/components/subtitle'
import Title from '@/components/title'
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



const Card = () => {



    return (
        <Link href={'/speakers/speaker'} className="border border-purple-700 rounded h-[400px] hover:shadow-2xl w-full">
            <div className="h-3/5 flex items-center justify-center">
                <MdPerson className='w-[200px] h-[200px] text-gray-500' />
            </div>
            <hr className='border border-purple-600' />
            <div className="text-center mt-4">
                <p className="font-bold text-lg">Name</p>
                <p className="text-gray-500">Position</p>
                <p className="font-bold">Department</p>
            </div>
        </Link>
    )
}

function Partner() {

    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#ffffff");
    return (
        <div className='mx-16 my-8'>
            <div className="">
                <Title color='text-purple-600' title='Guest Speakers' />
                <Subtitle color='text-gray-500' title='We have identified our speakers from the industry’s thought leaders, influencer, and professionals within Africa and beyond the borders of Africa. We believe their experience and expertise will go a long way in bringing relevance that will help connect with the audience and the themes we set.' />
            </div>
            <div className="flex w-full my-40 items-center justify-center text-lg text-purple-900">
                <div className="flex flex-col items-center justify-center">
                    <p className="mb-4">Speakers are loading soon</p>
                    <PulseLoader
                        color="#960796"
                        loading={loading}
                        cssOverride={override}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                </div>
            </div>
            {/* <div className="my-8 grid grid-col-1 md:grid-cols-4 gap-4 flex-wrap">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div> */}
        </div>
    )
}

export default Partner