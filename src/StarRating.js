import React, {useState} from "react";
import { FaStar } from "react-icons/fa";
import './App.css';


export default function StarRating (){
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    return (
        <div className="starDiv">
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1
               return (
               <label  key={i}>
                   <input 
                    type='radio' 
                    name='rating'
                    value={ratingValue}
                    onClick={() => setRating(ratingValue)}
                    />
                   <FaStar 
                   className='star' 
                   color={ratingValue <= (hover || rating) ? '#FFD700' : '#808080'} 
                   size='30px'
                   onMouseEnter={() => setHover(ratingValue)}
                   onMouseLeave={() => setHover(null)}
                   />
               </label>    
               )})} 
        </div>
    )
}