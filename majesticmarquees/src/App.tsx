import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import OurTents from './pages/OurTents';
import StretchNomadicBedouin from './pages/tents/StretchNomadicBedouin';
import SailclothSilhouette from './pages/tents/SailclothSilhouette';
import CustomBespoke from './pages/tents/CustomBespoke';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Faq from './pages/Faq';
import Contact from './pages/Contact';
import Terms from './pages/legal/Terms';
import Privacy from './pages/legal/Privacy';
import CookiePolicy from './pages/legal/CookiePolicy';
import NotFound from './pages/NotFound';

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) { el.scrollIntoView({ behavior: 'smooth' }); return; }
    }
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="our-tents" element={<OurTents />} />
          <Route path="our-tents/stretch-nomadic-bedouin" element={<StretchNomadicBedouin />} />
          <Route path="our-tents/sailcloth-silhouette" element={<SailclothSilhouette />} />
          <Route path="our-tents/custom-bespoke" element={<CustomBespoke />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="faq" element={<Faq />} />
          <Route path="about" element={<About />} />
          <Route path="contact-get-a-quote" element={<Contact />} />
          <Route path="terms-conditions" element={<Terms />} />
          <Route path="privacy-policy-2" element={<Privacy />} />
          <Route path="cookie-policy" element={<CookiePolicy />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}
