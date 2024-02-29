"use client"

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
import { toast } from "@/components/ui/use-toast"
import Link from "next/link"
import GoogleSignInButton from "@/components/google"

const FormSchema = z.object({
    email: z.string().min(1, 'Email is required').email('Invalid email'),
    password: z.string().min(1, 'Password is required').min(8, 'Password must have more tha 8 characters'),
})



function Login() {

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
        // toast({
        //     title: "You submitted the following values:",
        //     description: (
        //         <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
        //             <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        //         </pre>
        //     ),
        // })
        console.log(data);

    }

    return (
        <div className="flex items-center justify-center">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-full md:w-2/3 mx-2 md:mx-0 space-y-6 bg-purple-400 p-4 md:p-8 rounded mb:0 md:mb-8">
                    <p className="text-lg font-bold text-white">Login to your account</p>
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter your email" {...field} className="outline-none" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter your password" {...field} className="outline-none" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="flex flex-col gap-4">
                        <Button type="submit" className="bg-purple-900 hover:bg-purple-500">Login</Button>
                        <Button variant={'outline'} type="button" className="">Cancel</Button>
                    </div>
                    <div className="mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-100 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-100 text-white">or</div>
                    <GoogleSignInButton>Sign up with google</GoogleSignInButton>
                    <p className="text-center text-sm text-white mt-2">
                        Already have an account, please&nbsp;? {" "}
                        <Link href={'/registry'} className="text-purple-950 font-bold">Sign up</Link>
                    </p>
                </form>

            </Form>
        </div>
    )
}

export default Login