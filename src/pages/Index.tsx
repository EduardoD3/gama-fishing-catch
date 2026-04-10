import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedCarousel from "@/components/FeaturedCarousel";
import ProductGrid from "@/components/ProductGrid";
import HowItWorks from "@/components/HowItWorks";
import WhatsAppFab from "@/components/WhatsAppFab";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <FeaturedCarousel />
      <ProductGrid />
      <HowItWorks />
      <Footer />
      <WhatsAppFab />
      <CartDrawer />
    </div>
  );
};

export default Index;
