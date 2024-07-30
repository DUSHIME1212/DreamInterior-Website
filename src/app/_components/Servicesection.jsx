import React from 'react'
import {InteriorDesignSections} from "../../../public/utils/utils";
import Link from "next/link";

const Servicesection = () => {
    return (
        <div className={'min-h-32 py-16 flex items-center justify-center px-16 md:px-32 lg:px-32'}>
            <div className={'w-full flex gap-2'}>
                {InteriorDesignSections.map((section, index) => (
                    <div key={index} className={'w-1/3 min-h-52 hover:bg-tan text-center hover:text-white rounded-3xl duration-700 flex flex-col p-8 items-center justify-between'}>
                        <h1 className={'size-fit font-michelle text-5xl'}>{section.title}</h1>
                        <p>{section.description}</p>
                        <Link className={'size-fit my-4 hover:underline'} href={'/'}>View more</Link>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Servicesection
