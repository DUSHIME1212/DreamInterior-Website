import React from 'react'
import {blogPosts} from "../../../public/utils/utils";
import Image from "next/image";

const BlogList = () => {
    return (
        <div className={'min-h-32 py-16 flex flex-col items-center justify-center px-16 md:px-32 lg:px-32'}>
            <h1 className={'text-5xl'}>Recent Blogs</h1>
            <p className={'w-2/3 text-center my-4'}>Get updates about our latest trends and techniques used in
                interior design project works.</p>
            <div className={'w-full flex gap-4 p-4 justify-evenly flex-wrap'}>
                {
                    blogPosts.map((item,i) =>(
                        <div key={i} className={'w-[30%] p-4 min-h-96 group flex hover:bg-lighttan duration-700 flex-col relative justify-between overflow-clip rounded-3xl'}>
                            <div className={'w-full h-56 overflow-clip rounded-xl relative'}>
                                <Image src={item.image} className={'object-cover group-hover:scale-110 duration-700'} alt={''} fill/>
                            </div>
                            <span className={'bg-lighttan size-fit p-2 rounded-xl absolute left-8 top-48'}>{item.title}</span>
                            <h1 className={'text-2xl group-hover:text-tan duration-700'}>{item.category}</h1>
                            <p className={'text-sm size-fit px-2'}>{item.date}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default BlogList
