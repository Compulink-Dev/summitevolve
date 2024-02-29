import React, { ReactNode } from 'react'
import AuthNavbar from './_components/navbar'

function AuthLayout({ children }: { children: ReactNode }) {
    return (
        <div className=''>
            <div className="">
                <AuthNavbar />
                <div className="py-8">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default AuthLayout