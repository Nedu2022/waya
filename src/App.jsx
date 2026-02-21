import { lazy, Suspense, useEffect } from "react";
import Lenis from "lenis";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const Services = lazy(() => import("./components/Services"));
const Features = lazy(() => import("./components/Features"));
const LoanCalculator = lazy(() => import("./components/LoanCalculator"));
const HowItWorks = lazy(() => import("./components/HowItWorks"));
const AppShowcase = lazy(() => import("./components/AppShowcase"));
const Ecosystem = lazy(() => import("./components/Ecosystem"));
const Trust = lazy(() => import("./components/Trust"));
const Stats = lazy(() => import("./components/Stats"));
const Newsletter = lazy(() => import("./components/Newsletter"));
const Footer = lazy(() => import("./components/Footer"));
const ChatBot = lazy(() => import("./components/ChatBot"));

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
        <Suspense fallback={null}>
          <Services />
          <Features />
          <LoanCalculator />
          <HowItWorks />
          <AppShowcase />
          <Ecosystem />
          <Trust />
          <Stats />
          <Newsletter />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
        <ChatBot />
      </Suspense>
    </>
  );
}
