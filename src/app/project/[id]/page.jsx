import React from 'react'
import { Projects } from '../../../../public/utils/utils'
import Image from 'next/image'
import Footer from "../../components/Footer";

export default function page({ params }) {
    let pageid = params.id

    let project = Projects.find((proj) => proj.id === pageid)

    if (!project) {
        return <div className='w-full min-h-screen grid place-items-center'>404 not page found</div>
    }

    return (
        <div className='px-16 md:px-32 relative lg:px-32 w-full min-h-screen flex flex-col gap-8 mt-9'>
            <div className='w-full min-h-96 relative'>
                <Image src={project.image} alt="alt" className='object-cover' fill />
            </div>
            <div className='flex p-4 gap-4'>
                <div className='w-1/3 sticky top-0 flex flex-col h-fit gap-4 rounded-3xl p-8 bg-lighttan'>
                    <div className='flex text-lg gap-4'>
                        <h1 className='text-2xl font-semibold'>Client:</h1>
                        <span>Cloud Firm</span>
                    </div>
                    <div className='flex text-lg gap-4'>
                        <h1 className='text-2xl h-fit font-semibold'>Category:</h1>
                        <span>{project.category}</span>
                    </div>
                    <div className='flex text-lg gap-4'>
                        <h1 className='text-2xl font-semibold'>Date:</h1>
                        <span>{project.date}</span>
                    </div>
                    <div className='flex text-lg gap-4'>
                        <h1 className='text-2xl font-semibold'>Website:</h1>
                        <span>example.com</span>
                    </div>
                </div>
                <div className='w-2/3 flex flex-col gap-8 p-8 rounded-3xl'>
                    <h1 className='text-5xl font-michelle'>Light Ambience Sepia Design</h1>
                    <p className='text-xl text-opacity-60'>
                        The Dry Creek Building brings together key business partners in a common location and is designed to help drive collaboration and innovation, ultimately helping to move Gallo’s business forward. The new office building complements existing structures and is a central location between the campus’s multiple buildings, making is a vital hub for employees to gather, socialize, and collaborate.< br className='mt-2'/> Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.
                    </p>
                </div>
            </div>
            <div className='w-full min-h-96 relative overflow-clip rounded-3xl'>
                <Image src={project.image} alt="alt" className='object-cover' fill />
            </div>
            <Footer/>
        </div>
    )

}

