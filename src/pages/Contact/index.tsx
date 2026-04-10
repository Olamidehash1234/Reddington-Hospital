import Newsletter from '../Home/Newsletter';
import Hero from './hero';
import Contactform from './Contactform';
import Map from './map';

export default function Contact() {
    return (
        <div>
            <Hero />
            <Map />
            <Contactform />
            <Newsletter />
        </div>
    );
}