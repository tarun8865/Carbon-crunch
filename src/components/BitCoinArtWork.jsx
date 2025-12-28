const BitCoinArtWork = () => {
  return (
    <section className='w-full gap-20 flex justify-between p-12 z-10'>
      <div className='relative w-1/2'>
        <img
          src='/assets/images/bitcoin-artwork.png'
          alt='artwork'
          className='w-149 h-161.5 relative z-10'
        />
        <div className="w-163.5 h-205 rotate-45 absolute blur-[160px] top-0"
          style={{
            background: "linear-gradient(to bottom, #DD24E1, #5117F4)"
          }}
        />
      </div>
      <div className="w-1/2 flex flex-col justify-center gap-16 z-10">
        <div className="flex flex-col">
          <h1 className="text-[72px] leading-[125%]">
            Bitcoin Art Work
          </h1>
          <p className="text-[16px] leading-5">
            Created by
            <span className="text-[#DD24E1]"> Jonathan Borba</span>
          </p>
        </div>
        <div className="flex gap-12">
          <div className="flex flex-col gap-2 leading-[125%] text-[16px]">
            <p>Current Bid</p>
            <p className="text-[36px]">1.09 ETH</p>
            <p>$1,835</p>
          </div>
          <div
            className="w-0.5 h-full bg-white"
          />
          <div className="flex flex-col gap-2 leading-[125%] text-[16px]">
            <p>Auction Ends In</p>
            <div className="flex gap-10">
              <div className="flex flex-col gap-1">
                <p className="text-[36px]">18</p>
                <p>hours</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-[36px]">57</p>
                <p>minutes</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-[36px]">14</p>
                <p>seconds</p>
              </div>
            </div>
          </div>
        </div>
        <button className="flex w-fit cursor-pointer items-center gap-3 bg-white text-black hover:opacity-80 rounded h-12 px-6 text-[16px] leading-[150%]">
          View Art Work
          <img
            src="/assets/images/arrow-up-right.png"
            alt="arrow"
            loading="lazy"
            className="size-6"
          />
        </button>
      </div>
    </section>
  )
}

export default BitCoinArtWork