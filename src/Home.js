import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />

      {/* product id, title, price, rating, image */}

      <div className="home__row">
        <Product
          id="12345"
          title="OPTIMA Travel Laptop Backpack, Laptops Backpack, Computer Bag for Women & Men Fits 15.6 Inch Laptop and Notebook - and Disposable PPE kit with 90 GSM Polypropylene Spunbond - Non Woven"
          price={699.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/61SDrJh0lKL._AC_UL480_FMwebp_QL65_.jpg"
        />
        <Product
          id="1234578"
          title="OnePlus 8 (Glacial Green 6GB RAM+128GB Storage)"
          price={41999.06}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/619iTNHSCGL._SL1500_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="12345684"
          title="JCI 750W 48mm Copper MotorJumbo 089 Black Casting Mixer Grinder and 3 Stainless Steel Jar White"
          price={1849.5}
          rating={1}
          image="https://images-na.ssl-images-amazon.com/images/I/413M%2By97KyL.jpg"
        />
        <Product
          id="123454523"
          title="Mi Smart Band 4- India's No.1 Fitness Band, Up-to 20 Days Battery Life, Color AMOLED Full-Touch Screen, Waterproof with Music Control and Unlimited Watch Facesn"
          price={2099.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71ZSpNjEl0L._SL1500_.jpg"
        />
        <Product
          id="1234542315"
          title="QUBO Smart Indoor Camera - WiFi/Wireless Home Security System| 1080p FHD| Face Recognition| Alexa Built-In Speaker| Intruder Alarm| Baby Cry Monitor| Night Vision| 2 Way Talk| Home Automation Hub"
          price={10989.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/51-w4A380HL._SL1000_.jpg"
        />
      </div>
      <div className="home__row"></div>

      <Product
        id="12395645"
        title="Apple iPad Air (10.5-inch, Wi-Fi, 64GB) - Space Grey"
        price={44899.99}
        rating={5}
        image="https://images-na.ssl-images-amazon.com/images/I/61z85f1XsgL._SL1500_.jpg"
      />
      {/*product */}
    </div>
  );
}

export default Home;
