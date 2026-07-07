import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NotFoundHero from "@/components/NotFoundHero";
import BackgroundGrid from "@/components/BackGround";
import Container from "@/components/Container";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <BackgroundGrid />

      <div className="relative z-10">
        <Container>
          <Navbar />
        </Container>

        <NotFoundHero />

        <Footer />
      </div>
    </main>
  );
}