import Banner from "./components/Home/Banner";
import CTA from "./components/Home/CTA";
import FAQ from "./components/Home/FAQ";
import Feature from "./components/Home/Feature";
import HowItWorks from "./components/Home/HowItWorks";

export default function Home() {
  return (
    <div className="">
      <Banner />
      <Feature />
      <HowItWorks />
      <FAQ />
      <CTA />
    </div>
  );
}
