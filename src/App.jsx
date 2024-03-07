
import './App.css';
import Header from './components/Header'
import TestimonialCarousel from './components/TestimonialCarousel';
import OfferSection from './components/OfferSection';
import StorySection from './components/StorySection';
import SpecialDish from './components/SpecialDish';
import MenuSection from './components/MenuSection';
import SpecialOffer from './components/SpecialOffer';
import TestimonialsSection from './components/TestimonialsSection';
import Reserve from './components/Reserve';
import OurStrength from './components/OurStrength';
import DotMap from './components/DotMap';

function App() {
  return (
    // <div id='root' class='overflow-hidden'>
    <section className="auto-container ">
   <Header/>
<TestimonialCarousel/>
<OfferSection/>
<StorySection/>
<SpecialDish/>
<MenuSection/>
<SpecialOffer/>
<TestimonialsSection/>
<Reserve/>
<OurStrength/>
<div className='fruits container'>
<DotMap/>
</div>
</section>
    // </div>
    
  
  );
}

export default App;