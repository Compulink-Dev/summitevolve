import { Button } from '@/components/ui/button'
import React from 'react'

interface GoogleProps {
    children: React.ReactNode

}



function GoogleSignInButton({ children }: GoogleProps) {

    const loginwithGoogle = () => console.log('login with google');


    return (
        <Button
            onClick={loginwithGoogle}
            className='w-full '>
            {children}
        </Button>
    )
}

export default GoogleSignInButton