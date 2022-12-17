import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="search">
      <div className="container">
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
        <div className="right">
          <div className="promo">
            <h4 className="save">Search Destinations with Dates Below</h4>
          </div>
          <form>
            <div className="input__wrap">
              <label>Destination</label>
              <select name="destination-search" id="destination">
                <option value="1">Paris</option>
                <option value="2">London</option>
                <option value="3">Melbourne</option>
                <option value="4">New York City</option>
              </select>
              <br />
              <label>Date: </label>
              <input
                type="date"
                className="start__date"
                min="2022-01-01"
                max="2024-01-01"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
