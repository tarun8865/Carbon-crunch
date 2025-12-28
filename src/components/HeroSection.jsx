const HeroSection = () => {
  return (
    <section className='w-full gap-6 flex justify-between p-12 z-10'>
      <div className='flex flex-col gap-5 w-1/2'>
        <h1 className='font-semibold text-[72px] leading-[125%]'>
          Discover Rare
          Collections Of
          Art & NFT's
        </h1>
        <p className='font-[18px]'>
          Create, Explore,  & Collect Digital Art NFTs
        </p>
        <button
          className='mt-9 w-fit cursor-pointer hover:opacity-80 flex items-center justify-center rounded-[10px] uppercase text-[20px] h-15 px-6'
          style={{
            background: 'linear-gradient(to bottom, #DD24E1, #5117F4)'
          }}
        >
          Explore
        </button>
        <div className='flex gap-20 items-center mt-35'>
          <div className='flex flex-col gap-1'>
            <h3 className='text-[48px]'>32k+</h3>
            <p className='text-[16px]'>Artwork</p>
          </div>
          <div className='flex flex-col gap-1'>
            <h3 className='text-[48px]'>20k+</h3>
            <p className='text-[16px]'>Auctions</p>
          </div>
          <div className='flex flex-col'>
            <h3 className='text-[48px]'>10k+</h3>
            <p className='text-[16px]'>Artists</p>
          </div>
        </div>
      </div>
      <div className='w-1/2 relative flex flex-row-reverse'>
        <img
          alt="hero1"
          src='/assets/images/hero1.png'
          loading='lazy'
          className="w-95 h-140 absolute z-10"
        />
        <img
          alt="hero1"
          src='/assets/images/hero2.png'
          loading='lazy'
          className="w-120 absolute right-8 z-5"
        />
        <div className="w-123.5 h-165 rotate-45 absolute blur-[160px]"
          style={{
            background: "linear-gradient(to bottom, #DD24E1, #5117F4)"
          }}
        />
      </div>
    </section>
  )
}

export default HeroSection