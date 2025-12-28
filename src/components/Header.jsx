const Header = () => {
    return (
        <header className='flex items-center justify-between px-12 py-6 z-20'>
            <img
                src="/assets/images/logo.png"
                alt="Carbon Crunch Logo"
                className='size-6'
            />
            <nav className='flex items-center gap-6'>
                <a href='/about' className='text-[16px] cursor-pointer'>
                    About Us
                </a>
                <a href='/' className='text-[16px]'>
                    Store
                </a>
                <a href='/' className='text-[16px] cursor-pointer'>
                    Games
                </a>
                <button className='flex items-center hover:opacity-80 justify-center rounded bg-white text-black font-semibold h-12 px-6 cursor-pointer'>
                    Connect Wallet
                </button>
            </nav>
        </header>
    )
}

export default Header