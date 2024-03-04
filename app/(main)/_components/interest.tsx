import Title from '@/components/title'
import { interests } from '@/constants/data'
import React from 'react'

interface InterestProps {
    imageUrl?: string
    title: string
    subtitle: string
}


const Card = ({ imageUrl, title, subtitle }: InterestProps) => {
    return (
        <div className="bg-[url('/purple3.jpg')] border w-full md:w-1/5  h-[150px] text-center py-4 object-contain rounded">
            <Title color='text-purple-400 text-6xl' title={title} />
            <Title color='text-white text-lg' title={subtitle} />
        </div>
    )
}

function Interest() {
    return (
        <div className='m-8'>
            <div className="text-center">
                <Title color='text-purple-600' title='The Place to be' />
                <p className="text-gray-500 mt-2 mx-8 text-sm">
                    {"You can't beat Evolve I.C.T Summit for size, depth and opportunity: we're truly the continent's most influential tech event. Don't miss out on being part of Africa's largest tech event this May!"}
                </p>
            </div>
            <div className="flex items-center justify-center mt-8 gap-4 flex-wrap">
                {
                    interests.map((interest) => (
                        <Card title={interest.title} subtitle={interest.subtitle} key={interest.id} />
                    ))
                }
            </div>
        </div>
    )
}

export default Interest