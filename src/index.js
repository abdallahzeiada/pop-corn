import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import App from "./App";
import StarRating from "./components/StarRating";

function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <>
      <StarRating
        maxRating="10"
        size={28}
        color="red"
        className="test"
        defaultRating={3}
        onRatingMovies={setMovieRating}
      />
      <p>{movieRating} stars</p>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    /> */}
    {/* <Test /> */}
    {/* <StarRating /> */}
  </React.StrictMode>
);
