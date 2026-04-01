import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Consult from './pages/Consultation'
import Doctor from './pages/Doctor'
import Ourbranches from './pages/OurBranches'
import BranchDetail from './pages/OurBranches/BranchDetail'
import Contact from './pages/Contact';
import Awards from './pages/Awards';
import Career from './pages/Career'
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
          <Route path="/doctors" element={<Doctor />} />
          <Route path="/our-branches" element={<Ourbranches />} />
          <Route path="/branches/:name" element={<BranchDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/career" element={<Career />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
