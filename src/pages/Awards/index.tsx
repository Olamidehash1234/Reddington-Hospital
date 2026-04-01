import Newsletter from "../Home/Newsletter";
import Hero from "./hero";
import MainSection from "./main"
import AwardsMediaSection from "./awards";


export default function AwardsPage (){
    return(
        <div>
            <Hero />
            <MainSection />
            <AwardsMediaSection />
            <Newsletter />
        </div>
    )
}