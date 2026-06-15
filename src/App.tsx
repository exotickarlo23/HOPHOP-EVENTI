import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Devices } from "./components/Devices";
import { Packages } from "./components/Packages";
import { HowItWorks } from "./components/HowItWorks";
import { Audiences } from "./components/Audiences";
import { Gallery } from "./components/Gallery";
import { FAQSection } from "./components/FAQ";
import { CtaSection } from "./components/CtaSection";
import { Footer } from "./components/Footer";
import { StickyMobileCTA } from "./components/StickyMobileCTA";

export default function App() {
  return (
    <>
      <Header />
      <main className="pb-20 md:pb-0">
        <Hero />
        <Devices />
        <Packages />
        <HowItWorks />
        <Audiences />
        <Gallery />
        <FAQSection />
        <CtaSection />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
