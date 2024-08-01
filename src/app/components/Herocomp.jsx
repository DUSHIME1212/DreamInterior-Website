import React from 'react';
import Image from "next/image";

const Herocomp = () => {
    return (
        <div className="min-h-screen w-full">
            <div className="size-full min-h-screen flex items-center relative overflow-clip rounded-bl-[20rem]">
                <div className={'z-10 lg:ml-32 flex flex-col gap-4 md:ml-16 ml-8'}>
                    <h1 className={'text-7xl tracking-tight font-michelle '}>Lets Create Your<br/> Dream Interior</h1>
                    <p className={'text-xl text-opacity-70'}>The world needs innovators and problem solvers who turn<br/>
                        challenges into greater opportunities.</p>
                    <button className={'bg-bluegray text-white size-fit rounded-xl p-4'}>
                        <span>Get started</span>
                    </button>
                </div>
                <Image src={'/Projects/65bb1bd8cf9330922c3d8b90_project-image-3.jpg'} className={'object-right object-cover'} alt={''} fill/>
            </div>
        </div>
    );
};

export default Herocomp;
