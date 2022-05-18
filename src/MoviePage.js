import React from "react";
import ReviewForm from "./ReviewForm";
import StarRating from "./StarRating";
import './App.css';


export default function MoviePage ({ name, year, imgSrc, description }){
  return (
    <div>
      <h2>{ `${name} (${year}) `}</h2>
      <div id="wer">
        <img src={imgSrc}/>
      </div>
      <p>{description}</p>
      <div>
          <StarRating/>
          <ReviewForm/>
      </div>
    </div>
  )
}