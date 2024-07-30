import React from 'react'
import {Logos} from "../../../public/utils/utils";
import Image from "next/image";

const Logosslider = () => {
    return (
        <div className={'min-h-32 py-16 flex items-center justify-center px-16 md:px-32 lg:px-32'}>
            <div className={'flex w-full justify-between'}>
                {
                    Logos.map((item,i) => (
                        <div key={i} className={'size-40 relative'}>
                            <Image src={item.logo} alt={''} className={'object-contain'} fill/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default Logosslider
