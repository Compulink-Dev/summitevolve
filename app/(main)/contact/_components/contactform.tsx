'use client'
import { Color } from '@/constants/color'
import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Link from 'next/link'
import { Textarea } from '@/components/ui/textarea'

const FormSchema = z.object({
    firstName: z.string().min(1, 'First name is required').email('Invalid user details'),
    lastName: z.string().min(1, 'Last name is required').email('Invalid user details'),
    email: z.string().min(1, 'Email is required').email('Invalid email'),
    password: z.string().min(1, 'Password is required').min(8, 'Password must have more tha 8 characters'),
    message: z
        .string()
        .min(10, {
            message: "Message must be at least 10 characters.",
        })
        .max(160, {
            message: "Message must not be longer than 30 characters.",
        }),
})


function ContactForm() {

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            email: "",
            password: "",
            firstName: "",
            lastName: "",
            message: "",
        },
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
        console.log(data);
    }

    return (
        <div className="">
            <div className="container w-full mx-auto max-w-7xl my-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col justify-center items-center w-full">
                    <h1 className="font-bold text-2xl md:text-4xl text-purple-400">
                        Please Send Us Your Enquiry
                    </h1>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full mx-2 md:mx-0 space-y-6 p-4 md:p-8 rounded mb:0 md:mb-8">
                            <p className="text-lg font-bold text-white">Login to your account</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                <FormField
                                    control={form.control}
                                    name="firstName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className='text-purple-900'>First Name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter your first name" {...field} className="outline-none w-full" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="lastName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className='text-purple-900'>Last Name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter your last name" {...field} className="outline-none w-full" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem className=''>
                                        <FormLabel className='text-purple-900'>Email</FormLabel>
                                        <FormControl className='w-full'>
                                            <Input placeholder="Enter your email" {...field} className="outline-none" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="message"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className='text-purple-900'>Message</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                placeholder="Send message"
                                                className="resize-none"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <Button type="submit" className="bg-purple-900 hover:bg-purple-500">Send Message</Button>

                        </form>

                    </Form>
                </div>


                <div className="container px-4 md:px-0 mx-auto max-w-7xl flex flex-col justify-center items-center">
                    <div className="border border-purple-600 rounded-lg w-full">
                        <div className="border-b-2 border-purple-600  max-w-7xl container mx-auto text-center p-4">
                            <h1 className="font-bold text-lg text-purple-500 ">
                                Our Contact Details
                            </h1>
                        </div>

                        <div className="max-w-7xl container mx-auto py-4 px-12 border-b-2 border-purple-200">
                            <h1 className="text-sm" style={{ color: Color.text }}>info@compulink.co.zw</h1>
                        </div>
                        <div className="max-w-7xl container mx-auto py-4 px-12 border-b-2 border-purple-200">
                            <h1 className="text-sm" style={{ color: Color.text }}>www.compulink.co.zw</h1>
                        </div>
                        <div className=" max-w-7xl container mx-auto py-4 px-12">
                            <h1 className="text-sm font-bold text-purple-500">Office Address</h1>
                        </div>
                        <div className=" max-w-7xl container mx-auto py-4 px-12 border-b-2 border-purple-200">
                            <h1 className="text-sm" style={{ color: Color.text }}>
                                313 Samora Machel East, Eastlea, Harare Zimbabwe
                            </h1>
                        </div>
                        <div className=" max-w-7xl container mx-auto py-4 px-12">
                            <h1 className="text-sm font-bold text-purple-500">Our Contact Details</h1>
                        </div>
                        <div className=" max-w-7xl container mx-auto py-4 px-12 border-b-2 border-purple-200">
                            <h1 className="text-sm" style={{ color: Color.text }}>Tel: +263 242 494407, 08677 105 028</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactForm