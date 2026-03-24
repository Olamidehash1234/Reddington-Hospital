import HeroSection from "./hero"
import History from "./history"
import Breakthrough from "./breakthrough"
import Accreditation from "./accreditation"
import Culture from "./culture"

export default function AboutPage() {
    return(
        <div>
            <HeroSection />
            <History />
            <Breakthrough />
            <Accreditation />
            <Culture />
        </div>
    )
}