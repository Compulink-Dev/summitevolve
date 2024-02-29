'use client'
import Title from '@/components/title'
import { Button } from '@/components/ui/button'
import axios from 'axios'
import { CornerUpLeft, Facebook } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import { FaGoogle } from 'react-icons/fa6'
import { PiMicrosoftOutlookLogoFill } from "react-icons/pi"

function Login() {
    const router = useRouter();
    const [loading, setLoading] = React.useState(false);
    const [user, setUser] = React.useState({
        email: "",
        password: "",
    })


    const onLogin = async () => {
        try {
            const response = await axios.post("/api/users/login", user);
            router.push("/payment");

        } catch (error: any) {
            console.log("Login failed", error.message);
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className='bg-purple-400 py-8 flex items-center justify-center'>
            <div className="border border-purple-950 w-1/2 m-4 rounded flex flex-col md:flex-row shadow-lg">
                <div className="flex-1 bg-purple-950 rounded-tl rounded-bl flex items-center justify-center">
                    <Image src={'/logo.png'} alt='' width={300} height={300} />
                </div>
                <div className="flex-1 flex flex-col items-start p-4 justify-start">
                    <div className="flex items-start justify-between w-full">
                        <Title color='text-white text-2xl' title='Register for the summit' />
                        <Button variant={'outline'} className='w-12 h-12 rounded-full bg-purple-900'>
                            <CornerUpLeft className='w-8 h-8 text-purple-300' />
                        </Button>
                    </div>
                    <div className="mt-8 md:mt-20 flex flex-col gap-4 items-center justify-center w-full">
                        <input
                            id='email'
                            type='text'
                            value={user.email}
                            onChange={(e) => setUser({ ...user, email: e.target.value })}
                            placeholder='Email'
                            className='border border-purple-600 bg-transparent placeholder:text-purple-100 outline-none px-4 py-2 rounded w-full' />
                        <input
                            id='password'
                            type='password'
                            value={user.password}
                            placeholder='Password'
                            onChange={(e) => setUser({ ...user, password: e.target.value })}
                            className='border border-purple-600 bg-transparent placeholder:text-purple-100 outline-none px-4 py-2 rounded w-full' />
                        <div className="flex items-start justify-start">
                            <Link href={'/forgot-password'} className="text-left text-sm text-white">Forgot Password</Link>
                        </div>
                        <Button
                            onClick={onLogin}
                            className='bg-purple-700 w-full'>
                            Log into your account
                        </Button>
                        <div className="">
                            <p className="text-white text-sm">{"Don't have an account? "}
                                <span className="">
                                    <Link href={'/register'}>Sign up</Link>
                                </span>
                            </p>

                        </div>
                    </div>
                    <div className="mt-4 flex gap-6 items-center justify-center w-full">
                        <Button variant={'outline'} className='h-12 w-12 rounded-full bg-blue-800 text-white'>{<Facebook />}</Button>
                        <Button variant={'outline'} className='h-12 w-12 rounded-full text-2xl bg-red-600 text-white'><FaGoogle /></Button>
                        <Button variant={'outline'} className='h-12 w-12 rounded-full text-2xl bg-blue-500 text-white'><PiMicrosoftOutlookLogoFill /></Button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Login