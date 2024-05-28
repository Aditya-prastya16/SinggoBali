import Image from "next/image";
import heroImg from "/public/img/singgoheros.png";
import Container from "./container";
import { useState, useEffect } from "react";

const typingWords = ["Nasi Jinggo", "Tuak Bali", "Arak Bali"];
const typingSpeed = 1000; // Speed of typing and deleting
const pauseTime = 500; // Pause time before starting to type next word

const Hero = () => {
  const [currentWord, setCurrentWord] = useState(typingWords[0]);
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      if (isDeleting) {
        setCurrentWord((prev) => prev.slice(0, prev.length - 1));
        if (currentWord === '') {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % typingWords.length);
        }
      } else {
        setCurrentWord(typingWords[index].slice(0, currentWord.length + 1));
        if (currentWord === typingWords[index]) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      }
    };

    const typingInterval = setInterval(handleTyping, typingSpeed / typingWords[index].length);

    return () => clearInterval(typingInterval);
  }, [currentWord, isDeleting, index]);

  return (
    <>
      <Container className="flex flex-wrap">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className=" text-2xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight dark:text-white">
               Singgo Bali, <span className="typing-text border-r-2 border-gray-800 dark:border-white">{currentWord}</span>
            </h1>
            <p className="py-5 text-lg leading-normal text-gray-500 lg:text-xl xl:text-1xl dark:text-gray-300">
              Singgo Bali merupakan solusi yang tepat untuk kalian saat lapar, karena lezat dan praktis selain itu nasi jinggo memiliki harga terjangkau , dengan harga Rp.5.000 rupiah kalian sudah bisa membeli nasi jinggo  
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="https://wa.me/+6281226451662?text=Hallo bisa pesan nasi jinggo?"
                target="_blank"
                rel="noopener"
                className="px-6 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-lg">
                Pesan Sekarang
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div>
            <Image
              src={heroImg}
              width="550"
              height="550"
              className="object-cover"
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Hero;
