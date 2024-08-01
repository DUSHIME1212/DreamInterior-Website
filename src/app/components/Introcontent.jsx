import React from 'react'
import Image from "next/image";

const Introcontent = () => {
    return (
        <div className={'min-h-screen py-16 flex items-center justify-center px-16 md:px-32 lg:px-32'}>
            <div className={'flex h-full'}>
                <div className={'w-1/2 flex gap-4 items-start justify-center flex-col p-8'}>
                    <h1 className={'text-7xl font-michelle'}>We Tackle The Most Challenging Designs</h1>
                    <p>The world needs innovators and problem solvers who turn challenges into greater opportunities. We
                        have
                        an insatiable curiosity about transformative trends challenging the status.
                    </p>
                    <div className={'flex flex-row gap-8'}>
                        <div className={'size-16 overflow-clip rounded-full relative'}><Image src={'/hero.jpg'} alt={''} fill/></div>
                        <div>
                            <h1 className={'text-2xl font-semibold'}>+25078123456</h1>
                            <p>Call Us Anytime</p>
                        </div>
                    </div>
                    <button className={'bg-bluegray text-white size-fit rounded-xl p-4'}>
                        <span>Get free estimate</span>
                    </button>
                </div>
                <div className={'h-[42rem] w-1/2 relative overflow-clip rounded-bl-[12rem] rounded-tr-[18rem]'}>
                    <Image src={'/hero.jpg'} className={'object-cover'} alt={''} fill/>
                </div>
            </div>
        </div>
    )
}
export default Introcontent
