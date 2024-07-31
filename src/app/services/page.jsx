import React from 'react'
import Image from "next/image";
import Footer from "@/app/_components/Footer";
import {InteriorDesignSections, Services, teamMembers} from "../../../public/utils/utils";
import Link from "next/link";
import ContactSection from "@/app/_components/ContactSection";

const Page = () => {
    return (
        <div className={'min-h-72 py-16 flex gap-8 flex-col items-center justify-center px-16 md:px-32 lg:px-32'}>
            <div className={'min-h-72 w-full relative bg-bluegray'}>
                <Image src={'https://i.pinimg.com/736x/81/25/f5/8125f5d6d68356a34c6b22a00d37f422.jpg'} alt={''} className={'object-cover'} fill/>
                <div className={'w-72 min-h-32 p-8 flex flex-col gap-4 text-center rounded-xl bg-white z-10 absolute left-1/2 -bottom-16 -translate-x-1/2'}>
                    <h1 className={'text-3xl  font-michelle'}>Services</h1>
                    <p className={'text-xl'}>Home / Services</p>
                </div>
            </div>
            <div className={'w-full flex flex-col mt-8  gap-8 min-h-96'}>
                <div className={'w-full grid mt-16 grid-cols-3  rounded-3xl gap-4 p-4 grid-rows-2'}>
                    {Services.map((section, index) => (
                        <div key={index}
                             className={'min-h-72 hover:bg-white duration-700 rounded-3xl p-8 grid place-items-center'}>
                            <h1 className={'text-5xl font-michelle'}>{section.title}</h1>
                            <p className={'text-xl text-center'}>{section.description}</p>
                            <Link className={'hover:underline'} href={''}>View more</Link>
                        </div>
                    ))}
                </div>
                <div className={'w-full flex flex-row min-h-96'}>
                    <div className={'min-h-96 w-1/2'}>
                        <div className={' h-96 relative overflow-clip rounded-bl-[20rem] rounded-tr-[8rem]'}><Image
                            src={'/services/img.png'} className={'object-cover'} alt={''} fill/></div>
                    </div>
                    <div className={'flex gap-4 w-1/2 flex-col p-8'}>
                        <div className={'w-full flex justify-between'}>
                            <div className={'size-16 relative'}><Image src={'/services/logo/img.png'} alt={''} fill/>
                            </div>
                            <span className={'text-7xl font-michelle'}>01</span>
                        </div>
                        <h1 className={'text-3xl font-semibold'}>Planning & Designing</h1>
                        <p className={'text-xl text-opacity-70'}>Constructor explains how you can enjoy high end
                            flooring trends like textured wood and realistic
                            stones with new laminate flooring.
                        </p>
                    </div>
                </div>
                <div className={'w-full flex flex-row-reverse min-h-96'}>
                    <div className={'min-h-96 w-1/2'}>
                        <div className={' h-96 relative overflow-clip rounded-bl-[20rem] rounded-tr-[8rem]'}><Image
                            src={'/services/img_1.png'} className={'object-cover'} alt={''} fill/></div>
                    </div>
                    <div className={'flex gap-4 w-1/2 flex-col p-8'}>
                        <div className={'w-full flex justify-between'}>
                            <div className={'size-16 relative'}><Image src={'/services/logo/img_1.png'} alt={''} fill/>
                            </div>
                            <span className={'text-7xl font-michelle'}>02</span>
                        </div>
                        <h1 className={'text-3xl font-semibold'}>Planning & Designing</h1>
                        <p className={'text-xl text-opacity-70'}>Constructor explains how you can enjoy high end
                            flooring trends like textured wood and realistic
                            stones with new laminate flooring.
                        </p>
                    </div>
                </div>
                <div className={'w-full flex flex-row min-h-96'}>
                    <div className={'min-h-96 w-1/2'}>
                        <div className={' h-96 relative overflow-clip rounded-bl-[20rem] rounded-tr-[8rem]'}><Image
                            src={'/services/img_2.png'} className={'object-cover'} alt={''} fill/></div>
                    </div>
                    <div className={'flex gap-4 w-1/2 flex-col p-8'}>
                        <div className={'w-full flex justify-between'}>
                            <div className={'size-16 relative'}><Image src={'/services/logo/img_2.png'} alt={''} fill/>
                            </div>
                            <span className={'text-7xl font-michelle'}>03</span>
                        </div>
                        <h1 className={'text-3xl font-semibold'}>Planning & Designing</h1>
                        <p className={'text-xl text-opacity-70'}>Constructor explains how you can enjoy high end
                            flooring trends like textured wood and realistic
                            stones with new laminate flooring.
                        </p>
                    </div>
                </div>

                <div className={'w-full flex flex-row-reverse min-h-96'}>
                    <div className={'min-h-96 w-1/2'}>
                        <div className={' h-96 relative overflow-clip rounded-bl-[20rem] rounded-tr-[8rem]'}><Image
                            src={'/services/img_3.png'} className={'object-cover'} alt={''} fill/></div>
                    </div>
                    <div className={'flex gap-4 w-1/2 flex-col p-8'}>
                        <div className={'w-full flex justify-between'}>
                            <div className={'size-16 relative'}><Image src={'/services/logo/img_3.png'} alt={''} fill/>
                            </div>
                            <span className={'text-7xl font-michelle'}>04</span>
                        </div>
                        <h1 className={'text-3xl font-semibold'}>Planning & Designing</h1>
                        <p className={'text-xl text-opacity-70'}>Constructor explains how you can enjoy high end
                            flooring trends like textured wood and realistic
                            stones with new laminate flooring.
                        </p>
                    </div>
                </div>

            </div>
            <ContactSection/>
            <div>
                <Footer/>
            </div>
        </div>
    )
}
export default Page
