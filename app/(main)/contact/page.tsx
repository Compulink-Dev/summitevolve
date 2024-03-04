import React from 'react'
import Hero from './_components/hero'
import Layout from '@/components/layout'
import ContactForm from './_components/contactform'


function Contact() {
    return (
        <Layout>
            <div className=''>
                <Hero />
                <div className="">
                    <ContactForm />
                </div>
            </div>
        </Layout>
    )
}

export default Contact