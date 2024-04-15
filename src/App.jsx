import { Routes, Route } from "react-router-dom";
import Header from "./components/FrontPage/Header";
import TestimonialCarousel from "./components/FrontPage/TestimonialCarousel";
import OfferSection from "./components/FrontPage/OfferSection";
import StorySection from "./components/FrontPage/StorySection";
import SpecialDish from "./components/FrontPage/SpecialDish";
import MenuSection from "./components/FrontPage/MenuSection";
import SpecialOffer from "./components/FrontPage/SpecialOffer";
import TestimonialsSection from "./components/FrontPage/TestimonialsSection";
import Reserve from "./components/FrontPage/Reserve";
import OurStrength from "./components/FrontPage/OurStrength";
import FeaturedLinks from "./components/FrontPage/FeaturedLinks";
import Team from "./components/FrontPage/Team";
import IntroVc from "./components/FrontPage/IntroVc";
import News from "./components/FrontPage/News";
import Footer from "./components/FrontPage/Footer";
import TeamHeader from "./components/ourChefs/TeamHeader";
import Awards from "./components/ourChefs/Awards";
import Headchef from "./components/ourChefs/Headchef";
import AboutUs from "./components/readmore/AboutUs";

function App() {

  return (
    <section className="auto-container">
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
        <Route
          path="/Team"
          element={
            <>
              <TeamHeader />
              <Awards />
              <Headchef />
              <Team />
            </>
          }
        />
        <Route
          path="/ourChefs"
          element={
            <>
              <TeamHeader />
              <Awards />
              <Headchef />
              <Team />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <AboutUs />
            </>
          }
        />
      </Routes>
      <Footer />
    </section>
  );
}
export default App;
