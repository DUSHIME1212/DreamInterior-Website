import React from 'react'
import Herocomp from "@/app/_components/Herocomp";
import Servicesection from "@/app/_components/Servicesection";
import Introcontent from "@/app/_components/Introcontent";

export default function Page () {
    return (
        <div>
            <div>
                <Herocomp/>
            </div>
            <div>
                <Servicesection/>
            </div>
            <div>
                <Introcontent/>
            </div>
        </div>
    )
}
