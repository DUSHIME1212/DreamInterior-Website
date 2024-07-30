import React from 'react'

const CounterSection = () => {
    return (
        <div className={'min-h-32 py-16 bg-lighttan flex flex-row items-center justify-center px-16 md:px-32 lg:px-32'}>
            <div className={'flex flex-col gap-2 p-8 items-center w-1/4 justify-center'}>
                <h1 className={'text-5xl text-tan'}>14</h1>
                <p className={'text-tan opacity-80'}>Years Of Experiance</p>
            </div>
            <div className={'h-56 w-[2px] bg-tan'}/>
            <div className={'flex flex-col gap-2 p-8 items-center w-1/4 justify-center'}>
                <h1 className={'text-5xl text-tan'}>5K</h1>
                <p className={'text-tan opacity-80'}>Success Project</p>
            </div>
            <div className={'h-56 w-[2px] bg-tan'}/>
            <div className={'flex flex-col gap-2 p-8 items-center w-1/4 justify-center'}>
                <h1 className={'text-5xl text-tan'}>1K</h1>
                <p className={'text-tan opacity-80'}>Active Project</p>
            </div>
            <div className={'h-56 w-[2px] bg-tan'}/>
            <div className={'flex flex-col gap-2 p-8 items-center w-1/4 justify-center'}>
                <h1 className={'text-5xl text-tan'}>4K</h1>
                <p className={'text-tan opacity-80'}>Happy Customers</p>
            </div>
        </div>
    )
}
export default CounterSection
