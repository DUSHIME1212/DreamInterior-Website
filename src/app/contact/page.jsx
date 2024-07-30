import React from 'react'
import Image from "next/image";
import {Socials} from "../../../public/utils/utils";

const Page = () => {
    return (
        <div className={'min-h-72 py-16 flex gap-8 flex-col items-center justify-center px-16 md:px-32 lg:px-32'}>
            <div className={'min-h-72 w-full relative bg-bluegray'}>
                <Image src={'/Projects/65bb1bd8cf9330922c3d8b91_project-image-4.jpg'} alt={''}
                       className={'object-cover'} fill/>
                <div
                    className={'w-72 min-h-32 p-8 flex flex-col gap-4 text-center rounded-xl bg-white z-10 absolute left-1/2 -bottom-16 -translate-x-1/2'}>
                    <h1 className={'text-3xl  font-michelle'}>Contact us</h1>
                    <p className={'text-xl'}>Home / Contact</p>
                </div>
            </div>
            <div className={'w-full'}>
                <div className={'w-1/4 p-8 flex flex-col text-bluegray gap-4 rounded-3xl min-h-96 bg-tan'}>
                    <div className={'font-michelle text-2xl'}>
                        <span>info@yourdomain.com</span>
                    </div>
                    <div className={'font-michelle text-2xl'}>
                        <span>+1 (378) 400-1234</span>
                    </div>
                    <div className={'font-michelle text-2xl'}>
                        <span>www.interno.com</span>
                    </div>
                    <div className={'flex flex-row'}>
                        {Socials.map((item, i) => (
                            <div key={i} className={'size-4 relative'}>
                                <Image src={item.logo} className={'object-contain'} alt={''} fill/>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Page
