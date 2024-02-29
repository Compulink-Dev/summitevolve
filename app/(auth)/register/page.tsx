"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Button } from "@/components/ui/button";
import Image from "next/image";


export default function RegisterPage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: "",
        confirm_password: ""
    })


    const onSignup = async () => {
        try {
            const response = await axios.post("/api/users/signup", user);
            router.push("/login");

        } catch (error: any) {
            console.log("Signup failed", error.message);
        }
    }


    return (
        <div className="w-screen py-20 bg-purple-300">
            <div className="flex justify-center items-center">
                <div className="border border-purple-800 rounded w-full md:w-3/6 p-8 flex flex-col gap-2">
                    <div className="flex items-end gap-4">
                        <Image src={'/logo.png'} alt="" width={100} height={100} />
                        <p className="text-xs md:text-sm text-thin text-purple-600">Create an account to book a seat</p>
                    </div>
                    <label htmlFor="username" className="text-thin text-white text-sm">Username</label>
                    <input
                        id="username"
                        type="text"
                        value={user.username}
                        onChange={(e) => setUser({ ...user, username: e.target.value })}
                        placeholder="username"
                        className="border border-purple-800 bg-transparent text-white placeholder:text-slate-300 outline-none px-4 py-2 rounded"
                    />
                    <label htmlFor="email" className="text-thin text-white text-sm">Email</label>
                    <input
                        id="email"
                        type="text"
                        value={user.email}
                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                        placeholder="email"
                        className="border border-purple-800 bg-transparent text-white placeholder:text-slate-300 outline-none px-4 py-2 rounded"
                    />
                    <label htmlFor="password" className="text-thin text-white text-sm">Password</label>
                    <input
                        id="password"
                        type="password"
                        value={user.password}
                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                        placeholder="password"
                        className="border border-purple-800 bg-transparent text-white placeholder:text-slate-300 outline-none px-4 py-2 rounded"
                    />
                    <label htmlFor="password" className="text-thin text-white text-sm">Password</label>
                    <input
                        id="confrim_password"
                        type="password"
                        value={user.confirm_password}
                        onChange={(e) => setUser({ ...user, confirm_password: e.target.value })}
                        placeholder="Confirm Password"
                        className="border border-purple-800 bg-transparent text-white placeholder:text-slate-300 outline-none px-4 py-2 rounded"
                    />
                    <Button onClick={onSignup} className="bg-purple-600 mt-4 hover:bg-purple-400">Sign Up</Button>

                    <p className="text-white text-sm">
                        Already have an account?{""}
                        <span className="font-bold text-purple-600">
                            <Link href="/login">{" "}Login</Link>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    )

}