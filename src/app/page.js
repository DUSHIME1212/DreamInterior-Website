import React from 'react'
import Herocomp from "../app/components/Herocomp";
import Servicesection from "../app/components/Servicesection";
import Introcontent from "../app/components/Introcontent";
import Testiomonial from "../app/components/Testiomonial";
import Logosslider from "../app/components/Logosslider";
import Projects from "../app/components/Projects";
import CounterSection from "../app/components/CounterSection";
import BlogList from "../app/components/BlogList";
import ContactSection from "../app/components/ContactSection";
import Footer from "../app/components/Footer";

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
