import Correction from "../../components/Correction"
import CorrectionForm from "../../components/CorrectionForm"
import Footer from "../../components/Footer"
import Header from "../../components/Header" 
import HeroSection from "../../components/HeroSection"
import PossibleCorrection from "../../components/PossibleCorrection"
import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext"

function Home() {

    const {theme} = useContext(ThemeContext); 

    return (
        <div className={`${ theme == 'light' ? 'bg-[#F7F7F7] text-black' : 'bg-[#1C172E] text-white'}  h-full`}>
            <Header />
            <HeroSection />

            <div className='lg:w-[85%] lg:mx-auto'>
                <div className="md:flex md:justify-between">
                    <CorrectionForm />
                    <PossibleCorrection />
                </div>
                
                <div>
                    <Correction />
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Home