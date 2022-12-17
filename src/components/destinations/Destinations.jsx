import React from "react";
import "./Destinations.css";
import SelectsImg from "../selectsimg/SelectsImg";
import Paris from "../../assets/paris.jpg";
import Nyc from "../../assets/nyc.jpg";
import Melbourne from "../../assets/melbourne.jpg";
import London from "../../assets/london.jpg";

export default function Destinations() {
  return (
    <div className="destinations">
      <div className="container">
        <h1> Tennis Open Host Cities </h1>
      </div>
      <div className="img__container">
        <SelectsImg bgImg={London} text="London" />
        <SelectsImg bgImg={Melbourne} text="Melbourne" />
        <SelectsImg bgImg={Paris} text="Paris" />
        <SelectsImg bgImg={Nyc} text="New York City" />
      </div>
      <div className="search__info">
        <div className="left">
          <h2>Enjoy the city and world-class matches!</h2>
          <p>
            While experiencing ambiance of a Tennis Major, enjoy the city that
            host these memorable tournaments. You can visit the Louvre in Paris,
            enjoy NY Style pizza first hand while in New York City, some
            delicate seafood in Melbourne, or even some classica fish and chips
            in London.
          </p>
        </div>
      </div>
    </div>
  );
}
