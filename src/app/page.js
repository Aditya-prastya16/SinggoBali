'use client'
import Head from "next/head";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import SectionTitle from "./components/sectionTitle";

import { benefitOne, benefitTwo } from "./components/data";
import Benefits from "./components/benefits";
import Footer from "./components/footer";
import Testimonials from "./components/testimonials";
import Cta from "./components/cta";


const Home = () => {
  return (
    <>
      <Head>
        <title></title>
        <meta
          name="description"
          content=""
        />
        <link rel="icon" href="/Singgologo.png" />
        <style>
          
    {`
      html {
        scroll-behavior: smooth;
      }
      
    `}
    
  </style>
      </Head>

      <Navbar />
      <Hero  />

      <div id="Produk">
      <SectionTitle
        title="Produk Singgo Bali">
        Berikut ini adalah menu utama singgo bali yang sedang kami jual
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      </div>
      <div id="Menu">
      <SectionTitle
        pretitle="Menu Kami"
        title="Beberapa Menu Yang Kami Jual">
        Dalam menu yang kami jual terdapat beberapa makanan dan minuman seperti nasi jinggo, tuak , arak , kerupuk dan rempeyek
      </SectionTitle>
      <Testimonials />    
        </div>
        <div id="Lokasi">
      <Cta />
        </div>
        <div id="Kontak">
      <Footer />
        </div>
    </>
  );
}

export default Home;