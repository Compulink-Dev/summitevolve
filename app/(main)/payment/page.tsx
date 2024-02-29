import Title from '@/components/title'
import { Button } from '@/components/ui/button'
import React from 'react'

interface CardProps {
    title: string,
    price: string,
    children: React.ReactNode

}

const Card = ({ title, price, children }: CardProps) => {
    return (
        <div className="border h-auto pb-8 w-[200px] text-white">
            <div className="bg-purple-900 h-10">
                <p className="text-center py-2 text-lg font-bold">{title}</p>
            </div>

            <div className="bg-purple-600 h-20 flex flex-col items-center justify-center">
                <p className="text-center font-bold text-lg">{`$${price}.00`}</p>
                <p className="text-center -m-2 text-xs">{`One time payment`}</p>
            </div>
            {
                children
            }

        </div>
    )
}

function Checkout() {



    return (
        <div className='bg-gradient-to-r h-auto md:h-screen from-indigo-500 via-purple-500 to-purple-400 flex items-center justify-center'>
            <div className="border h-auto w-auto flex p-8 rounded gap-4">
                <div className="">
                    <Title color='text-white text-lg' title='Features' />
                    <p className=""></p>
                </div>
                <div className="flex items-center justify-center gap-8 flex-wrap">
                    <Card title='SME' price='100'>
                        <div className="flex w-full gap-4 flex-col mt-4 items-center justify-center">
                            <div className="w-full">
                                <p className="text-sm text-center">One seat</p>
                                <hr className='h-full' />
                            </div>
                            <div className="w-full">
                                <p className="text-sm text-center">One seat</p>
                                <hr className='h-full' />
                            </div>
                            <div className="w-full">
                                <p className="text-sm text-center">One seat</p>
                                <hr className='h-full' />
                            </div>
                        </div>

                        <div className="flex items-center justify-center mt-4">
                            <form action='https://www.paynow.co.zw/OnlineShopping/AddItem' target='PayNowShoppingCart'><input type='hidden' name='name' value='SME' /><input type='hidden' name='amount' value='100.00' /><input type='hidden' name='shipping' value='0' /><input type='hidden' name='hash' value='5E2A05863DE62FF45B262C0CCA2C4DBA0EB6BFCF3486DB19AD8FC40E0717025FBCF101E6B4DCA8D87219FA896437F41B21F87EF3C7C9B9620A32455324069135' /><input type='hidden' name='api_id' value='17084' />
                                <Button className='mt-4 w-[150px] bg-purple-950 hover:bg-purple-400'>Checkout</Button>
                            </form>
                        </div>
                    </Card>

                    <Card title='Corporate' price='150'>
                        <div className="flex w-full gap-4 flex-col mt-4 items-center justify-center">
                            <div className="w-full">
                                <p className="text-sm text-center">One seat</p>
                                <hr className='h-full' />
                            </div>
                            <div className="w-full">
                                <p className="text-sm text-center">One seat</p>
                                <hr className='h-full' />
                            </div>
                            <div className="w-full">
                                <p className="text-sm text-center">One seat</p>
                                <hr className='h-full' />
                            </div>
                        </div>

                        <div className="flex items-center justify-center mt-4">
                            <form action='https://www.paynow.co.zw/OnlineShopping/AddItem' target='PayNowShoppingCart'><input type='hidden' name='name' value='Corporate' /><input type='hidden' name='amount' value='150.00' /><input type='hidden' name='shipping' value='0' /><input type='hidden' name='hash' value='D85951F9E0850CD2EBE93D525AB00898FBC7EF02E01E64EA2FBD9BCA0F092959AB35BDD5AE30521523FD7EAA0F402CA9B5BB5BAF6ED9D00FD88E9EEFAA364071' /><input type='hidden' name='api_id' value='17084' />
                                <Button className='mt-4 w-[150px] bg-purple-950 hover:bg-purple-400'>Checkout</Button>
                            </form>
                        </div>
                    </Card>

                    <Card title='Students' price='50'>
                        <div className="flex w-full gap-4 flex-col mt-4 items-center justify-center">
                            <div className="w-full">
                                <p className="text-sm text-center">One seat</p>
                                <hr className='h-full' />
                            </div>
                            <div className="w-full">
                                <p className="text-sm text-center">One seat</p>
                                <hr className='h-full' />
                            </div>
                            <div className="w-full">
                                <p className="text-sm text-center">One seat</p>
                                <hr className='h-full' />
                            </div>
                        </div>

                        <div className="flex items-center justify-center mt-4">
                            <form action='https://www.paynow.co.zw/OnlineShopping/AddItem' target='PayNowShoppingCart'><input type='hidden' name='name' value='Students' /><input type='hidden' name='amount' value='50.00' /><input type='hidden' name='shipping' value='0' /><input type='hidden' name='hash' value='8CAAB94E51AEABBB971115CCA3E47D3F29F0DD2A391F5E83A4D9620552A993E37AAF722C0A32C5AF97E51BEF8E2FF8100FEFC2B062F3CBC06445AC936E855F07' /><input type='hidden' name='api_id' value='17084' />
                                <Button className='mt-4 w-[150px] bg-purple-950 hover:bg-purple-400'>Checkout</Button>
                            </form>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Checkout