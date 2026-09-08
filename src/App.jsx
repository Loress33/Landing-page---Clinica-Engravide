import { SpeedInsights } from "@vercel/speed-insights/react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Authority from "./components/Authority";
import Symptoms from "./components/Symptoms";
import Services from "./components/Services";
import Differentials from "./components/Differentials";
import Steps from "./components/Steps";
import InstagramVideos from "./components/InstagramVideos";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import useScrollReveal from "./hooks/useScrollReveal";

export default function App() {
  useScrollReveal();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Authority />
        <Symptoms />
        <Services />
        <Differentials />
        <Steps />
        <InstagramVideos />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
      <SpeedInsights />
    </>
  );
}
