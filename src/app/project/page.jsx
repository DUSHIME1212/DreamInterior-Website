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
                    <h1 className={'text-3xl  font-michelle'}>Projects</h1>
                    <p className={'text-xl'}>Home / Projects</p>
                </div>
            </div>
        </div>
    )
}
export default Page
