import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Consult from './pages/Consultation'
import Doctor from './pages/Doctor'
import Ourbranches from './pages/OurBranches'
import Contact from './pages/Contact';
import Awards from './pages/Awards';
// import FeedbackForm from './pages/feedbackform';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/appointment" element={<Consult />} />
          <Route path="/doctor" element={<Doctor />} />
          <Route path="/our-branches" element={<Ourbranches />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/awards" element={<Awards />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
