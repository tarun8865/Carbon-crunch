import React from 'react'

const PopularArtists = () => {
    return (
        <section className='w-full gap-20 flex flex-col justify-between p-12 z-10'>
            <div className='flex justify-between gap-6 items-center'>
                <h1 className='text-[64px] font-bold'>
                    Popular Artists
                </h1>
                <button className="flex w-fit ml-auto cursor-pointer items-center gap-3 bg-white text-black hover:opacity-80 rounded h-12 px-6 text-[16px] leading-[150%]">
                    View All Artists
                    <img
                        src="/assets/images/arrow-up-right.png"
                        alt="arrow"
                        loading="lazy"
                        className="size-6"
                    />
                </button>
            </div>
            <div className='flex items-center justify-between'>
                <div className='flex flex-col gap-8 items-center'>
                    <img
                        src='/assets/images/ferhat-pic.png'
                        alt='ferhat-pic'
                        className='size-40 rounded-full'
                    />
                    <p className='text-[36px]'>
                        Ferhat Deniz
                    </p>
                </div>
                <div className='flex flex-col gap-8 items-center'>
                    <img
                        src='/assets/images/sebastian-pic.png'
                        alt='ferhat-pic'
                        className='size-40 rounded-full'
                    />
                    <p className='text-[36px]'>
                        Sebastian
                    </p>
                </div>
                <div className='flex flex-col gap-8 items-center'>
                    <img
                        src='/assets/images/javier-pic.png'
                        alt='ferhat-pic'
                        className='size-40 rounded-full'
                    />
                    <p className='text-[36px]'>
                        Javier Miranda
                    </p>
                </div>
                <div className='flex flex-col gap-8 items-center'>
                    <img
                        src='/assets/images/erick-pic.png'
                        alt='ferhat-pic'
                        className='size-40 rounded-full'
                    />
                    <p className='text-[36px]'>
                        Erick Butler
                    </p>
                </div>
            </div>
        </section>
    )
}

export default PopularArtists