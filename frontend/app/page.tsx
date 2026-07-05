import Image from "next/image";
import Footer from "../components/Footer"
import Navbar from "../components/Navbar";

import NotFoundHero from "@/components/NotFoundHero";
import Container from "@/components/Container";
export default function Home() {
  return (
    <>
    <Navbar />
      <main>
      <Container>
        <NotFoundHero />
        <Footer />
      </Container>
      </main>
    </>
  );
}
  

