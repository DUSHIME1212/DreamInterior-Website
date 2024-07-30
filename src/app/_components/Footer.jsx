import React from 'react'
import Image from "next/image";
import {Explore, Navs, Socials} from "../../../public/utils/utils";
import Link from "next/link";

const Footer = () => {
    return (
        <div className={'flex mt-8 flex-row justify-between'}>
            <div className={'w-1/4 flex flex-col gap-4'}>
                <div className={'w-32 h-16 relative'}><Image src={'/logos/img.png'} className={'object-contain'}
                                                             alt={''} fill/></div>
                <h1 className={'text-3xl'}>We are the leading architect and interior design firm in the world.</h1>
                <div className={'w-full flex gap-4'}>{Socials.map((item, i) => (
                    <div className={'size-4 relative'} key={i}><Image src={item.logo} alt={''} className={'object-contain'}
                                                              fill/></div>
                ))}</div>
            </div>
            <div className={' flex flex-col gap-4'}>
                <h1 className={'text-3xl font-semibold'}>Pages</h1>
                <div className={'flex gap-4 flex-col'}>
                    {Navs.map((item, i) => (
                        <Link href={''} className={'text-xl'} key={i}>{item.title}</Link>
                    ))}
                </div>
            </div>
            <div className={' flex flex-col gap-4'}>
                <h1 className={'text-3xl font-semibold'}>Explore</h1>
                <div className={'flex gap-4 flex-col'}>
                    {Explore.map((item, i) => (
                        <Link href={''} className={'text-xl'} key={i}>{item.title}</Link>
                    ))}
                </div>
            </div>
            <div className={' flex flex-col gap-4'}>
                <h1 className={'text-3xl font-semibold'}>Contact</h1>
                <div className={'flex gap-4 flex-col'}>
                    <Link href={''} className={'hover:text-tan duration-700'}>53, East Birchwood Ave. Brooklyn, New York 11201, USA.</Link>
                    <Link href={''} className={'hover:text-tan duration-700'}>contact@interno.com</Link>
                    <Link href={''} className={'hover:text-tan duration-700'}>(123) 456 - 7890</Link>
                </div>
            </div>
        </div>
    )
}
export default Footer
