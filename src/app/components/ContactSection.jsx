import React from 'react'

const ContactSection = () => {
    return (
        <div className={'w-full'}>
            <div
                className={'bg-bluegray flex gap-4 text-white flex-col rounded-3xl justify-center items-center w-full min-h-96'}>
                <h1 className={'text-7xl font-michelle'}>Wanna join the interno?</h1>
                <p className={'text-xl'}>Contact Us & Get a Free Consultation</p>

                <button className={'bg-tan text-bluegray size-fit rounded-xl p-4'}>
                    <span>Get free estimate</span>
                </button>
            </div>
        </div>
    )
}
export default ContactSection
