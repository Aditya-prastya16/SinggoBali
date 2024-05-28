import Image from "next/image";
import React from "react";
import Container from "./container";

import productOneImg from "/public/img/siggohero.png";
import productTwoImg from "/public/img/tuak.png";
import productThreeImg from "/public/img/arak.png";
import productFourImg from "/public/img/kerupuk.png";
import productFiveImg from "/public/img/rempeyek.png";
import productSixImg from "/public/img/snack.png";


const Products = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3 text-[#414141]">
        <div className="lg:col-span-2 xl:col-auto ">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-10 py-6 rounded-2xl dark:bg-trueGray-800 ">

            <ProductCard
              image={productOneImg}
              name="Nasi Jinggo"
              price="Rp.5,000"
            />
            <p className="text-lg font-semibold leading-normal ">
              Deskripsi :
            </p>
            <p className="text-base leading-normal ">
              Nasi jinggo berisi ayam, tempe, mie,teri dan sambal
            </p>
          </div>
        </div>
      
        <div className="lg:col-span-2 xl:col-auto ">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-10 py-6 rounded-2xl dark:bg-trueGray-800 ">

            <ProductCard
              image={productTwoImg}
              name="Tuak Bali"
              price="Rp.18,000"
            />
            <p className="text-lg font-semibold leading-normal ">
              Deskripsi :
            </p>
            <p className="text-base leading-normal ">
              Tuak bali yang diambil langsung dari daerah pembuatan tuak (karangasem)
            </p>
          </div>
        </div>

        <div className="lg:col-span-2 xl:col-auto ">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-10 py-6 rounded-2xl dark:bg-trueGray-800 ">

            <ProductCard
              image={productThreeImg}
              name="Arak Bali"
              price="Rp.20,000"
            />
            <p className="text-lg font-semibold leading-normal ">
              Deskripsi :
            </p>
            <p className="text-base leading-normal ">
              Arak bali yang diambil langsung dari daerah pembuatan tuak (karangasem)
            </p>
          </div>
        </div>

        <div className="lg:col-span-2 xl:col-auto ">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-10 py-6 rounded-2xl dark:bg-trueGray-800 ">

            <ProductCard
              image={productFourImg}
              name="Kerupuk"
              price="Rp.1,000"
            />
            <p className="text-lg font-semibold leading-normal ">
              Deskripsi :
            </p>
            <p className="text-base leading-normal ">
              Kerupuk yang dibuat untuk menemani dalam memakan nasi jinggo atau snack saat meminum tuak / arak
            </p>
          </div>
        </div>

        <div className="lg:col-span-2 xl:col-auto ">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-10 py-6 rounded-2xl dark:bg-trueGray-800 ">

            <ProductCard
              image={productFiveImg}
              name="Rempeyek"
              price="Rp.1,000"
            />
            <p className="text-lg font-semibold leading-normal ">
              Deskripsi :
            </p>
            <p className="text-base leading-normal ">
            Rempeyek kacang yang dibuat untuk menemani dalam memakan nasi jinggo atau snack saat meminum tuak / arak
            </p>
          </div>
        </div>

        <div className="lg:col-span-2 xl:col-auto ">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-10 py-6 rounded-2xl dark:bg-trueGray-800 ">

            <ProductCard
              image={productSixImg}
              name="Snack"
              price="Rp.1,000"
            />
            <p className="text-lg font-semibold leading-normal ">
              Deskripsi :
            </p>
            <p className="text-base leading-normal ">
            Snack yang dibuat untuk menemani dalam memakan nasi jinggo atau snack saat meminum tuak / arak
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}

function ProductCard(props) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-md w-40 h-40">
        <Image
          src={props.image}
          width="160"
          height="160"
          alt="Product"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-xl font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.price}</div>
      </div>
    </div>
  );
}

export default Products;
