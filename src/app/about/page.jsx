import React from 'react'
import Image from "next/image";
import Footer from "@/app/_components/Footer";
import {teamMembers} from "../../../public/utils/utils";

const Page = () => {
    return (
        <div className={'min-h-72 py-16 flex gap-8 flex-col items-center justify-center px-16 md:px-32 lg:px-32'}>
            <div className={'min-h-72 w-full relative bg-bluegray'}>
                <Image src={'/Projects/65bb1bd8cf9330922c3d8aee_blog-image-small-1.jpg'} alt={''} className={'object-cover'} fill/>
                <div className={'w-72 min-h-32 p-8 flex flex-col gap-4 text-center rounded-xl bg-white z-10 absolute left-1/2 -bottom-16 -translate-x-1/2'}>
                    <h1 className={'text-3xl font-michelle'}>About us</h1>
                    <p className={'text-xl'}>Home / About us</p>
                </div>
            </div>
            <div className={'w-full min-h-52 mt-56 rounded-xl p-16 bg-lighttan text-tan text-center'}>
                <h1 className={'text-[16rem] leading-[10rem] font-michelle'}>"</h1>
                <i className={'text-3xl px-16'}>Your Home should tell the story of who you are, and be a Collection of what you Love.</i>
            </div>
            <div className={'w-full flex flex-row justify-between'}>
                <div className={'p-8 py-32 flex flex-col gap-4 w-1/2'}>
                    <h1 className={'text-5xl font-semibold'}>Initial Design</h1>
                    <p>Craft design with the mind of delivering clean
                        water and energy. Building iconic skyscrapers. Planning new cities.
                        Restoring damaged building Connecting people and economies with roads.
                    </p>
                    <button className={'bg-tan text-bluegray size-fit rounded-xl p-4'}>
                        <span>Our concept</span>
                    </button>
                </div>
                <div className={'w-1/2 overflow-clip min-h-32 relative rounded-3xl'}>
                    <Image src={'/Projects/65bb1bd8cf9330922c3d8b90_project-image-3.jpg'} className={'object-cover'} alt={''} fill/>
                </div>
            </div>
            <div className={'w-full flex flex-row-reverse justify-between'}>
                <div className={'p-8 py-32 flex flex-col gap-4 w-1/2'}>
                    <h1 className={'text-5xl font-semibold'}>Initial Design</h1>
                    <p>Craft design with the mind of delivering clean
                        water and energy. Building iconic skyscrapers. Planning new cities.
                        Restoring damaged building Connecting people and economies with roads.
                    </p>
                    <button className={'bg-tan text-bluegray size-fit rounded-xl p-4'}>
                        <span>Our concept</span>
                    </button>
                </div>
                <div className={'w-1/2 overflow-clip min-h-32 relative rounded-3xl'}>
                    <Image src={'/Projects/65bb1bd8cf9330922c3d8b90_project-image-3.jpg'} className={'object-cover'} alt={''} fill/>
                </div>
            </div>
            <div className={'bg-lighttan w-full min-h-72 flex flex-col gap-4 p-4 justify-center items-center rounded-3xl'}>
                <h1 className={'text-3xl font-semibold'}>Interno Professional</h1>
                <p className={'text-center text-xl px-32'}>Talented team behind our success in all our projects. Dream your interior and
                    our professional make your dream true</p>
                <div className={'w-full flex flex-row gap-4 py-8 justify-evenly'}>
                    {teamMembers.map((item,i) => (
                        <div key={i} className={'w-1/4 min-h-96 bg-lighttan hover:bg-tan duration-700 flex items-center flex-col gap-4 rounded-3xl p-2'}>
                            <div className={'relative overflow-clip rounded-3xl w-full min-h-96'}><Image src={item.image} className={'object-cover'} alt={''} fill/></div>
                            <h1 className={'text-3xl font-semibold text-center'}>{item.name}</h1>
                            <p className={'text-sm opacity-80 text-center'}>{item.role}</p>
                            <div className={'w-fit gap-4 flex flex-row justify-evenly'}>
                                <div className={'size-4 relative'}><Image src={'/logos/fb.png'} className={'object-contain'} alt={''} fill/></div>
                                <div className={'size-4 relative'}><Image src={'/logos/x.png'} className={'object-contain'} alt={''} fill/></div>
                                <div className={'size-4 relative'}><Image src={'/logos/in.png'} className={'object-contain'} alt={''} fill/></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}
export default Page
