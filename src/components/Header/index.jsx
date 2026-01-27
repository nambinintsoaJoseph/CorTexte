import logo from '../../assets/logo.svg'

function Header() {
    return (
        <header className='p-2 flex justify-between'>
            <div className='w-fit'>
                <div>
                    <img src={logo} alt="CorText Logo" className='w-[32px] h-[32px] mx-auto' />
                </div>
                <div>
                    <p className='font-semibold font-outfit text-2xl md:text-[32px]'>Cor<span className='text-green-cortexte'>Texte</span></p>
                </div>
            </div>

            <div className='self-center'>
                <button className='font-inter text-sm md:text-base'>
                    <i className='fa fa-moon'></i> Mode nuit
                </button>
            </div>
        </header>
    )
}

export default Header;