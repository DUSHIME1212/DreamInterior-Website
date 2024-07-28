import React from 'react';
import Image from "next/image";

const Herocomp = () => {
    return (
        <div className="min-h-screen w-full">
            <div className="size-full min-h-screen flex items-center relative overflow-clip rounded-bl-[24rem]">
                <div className={'z-10 lg:ml-32 flex flex-col gap-4 md:ml-16 ml-8'}>
                    <h1 className={'text-5xl tracking-tight font-extrabold'}>Let's Create Your<br/> Dream Interior</h1>
                    <p className={'text-xl text-opacity-70'}>The world needs innovators and problem solvers who turn<br/>
                        challenges into greater opportunities.</p>
                    <button className={'bg-bluegray text-white size-fit rounded-xl p-4'}>
                        <span>Get started</span>
                    </button>
                </div>
                {/*<Image src={'/hero.jpg'} className={'object-right object-cover'} alt={''} fill/>*/}
            </div>
        </div>
    );
};

export default Herocomp;
