import React from 'react'
import Image from "next/image";
import { Projects, Socials } from "../../../public/utils/utils";
import Footer from '../components/Footer';
import Link from 'next/link';

const Page = () => {
    return (
        <div className={'min-h-72 py-16 flex gap-8 flex-col items-center justify-center px-16 md:px-32 lg:px-32'}>
            <div className={'min-h-72 w-full relative bg-bluegray'}>
                <Image src={'/Projects/65bb1bd8cf9330922c3d8b91_project-image-4.jpg'} alt={''}
                    className={'object-cover'} fill />
                <div
                    className={'w-72 min-h-32 p-8 flex flex-col gap-4 text-center rounded-xl bg-white z-10 absolute left-1/2 -bottom-16 -translate-x-1/2'}>
                    <h1 className={'text-3xl  font-michelle'}>Projects</h1>
                    <p className={'text-xl'}>Home / Projects</p>
                </div>
            </div>
            <div className='w-full mt-8 grid gap-4 p-4 grid-rows-3 grid-cols-2'>
                {Projects.slice(0, 6).map((project, i) => (
                    <Link href={`/project/${i}`} key={i} className={'w-full min-h-96 group p-4 flex flex-col gap-4 relative overflow-hidden'}>
                        <div className='relative min-h-[38rem] rounded-tr-[12rem] overflow-clip'>
                            <Image src={project.image} className='object-cover group-hover:scale-110 duration-700' alt="alt" fill />
                        </div>
                        <div className='flex  justify-between'>
                            <div>
                                <h2 className={'text-5xl font-michelle'}>{project.title}</h2>
                                <h2 className={'text-xl '}>{project.category}</h2>
                            </div>
                            <div className='size-16 rounded-full group-hover:bg-tan duration-700 grid place-items-center'>
                                <Image src="/right.png" alt="alt" width={16} height={16} />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            <Footer />
        </div>
    )
}
export default Page
