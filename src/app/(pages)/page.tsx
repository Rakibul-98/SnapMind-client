import Banner from "./components/Home/Banner";
import Categories from "./components/Home/Categories";
import CTA from "./components/Home/CTA";
import FAQ from "./components/Home/FAQ";
import Feature from "./components/Home/Feature";
import Gamification from "./components/Home/Gamification";
import HowItWorks from "./components/Home/HowItWorks";

export default function Home() {
  return (
    <div className="">
      <Banner />
      <Feature />
      <Categories />
      <Gamification />
      <HowItWorks />
      <FAQ />
      <CTA />
    </div>
  );
}
