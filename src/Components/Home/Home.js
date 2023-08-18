import "./Home.css";
import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Product from "./../Products/Product";
import shortid from "shortid";
import prod1 from "../../images/1.png";
import prod2 from "../../images/2.png";
import prod3 from "../../images/3.png";
import prod4 from "../../images/4.png";
import prod5 from "../../images/5.png";
import prod6 from "../../images/6.png";
import prod7 from "../../images/7.png"
import prod8 from "../../images/8.png"
import prod9 from "../../images/9.png"
import prod10 from "../../images/10.png"
import prod11 from "../../images/11.png"


const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "550px",
};
const slideImages = [
  {
    url: "https://m.media-amazon.com/images/I/710ybG+VwoL._SX3000_.jpg",
  },
  {
    url: "https://m.media-amazon.com/images/I/7102I1D+77L._SX3000_.jpg",
  },
  {
    url: "https://m.media-amazon.com/images/I/61Vk5g9BXZL._SX3000_.jpg",
  },
  {
    url: "https://m.media-amazon.com/images/I/71KqvXdAQkL._SX3000_.jpg",
  },
];
const Home = () => {
  return (
    <>
      {/* //slider */}
      <div className="slide-container">
        <Slide>
          {slideImages.map((slideImage, index) => (
            <div key={index}>
              <div
                style={{
                  ...divStyle,
                  backgroundImage: `url(${slideImage.url})`,
                }}
              ></div>
            </div>
          ))}
        </Slide>
      </div>
      <div className="home">
        <div className="home-container">
          <div className="home-row">
            <Product
              id={shortid.generate()}
              image={prod1}
              price={64}
              title="Razer Kraken Tournament Edition THX 7.1 Surround Sound Gaming Headset: Retractable Noise Cancelling Mic - USB DAC -  For PC, PS4, PS5, Nintendo Switch, Xbox One, Xbox Series X & S, Mobile – Black"
              rating={5}
            />
            <Product
              id={shortid.generate()}
              image={prod2}
              price={800}
              title="Lenovo - 2021 - IdeaPad 3 - Gaming Laptop - AMD Ryzen 5 5600H - 8GB RAM - 256GB Storage - NVIDIA GeForce GTX 1650-15.6 FHD Display - Windows 11 Home"
              rating={4}
            />
          </div>
          <div className="home-row">
            <Product
              id={shortid.generate()}
              image={prod3}
              price={75}
              title="Fujitsu ScanSnap iX1600 Wireless or USB High-Speed Cloud Enabled Document, Photo & Receipt Scanner with Large Touchscreen and Auto Document Feeder for Mac or PC, White"
              rating={3}
            />
            <Product
              id={shortid.generate()}
              image={prod4}
              price={95}
              title="Razer Kraken Tournament Edition THX 7.1 Surround Sound Gaming Headset: Retractable Noise Cancelling Mic - USB DAC -  For PC, PS4, PS5, Nintendo Switch, Xbox One, Xbox Series X & S, Mobile – Black"
              rating={5}
            />
            <Product
              id={shortid.generate()}
              image={prod5}
              price={60}
              title="Meta Quest 2 — Advanced All-In-One Virtual Reality Headset — 128 GB"
              rating={4}
            />
          </div>
          <div className="home-row">
            <Product
              id={shortid.generate()}
              image={prod6}
              price={45}
              title="MeLE PCG02 Fanless Mini PC Stick Windows 11 Pro J4125 8GB/128GB Portable Mini Desktop Computer Stick Business & Home Video Support HDMI 4K 60Hz, BT4.2, 2.4G/5.8G Dual Band Wi-Fi, USB, Ethernet..."
              rating={4}
            />
            <Product
              id={shortid.generate()}
              image={prod7}
              price={80}
              title="Tablet Samsung Galaxy Tab S6 Lite, 4GB RAM, 64GB ROM, 10.4 inches, WiFi - Angora Blue - 1 year Warranty Samsung Galaxy Tab A7 Lite - 8.7 Inches Display, 3 GB ...."
              rating={5}
            />
            <Product
              id={shortid.generate()}
              image={prod9}
              price={80}
              title="Tablet Samsung Galaxy Tab S6 Lite, 4GB RAM, 64GB ROM, 10.4 inches, WiFi - Angora Blue - 1 year Warranty Samsung Galaxy Tab A7 Lite - 8.7 Inches Display, 3 GB ...."
              rating={5}
            />
          </div>
          <div className="home-row">
            <Product
              id={shortid.generate()}
              image={prod10}
              price={98}
              title="MeLE PCG02 Fanless Mini PC Stick Windows 11 Pro J4125 8GB/128GB Portable Mini Desktop Computer Stick Business & Home Video Support HDMI 4K 60Hz, BT4.2, 2.4G/5.8G Dual Band Wi-Fi, USB, Ethernet..."
              rating={5}
            />
            <Product
              id={shortid.generate()}
              image={prod11}
              price={1005}
              title="Lenovo - 2021 - IdeaPad 3 - Gaming Laptop - AMD Ryzen 5 5600H - 8GB RAM - 256GB Storage - NVIDIA GeForce GTX 1650-15.6 FHD Display - Windows 11 Home"
              rating={4}
            />
            <Product
              id={shortid.generate()}
              image={prod8}
              price={87}
              title="Tablet Samsung Galaxy Tab S6 Lite, 4GB RAM, 64GB ROM, 10.4 inches, WiFi - Angora Blue - 1 year Warranty Samsung Galaxy Tab A7 Lite - 8.7 Inches Display, 3 GB ...."
              rating={3}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
