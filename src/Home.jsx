import React from "react";
import Product from "./Product";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id={12234}
            title="Serious Cryptography: A Practical Introduction to Modern Encryption"
            price={29.99}
            image="https://m.media-amazon.com/images/I/51wv16GC0FL.jpg"
            rating={3}
          />
          <Product
            id={45224}
            title="(Renewed) Dell Latitude E5470 Intel Core i5 6th Gen.6200u Processor 14.1 Inches HD Screen Notebook Computer (8 GB Ram & 256 GB SSD, Windows 10 Pro, 1.71Kg) "
            price={399.99}
            image="https://m.media-amazon.com/images/I/61BeBTB41DL._SL1500_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id={24353}
            title="RPM Euro Games Gaming Keyboard with Backlit RGB | with Wrist Support | Semi-Mechanical, Black "
            price={89.5}
            image="https://m.media-amazon.com/images/I/614lHdBn4kL._SL1100_.jpg"
            rating={5}
          />
          <Product
            id={57474}
            title="Apple iPhone 13 (256GB) - Midnight"
            price={899.99}
            image="https://m.media-amazon.com/images/I/61VuVU94RnL._SL1500_.jpg"
            rating={4}
          />

          <Product
            id={84982}
            title="Samsung 80 cm (32 inches) Wondertainment Series HD Ready LED Smart TV UA32TE40AAKBXL (Titan Gray) (2020 Model)"
            price={348.5}
            image="https://m.media-amazon.com/images/I/81N8UlFd0kL._SL1500_.jpg"
            rating={2}
          />
        </div>
        <div className="home__row">
          <Product
            id={47930}
            title="Acer Nitro Ultrawide XV340CKP 34 Inch IPS QHD (3440 x 1440) Gaming Monitor I 1 MS VRB I 144Hz Rapid Refresh Rate I AMD FREESYNC I HDR10 I 2 x DP Ports, 2 x HDMI, 2 x USB 3.0 Ports, Black "
            price={1134}
            image="https://m.media-amazon.com/images/I/81yhmZICzCL._SL1500_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
