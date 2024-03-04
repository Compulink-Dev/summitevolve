'use client'
import React, { CSSProperties, useState } from "react";
import { partners } from "@/constants/data";
import Image from "next/image";
import mutual from '@/public/home/old-mutual-logo.png'
import Title from "./title";
import PulseLoader from "react-spinners/PulseLoader";


const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};


function Partner({ title, image }: { title?: string, image?: string }) {
    return (
        <div className="border-2 h-48 border-purple-800 rounded-md flex justify-center items-center hover:shadow-lg hover:cursor-pointer">
            <Image unoptimized src={mutual} alt="" width={500} height={500} />
        </div>
    );
}

function Partners() {
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#ffffff");
    return (
        <div className="bg-purple-100 py-8 px-4 ">
            <div className="container mx-auto max-w-7xl">
                <Title title={'Event Partner'} color="text-purple-600" />


                <div className="flex flex-col items-center justify-center my-20">
                    <p className="mb-4 text-lg text-purple-900">Partners are loading soon</p>
                    <PulseLoader
                        color="#960796"
                        loading={loading}
                        cssOverride={override}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                </div>

                {/* <div className="container w-full  mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
                            {
                                partners.map((partner) => (
                                    <Partner key={partner} />
                                ))
                            }
                        </div> */}


            </div>
        </div>
    );
}

export default Partners;
