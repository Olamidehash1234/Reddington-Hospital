import HeroSection from "./hero"
import History from "./history"
import Breakthrough from "./breakthrough"
import Accreditation from "./accreditation"
import Culture from "./culture"
import AwardsSection from "./awards"
import Newsletter from "../Home/Newsletter"
import Leadership from "./Leadership"

export default function AboutPage() {
    return(
        <div>
            <HeroSection />
            <History />
            <Breakthrough />
            <Accreditation />
            <Culture />
            <AwardsSection />
            <Leadership />
            <Newsletter />
        </div>
    )
}