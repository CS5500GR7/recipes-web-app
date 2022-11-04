import React, {Fragment, useEffect, useState} from 'react'
import {Link, useParams} from "react-router-dom";
import reviewService from "../../services/review-service";

const ProfileReview = ({user, editable, currentProfile}) => {

    const {uid} = useParams();
    const [reviews, setReviews] = useState([]);
    const currentUsername = currentProfile.username;

    useEffect(() => {
        if(editable) {
            reviewService.findReviewsByUsername(user.username)
                .then(res => setReviews(res));
        } else if(uid) {
            reviewService.findReviewsByUsername(currentUsername)
                .then(res => setReviews(res));
        }
    }, [])

    console.log(editable);

    return (
        <Fragment>
            <h3 className="rose-red">Review</h3>
            <ul className='list-group review-block'>
                {
                    reviews.map(review =>
                        <li className='list-group-item' key={review._id}>
                            {editable &&
                            <i  id={review._id} className="fa fa-trash"
                                style={{color:"red", marginRight:"5px"}}
                                onClick={() => {
                                    console.log(review.cocktailId);
                                    console.log(review._id);
                                    reviewService.deleteReview(review.cocktailId, review._id);
                                    setReviews(reviews.filter(item => item._id !== review._id))}
                                }/>
                            }
                            <Link to={`/details/${review.cocktailId}`} style={{marginRight:"10px"}}>
                                <img className="review-img" src={review.cocktailImg}
                                     width={40}/>
                                {review.cocktailName}
                            </Link>
                            <br/>
                            {review.textArea}
                        </li>)
                }
            </ul>
        </Fragment>
    )
}

export default ProfileReview;