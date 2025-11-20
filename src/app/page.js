import Header from "@/components/Header";
import HeroVideo from "@/components/HeroVideo";
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
      {/* Para usar a versão original, troque HeroVideo por HeroOriginal acima */}
      <Destinations />
      <About />
      <Testimonials />
      <Footer />
    </main>
  );
}
