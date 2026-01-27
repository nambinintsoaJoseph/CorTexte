import illustration from '../../assets/illustration.svg'

function HeroSection() {
    return (
        <div className='flex flex-col lg:flex-row lg:m-4'>
            <div className='w-fit mx-auto mt-2 md:mt-0'>
                <img 
                    src={illustration} 
                    alt="Illustration HeroSection CorTexte" 
                    className='w-[160px] h-[173px] lg:w-[280px] md:h-[302px]'
                />
            </div>
        
            <div className='lg:self-center'>
                <div>
                    <h3 className='font-outfit font-semibold text-2xl text-center p-4'>
                        Écrivez <span className='text-green-cortexte'>sans fautes</span>, 
                        en toute confiance
                    </h3>
                </div>
                <div className='m-4 text-justify'> 
                    <p>
                        Collez votre texte, CorTexte corrige instantanément l’orthographe et la grammaire pour un français clair et professionnel.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HeroSection; 