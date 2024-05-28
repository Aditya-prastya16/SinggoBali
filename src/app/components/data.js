import {
  FaceSmileIcon,
  BuildingStorefrontIcon,
  CheckBadgeIcon,
  CheckCircleIcon,
  SunIcon,
  RocketLaunchIcon
} from "@heroicons/react/24/solid";

import benefitOneImg from "/public/img/siggohero.png";
import benefitTwoImg from "/public/img/tuak.png";

const benefitOne = {
  title: "Nasi Jinggo",
  desc: "Nasi jinggo berisi daging ayam, mie , sambal , teri , tempe dan sambal yang dibuat fresh tiap harinya",
  image: benefitOneImg,
  bullets: [
    {
      title: "Murah",
      desc: "Dengan uang Rp.5.000 kalian sudah bisa mendapatkan nasi jinggo",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Lezat dan Bergizi",
      desc: "Nasi jinggo dibuat dengan rasa yang pas di lidah orang indonesia",
      icon: <CheckBadgeIcon />,
    },
    {
      title: "Cepat Dan Praktis",
      desc: "Dengan membeli nasi jinggo kalian dapat menghemat uang dalam memasak makanan ",
      icon: <RocketLaunchIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Tuak Bali",
  desc: "Tuak Bali adalah minuman tradisional khas Bali yang terbuat dari nira atau sari bunga kelapa yang difermentasi. Minuman ini memiliki rasa yang manis dan sedikit asam dengan kandungan alkohol yang rendah hingga sedang",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Tradisional",
      desc: "Pembuatan tuak menggunakan metode tradisional",
      icon: <BuildingStorefrontIcon />,
    },
    {
      title: "Menyegarkan",
      desc: "Memberikan sensasi menyegarkan saat diminum terutama pada hari yang panas",
      icon: <SunIcon />,
    },
    {
      title: "Khas",
      desc: "Tuak bali memiliki cita rasa yang khas dan berbeda dari minuman lainnya",
      icon: <CheckCircleIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
