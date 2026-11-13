// import Newsletter from "../Home/Newsletter";
// import Contactform from "../Contact/Contactform";
import Hero from "../Contact/hero";
import Map from "../Contact/map";

export default function EmergencyResponse() {
    return (
        <div>
            <Hero
                title="Emergency Response"
                description="For urgent medical attention, call your nearest branch using the numbers below."
                imageSrc="https://res.cloudinary.com/dbe6jr3nj/image/upload/v1794559184/Emergency_teqdct.jpg"
                imageAlt="Reddington emergency response team standing beside an ambulance"
            />
            <Map emergencyOnly 
                className="pb-[30px] lg:pb-[50px]" 
            />
            {/* <Contactform /> */}
            {/* <Newsletter /> */}
        </div>
    );
}
