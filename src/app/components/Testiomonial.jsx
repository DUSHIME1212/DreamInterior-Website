import React from 'react'
import {Testimonial} from "../../../public/utils/utils";
import Image from "next/image";

const Testiomonial = () => {
    return (
        <div className={'min-h-32 py-16 flex items-center justify-center px-16 md:px-32 lg:px-32'}>
            <div className={'bg-lighttan size-full min-h-52 rounded-3xl py-16 flex flex-col items-center justify-center'}>
                <h1 className={'text-7xl font-michelle'}>What people think about us</h1>
                <div className={'flex gap-4 p-8  justify-between w-full'}>
                    {
                        Testimonial.map((item,i) => (
                            <div key={i} className={'w-1/3 rounded-3xl bg-white flex flex-col gap-4 min-h-56 p-8'}>
                                <div className={'flex items-center gap-8'}>
                                    <div className={'size-16 rounded-full overflow-clip relative'}><Image src={item.img} alt={''} fill/></div>
                                    <div>
                                        <h1 className={'text-3xl'}>{item.name}</h1>
                                        <p>{item.location}</p>
                                    </div>
                                </div>
                                <p className={'text-xl'}>{item.testimonail}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
export default Testiomonial
