import React, {useState} from "react";

export default function ReviewForm () {
    const [review, setReview] = useState([]);
    return (
        <div className="reviewForm">
            <span>
                <p>Movie Reviews</p>
                {review}
            </span>
            <form>
                <label>Write a review</label>
                <input 
                    
                    style={{width: "400px"}}
                    placeholder="Type your review here"
                    onBlur={(e) => setReview([...review, e.target.value])}
                    />
            </form>
        </div>
    )
}