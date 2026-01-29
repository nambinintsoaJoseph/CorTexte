import Correction from "../../components/Correction"
import CorrectionForm from "../../components/CorrectionForm"
import Footer from "../../components/Footer"
import Header from "../../components/Header" 
import HeroSection from "../../components/HeroSection"
import PossibleCorrection from "../../components/PossibleCorrection"

function Home() {
    return (
        <div className="bg-[#F7F7F7] h-full">
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