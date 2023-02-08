import React from "react";
import Review from "./Review";
import "./style.css";

// npm i react-icons

const ReviewApp = () => {
  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>our reviews</h2>
          <div className="underline"></div>
        </div>
        <Review />
      </section>
    </main>
  );
};

export default ReviewApp;
