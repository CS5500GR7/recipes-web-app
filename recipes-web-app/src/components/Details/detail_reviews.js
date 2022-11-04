import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import reviewService from "../../services/review-service";
import "./detail.css";

const ReviewList = ({ cocktailId, user, cocktailName, cocktailImg }) => {
	const [review, setReview] = useState([]);
	const [myReview, setMyReview] = useState({});
	useEffect(() => {
		findReviewsForCocktail();
	}, [cocktailId]);

	const submitHandler = () => {
		reviewService
			.createReviewForCocktail(
				cocktailId,
				myReview.textArea,
				user.username,
				cocktailName,
				cocktailImg,
				user._id
			)
			.then((res) => console.log(res));
		setReview((review) => [...review, myReview]);
	};
	return (
		<div>
			<h5 className="section-title">Reviews</h5>

			<ul>
				{review &&
					review[0] &&
					review.map((item, i) => {
						return (
							<li className="list-spacing" key={i}>
								<Link
									className="reviews-title"
									to={
										user &&
										user._id &&
										item.userId &&
										user._id === item.userId
											? "/profile"
											: `/profiles/${item.userId}`
									}
								>
									{item.username}
								</Link>
								<div className="reviews-text">
									{item.textArea}
								</div>
							</li>
						);
					})}
			</ul>
			{!user && (
				<>
					<div className="alert alert-warning">
						Please login to submit your review.
					</div>
				</>
			)}
			{user && (
				<>
					<h5 className="separation-padding">Submit Your Review</h5>
					<div>
						<textarea
							id="reviewText"
							placeholder="Please enter here."
							value={myReview.textArea}
							onChange={(e) => {
								setMyReview({
									...myReview,
									textArea: e.target.value,
									username: user.username,
								});
							}}
							className="form-control"
						/>
					</div>
					<br />
					<div className="d-grid gap-2 d-md-block">
						<button
							className="btn btn-primary"
							onClick={submitHandler}
						>
							Submit
						</button>
					</div>
				</>
			)}
		</div>
	);
};
export default ReviewList;
