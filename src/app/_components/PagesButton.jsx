"use client"
import React, {useState} from 'react'
import Link from "next/link";

const PagesButton = () => {

    const [toogle, setToogle] = useState(true);

    function toggleToogle() {
        setToogle(prev => !prev);
    }

    return (
        <div>
            <Link href={''} onMouseEnter={toggleToogle}>Pages</Link>
            {
                toogle &&
                <div className={'absolute top-20 right-0 flex flex-col text-xl gap-4 rounded-3xl bg-lighttan p-4 min-w-36'}>
                    <Link href={'/project'}>Our Projects</Link>
                    <Link href={''}>Professionals</Link>
                    <Link href={''}>Services Single</Link>
                    <Link href={''}>Pricing Plan</Link>
                    <Link href={''}>Blog</Link>
                    <Link href={''}>FAQ</Link>
                </div>
            }
        </div>
    )
}
export default PagesButton
