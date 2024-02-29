
import Layout from '@/components/layout'
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import React from 'react'
import { Form } from 'react-hook-form'
import RegForm from './_components/form'

function Registry() {
    return (
        <div className="flex items-center justify-center p-2 md:p-0">
            <div className='h-full p-4 rounded bg-purple-400 w-full md:w-[800px]'>
                <div className="flex flex-col items-center">
                    <p className="text-2xl md:text-4xl text-purple-600 mb-4 font-extrabold">Evolve I.C.T Summit</p>
                    <p className="text-lg md:text-2xl font-semibold text-white">See you on 01-02 May 2024 in Harare</p>
                    <p className="mt-4 text-lg font-bold text-purple-600">Fill in the form below:</p>
                </div>
                <div className="">
                    <RegForm />
                </div>
            </div>
        </div>
    )
}

export default Registry