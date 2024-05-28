import React from "react";
import Container from "./container";

const Cta = () => {
  return (
    <Container>
      <h1 className="text-3xl font-bold mb-2 text-center">Lokasi Kami</h1>
      <p className="text-lg font-semibold mb-4 text-center">Datang ke toko kami yang terletak pada alamat di bawah ini </p>
      <div className="mt-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d246.49589645146514!2d115.21137968353847!3d-8.697785362920106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2411404ecef79%3A0xbcbe530ba33e8794!2sWr%20nasi%20jinggo!5e0!3m2!1sid!2sid!4v1716729990768!5m2!1sid!2sid"
          style={{ border: 0, height: "500px", width: "100%" }}
          allowFullScreen=""
          loading="lazy"
          className="w-full"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </Container>
  );
}

export default Cta;
