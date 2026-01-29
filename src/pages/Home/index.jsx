import CorrectionForm from "../../components/CorrectionForm"
import Header from "../../components/Header" 
import HeroSection from "../../components/HeroSection"
import PossibleCorrection from "../../components/PossibleCorrection"

function Home() {
    return (
        <div className="bg-[#F7F7F7] h-full">
            <Header />
            <HeroSection />

            <div className='md:flex md:justify-evenly'>
                <CorrectionForm />
                <PossibleCorrection />
            </div>
        </div>
    )
}

export default Home