import React from 'react'
import {InteriorDesignSections} from "../../../public/utils/utils";
import Link from "next/link";

const Servicesection = () => {
    return (
        <div className={'min-h-32 py-16 flex bg-lighttan items-center justify-center px-16 md:px-32 lg:px-32'}>
            <div className={'w-full flex gap-8'}>
                {InteriorDesignSections.map((section, index) => (
                    <div key={index} className={'w-1/3 hover:bg-tan text-center hover:text-white rounded-3xl duration-700 min-h-52 flex flex-col p-8 items-center justify-between'}>
                        <h1 className={'size-fit text-3xl'}>{section.title}</h1>
                        <p>{section.description}</p>
                        <Link className={'size-fit hover:underline'} href={'/'}>View more</Link>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Servicesection
