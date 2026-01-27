import CorrectionForm from "../../components/CorrectionForm"
import Header from "../../components/Header" 
import HeroSection from "../../components/HeroSection"

function Home() {
    return (
        <div className="bg-[#F7F7F7] h-screen">
            <Header />
            <HeroSection />

            <div>
                <CorrectionForm />
            </div>
        </div>
    )
}

export default Home