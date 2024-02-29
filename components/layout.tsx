import React from 'react'
import Navbar from '../app/(main)/_components/navbar';
import Footer from '../app/(main)/_components/footer';
import Header from '@/app/(main)/_components/header';
import Scroll from '@/app/(main)/_components/scroll';

function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className=''>
            <Header />
            <div className="pt-20 md:pt-44">
                {children}
                <Scroll />
            </div>
            {<Footer />}
        </div>
    )
}

export default Layout