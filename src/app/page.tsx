// Página principal: junta las 12 secciones en orden.
import { CartProvider } from "@/components/cart/CartContext";
import CartDrawer from "@/components/cart/CartDrawer";
import DemoStrip from "@/components/sections/DemoStrip";
import AnnouncementBar from "@/components/sections/AnnouncementBar";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Benefits from "@/components/sections/Benefits";
import Categories from "@/components/sections/Categories";
import FeaturedProduct from "@/components/sections/FeaturedProduct";
import BestSellers from "@/components/sections/BestSellers";
import GiftFinder from "@/components/sections/GiftFinder";
import Testimonials from "@/components/sections/Testimonials";
import Faq from "@/components/sections/Faq";
import FinalCta from "@/components/sections/FinalCta";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    // CartProvider envuelve todo para que cualquier sección pueda usar el carrito
    <CartProvider>
      <DemoStrip />
      <AnnouncementBar />
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Categories />
        <FeaturedProduct />
        <BestSellers />
        <GiftFinder />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <CartDrawer />
    </CartProvider>
  );
}
