import React from 'react'

const TrendingSection = () => {
    return (
        <section className='w-full gap-6 flex flex-col justify-between p-12 z-10'>
            <div className='flex flex-col gap-5'>
                <h1 className='text-[64px] leading-normal tracking-[1px]'>
                    Trending this week
                </h1>
                <p className='text-[18px] tracking-[1.6%] w-137'>
                    Lorem ipsum dolor sit amet, consectetur dolore adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
            <div className='flex gap-22'>
                <div className='flex flex-col gap-21 pt-37.5 w-1/2 relative'>
                    <div className='flex flex-col gap-4'>
                        <div className='flex w-full justify-between gap-8'>
                            <div className='flex flex-col gap-1.5'>
                                <h3 className='text-[28px]'>
                                    Sebastian
                                </h3>
                                <p className='text-[12px]'>
                                    Golden Flower
                                </p>
                            </div>
                            <div className='flex flex-col h-full justify-end items-end'>
                                <p className='text-[#DD24E1] text-[16px]'>
                                    2.3 ETH
                                </p>
                            </div>
                        </div>
                        <img
                            src='/assets/images/sebastian.png'
                            alt='sebastian'
                        />
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div className='flex w-full justify-between gap-8'>
                            <div className='flex flex-col gap-1.5'>
                                <h3 className='text-[28px]'>
                                    Javier Miranda
                                </h3>
                                <p className='text-[12px]'>
                                    Golden Flower
                                </p>
                            </div>
                            <div className='flex flex-col h-full justify-end items-end'>
                                <p className='text-[#DD24E1] text-[16px]'>
                                    2.3 ETH
                                </p>
                            </div>
                        </div>
                        <img
                            src='/assets/images/javier.png'
                            alt='javier'
                        />
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div className='flex w-full justify-between gap-8'>
                            <div className='flex flex-col gap-1.5'>
                                <h3 className='text-[28px]'>
                                    Milad Fakurian
                                </h3>
                                <p className='text-[12px]'>
                                    Golden Flower
                                </p>
                            </div>
                            <div className='flex flex-col h-full justify-end items-end'>
                                <p className='text-[#DD24E1] text-[16px]'>
                                    2.3 ETH
                                </p>
                            </div>
                        </div>
                        <img
                            src='/assets/images/milad.png'
                            alt='milad'
                        />
                    </div>
                    <div className="w-163.5 h-205 rotate-45 absolute blur-[160px] top-[60%] -left-[40%] -z-10"
                        style={{
                            background: "linear-gradient(to bottom, #DD24E1, #5117F4)"
                        }}
                    />
                </div>
                <div className='flex flex-col gap-21 w-1/2 relative'>
                    <div className='flex flex-col gap-4'>
                        <div className='flex w-full justify-between gap-8'>
                            <div className='flex flex-col gap-1.5'>
                                <h3 className='text-[28px]'>
                                    Ferhat Deniz
                                </h3>
                                <p className='text-[12px]'>
                                    Golden Flower
                                </p>
                            </div>
                            <div className='flex flex-col h-full justify-end items-end'>
                                <p className='text-[#DD24E1] text-[16px]'>
                                    2.3 ETH
                                </p>
                            </div>
                        </div>
                        <img
                            src='/assets/images/ferhat.png'
                            alt='ferhat'
                        />
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div className='flex w-full justify-between gap-8'>
                            <div className='flex flex-col gap-1.5'>
                                <h3 className='text-[28px]'>
                                    Polina Kondrashova
                                </h3>
                                <p className='text-[12px]'>
                                    Golden Flower
                                </p>
                            </div>
                            <div className='flex flex-col h-full justify-end items-end'>
                                <p className='text-[#DD24E1] text-[16px]'>
                                    2.3 ETH
                                </p>
                            </div>
                        </div>
                        <img
                            src='/assets/images/polina.png'
                            alt='polina'
                        />
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div className='flex w-full justify-between gap-8'>
                            <div className='flex flex-col gap-1.5'>
                                <h3 className='text-[28px]'>
                                    Erick Butler
                                </h3>
                                <p className='text-[12px]'>
                                    Golden Flower
                                </p>
                            </div>
                            <div className='flex flex-col h-full justify-end items-end'>
                                <p className='text-[#DD24E1] text-[16px]'>
                                    2.3 ETH
                                </p>
                            </div>
                        </div>
                        <img
                            src='/assets/images/erick.png'
                            alt='erick'
                        />
                    </div>
                    <button className="flex w-fit ml-auto cursor-pointer items-center gap-3 bg-white text-black hover:opacity-80 rounded h-12 px-6 text-[16px] leading-[150%]">
                        Explore More
                        <img
                            src="/assets/images/arrow-up-right.png"
                            alt="arrow"
                            loading="lazy"
                            className="size-6"
                        />
                    </button>
                    <div className="w-163.5 h-205 rotate-45 absolute blur-[160px] top-[20%] -right-[40%] -z-10"
                        style={{
                            background: "linear-gradient(to bottom, #DD24E1, #5117F4)"
                        }}
                    />
                    <div className="w-63.5 h-105 rotate-45 absolute blur-[160px] bottom-0 right-0 -z-10"
                        style={{
                            background: "linear-gradient(to bottom, #DD24E1, #5117F4)"
                        }}
                    />
                </div>
            </div>
        </section>
    )
}

export default TrendingSection