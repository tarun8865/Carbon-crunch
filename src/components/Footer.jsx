const Footer = () => {
    return (
        <footer className='w-full gap-20 flex flex-col justify-between p-12 z-100 backdrop-blur-[50px] bg-white/4 relative'
        >
            <div className='flex items-center justify-between gap-6'>
                <h1 className='text-[36px] leading-[125%]'>
                    NFTme
                </h1>
                <div className='flex items-center gap-12 text-[16px] leading-[125%]'>
                    <a href="/" className='cursor-pointer'>
                        Explore
                    </a>
                    <a href="/" className='cursor-pointer'>
                        Marketplace
                    </a>
                    <a href="/" className='cursor-pointer'>
                        Artists
                    </a>
                    <a href="/contact" className='cursor-pointer'>
                        Contact
                    </a>
                </div>
                <div className='flex items-center gap-7'>
                    <button className='flex cursor-pointer hover:opacity-80 items-center justify-center size-10 bg-white rounded-full'>
                        <img
                            src='/assets/images/instagram.png'
                            alt='insta'
                        />
                    </button>
                    <button className='flex cursor-pointer hover:opacity-80 items-center justify-center size-10 bg-white rounded-full'>
                        <img
                            src='/assets/images/facebook.png'
                            alt='facebook'
                        />
                    </button>
                    <button className='flex cursor-pointer hover:opacity-80 items-center justify-center size-10 bg-white rounded-full'>
                        <img
                            src='/assets/images/twitter.png'
                            alt='twitter'
                        />
                    </button>
                </div>
            </div>
            <p className='text-[16px]'>
                Privacy policy  <span className='mx-4'> | </span>
                Copyright @ Kartik Bansal 2022. All Rights Reserved. <span className='mx-4'> | </span>
                Terms of service
            </p>
            <div
                className='size-50 rounded-full bg-[#DD24E1] absolute right-0 -z-10 blur-[100px]'

            />
        </footer>
    )
}

export default Footer