import { useEffect } from "react";
import Lenis from "lenis";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Features from "./components/Features";
import LoanCalculator from "./components/LoanCalculator";
import HowItWorks from "./components/HowItWorks";
import AppShowcase from "./components/AppShowcase";
import Ecosystem from "./components/Ecosystem";
import Trust from "./components/Trust";
import Stats from "./components/Stats";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import ChatBot from "./components/ChatBot";

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      touchMultiplier: 1.5,
      wheelMultiplier: 0.8,
      lerp: 0.08,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Features />
        <LoanCalculator />
        <HowItWorks />
        <AppShowcase />
        <Ecosystem />
        <Trust />
        <Stats />
        <Newsletter />
      </main>
      <Footer />
      <ChatBot />
    </>
  );
}
