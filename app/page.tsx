import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import WhyNatural from "@/components/WhyNatural";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProductGrid />
        <WhyNatural />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
