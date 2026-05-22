import Header from "@/components/Header";
import HeroVideo from "@/components/HeroVideo";
import TrustBadges from "@/components/TrustBadges";
// import HeroOriginal from "@/components/HeroOriginal"; // Versão sem vídeo
import Destinations from "@/components/Destinations";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen bg-brisa">
      <Header />
      <HeroVideo />
      <TrustBadges />
      {/* Para usar a versão original, troque HeroVideo por HeroOriginal acima */}
      <Destinations />
      <About />
      <Testimonials />
      <Footer />
    </main>
  );
}
