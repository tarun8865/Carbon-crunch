const CTA = () => {
    return (
        <section className='w-full gap-20 flex justify-between p-12 z-10'>
            <div className='relative w-1/2'>
                <img
                    src='/assets/images/cta.png'
                    alt='cta'
                    className='w-149 h-161.5 relative z-10'
                />
                <div className="w-163.5 h-205 rotate-45 absolute blur-[160px] top-0"
                    style={{
                        background: "linear-gradient(to bottom, #DD24E1, #5117F4)"
                    }}
                />
            </div>
            <div className="w-1/2 flex flex-col justify-center gap-12 z-10">
                <h1 className='text-[48px] leading-[125%]'>
                    Join the community and get the best NFT collection
                </h1>
                <button
                    className='mt-9 w-fit cursor-pointer hover:opacity-80 flex items-center justify-center rounded-[10px] uppercase text-[20px] h-15 px-6'
                    style={{
                        background: 'linear-gradient(to bottom, #DD24E1, #5117F4)'
                    }}
                >
                    Join Community
                </button>
            </div>
        </section>
    )
}

export default CTA