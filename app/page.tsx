"use client";
import useReveal from "./components/useReveal";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Ticker from "./components/Ticker";
import Proses from "./components/Proses";
import Harga from "./components/Harga";
import Keunggulan from "./components/Keunggulan";
import Ulasan from "./components/Ulasan";
import { Pesan, Footer } from "./components/PesanFooter";

export default function Home() {
  useReveal();
  return (
    <>
      <Navbar />
      <Hero />
      <Ticker />
      <Proses />
      <Harga />
      <Keunggulan />
      <Ulasan />
      <Pesan />
      <Footer />
    </>
  );
}
