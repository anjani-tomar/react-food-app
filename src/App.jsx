import "./App.css";
import Header from "./components/Header";
import TestimonialCarousel from "./components/TestimonialCarousel";
import OfferSection from "./components/OfferSection";
import StorySection from "./components/StorySection";
import SpecialDish from "./components/SpecialDish";
import MenuSection from "./components/MenuSection";
import SpecialOffer from "./components/SpecialOffer";
import TestimonialsSection from "./components/TestimonialsSection";
import Reserve from "./components/Reserve";
import OurStrength from "./components/OurStrength";
import FeaturedLinks from "./components/FeaturedLinks";
import Team from "./components/Team";
import IntroVc from "./components/IntroVc";
import News from "./components/News";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
  
    <section className="auto-container ">
      <Header />
      
      <Routes>
        <Route
          path="/"
          element={
            <>
              <TestimonialCarousel />
              <OfferSection />
              <StorySection />
              <SpecialDish />
              <MenuSection />
              <SpecialOffer />
              <TestimonialsSection />
              <Reserve />
              <OurStrength />
              <FeaturedLinks />
              <Team />
              <IntroVc />
              <News />
            </>
          }
        />
        <Route
          path="/News"
          element={
            <>
              <Team />
            </>
          }
        />
      </Routes>
      <Footer/>
    </section>
    
  );
}

export default App;
