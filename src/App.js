import React from "react";
import "./App.css";

function App() {
  return (
    <section className="app-container">
      <section className="app-content">
        <h1>Happy 32nd Birthday!</h1>
        <img
          src="https://media.giphy.com/media/FWS7G7YkIm415ofAJR/giphy.gif"
          alt="hearts"
          className="app-hearts"
        />
        <a href="https://thepotterscenter.com/collections/classes/products/copy-of-beginning-intermediate-class-with-cole-monday-august-9th-september-13th-6-30-9-30-pm">
          <img
            src="https://media.giphy.com/media/FdjWTuiPMhqcf3RceL/100.gif"
            alt="pottery"
            className="app-img"
          />
        </a>
        <h3>
          I hope you have an incredible day. You are amazing, and I love you
          soooooo so so soo MUCH! ❤
        </h3>
        <h3 style={{marginTop: '2rem'}}>Pssst.... tap the spinning bowl to see what I got you 😉</h3>
      </section>
    </section>
  );
}

export default App;
