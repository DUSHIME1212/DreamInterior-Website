import React from 'react'
import Link from "next/link";
import {Navs} from "../../../public/utils/utils";
import PagesButton from "../../app/components/PagesButton";

const Navbar = () => {
    return (
        <nav className={'flex py-4 items-center relative justify-between'}>
            <Link href={'/'} className={'text-3xl'}>Interno</Link>
            <div className={'flex gap-4'}>
                {
                    Navs.map((item, i) => (
                        <Link href={item.href} className={'hover:text-tan duration-700'} key={i}>{item.title}</Link>
                    ))
                }
                <PagesButton/>
            </div>
        </nav>
    )
}
export default Navbar
