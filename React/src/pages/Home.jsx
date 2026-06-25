import {HeroSection} from "../components/HeroSection";
import {Categories} from "../components/Categories";
import ProductCards from "../components/ProductCards";
import Testimonials from "../components/Testimonials";


export default function Home() {
  return (
    <>
      <HeroSection />
      <Categories />
      <ProductCards />
      <Testimonials />
 
    </>
  );
}
