import React from 'react'
import Herocomp from "@/app/_components/Herocomp";
import Servicesection from "@/app/_components/Servicesection";
import Introcontent from "@/app/_components/Introcontent";
import Testiomonial from "@/app/_components/Testiomonial";
import Logosslider from "@/app/_components/Logosslider";
import Projects from "@/app/_components/Projects";
import CounterSection from "@/app/_components/CounterSection";
import BlogList from "@/app/_components/BlogList";
import ContactSection from "@/app/_components/ContactSection";
import Footer from "@/app/_components/Footer";

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
            <div>
                <Testiomonial/>
            </div>
            <div>
                <Logosslider/>
            </div>
            <div>
                <Projects/>
            </div>
            <div>
                <CounterSection/>
            </div>
            <div>
                <BlogList/>
            </div>
            <div className={'min-h-32 py-16 flex flex-col items-center justify-center px-16 md:px-32 lg:px-32'}>
                <ContactSection/>
            </div>
            <div className={'min-h-32 py-16 flex flex-row items-start justify-evenly px-16 md:px-32 lg:px-32'}>
                <Footer/>
            </div>
        </div>
    )
}
