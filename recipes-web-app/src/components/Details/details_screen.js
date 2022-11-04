import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import "./detail.css";
import "../../vendor/fontawesome/css/all.min.css";
import cocktailService from "../../services/cocktail-service";
import ReviewList from "./detail-reviews";
import IngredientDetail from "./ingredient-detail";
import InstructionDetail from "./instruction-detail";
const DetailsScreen = ({ user, setUser }) => {
	const { cocktailId } = useParams();
	const history = useHistory();
	const [cocktail, setCocktail] = useState({});
	const [favorite, setFavorite] = useState(false);

	const cocktailName =
		cocktail.drinks && cocktail.drinks[0] && cocktail.drinks[0].strDrink;
	const cocktailImg =
		cocktail.drinks &&
		cocktail.drinks[0] &&
		cocktail.drinks[0].strDrinkThumb;

	useEffect(() => {
		findCocktailByCocktailId();
		if (user) {
			favoriteService
				.isFavorite(cocktailId, user._id)
				.then((res) => setFavorite(res));
		}
	}, [cocktailId, user]);

	const findCocktailByCocktailId = () => {
		cocktailService.findCocktailByCocktailId(cocktailId).then((data) => {
			setCocktail(data);
		});
	};

	const onClickAddFavorite = () => {
		favoriteService
			.addFavorite(
				cocktailId,
				user._id,
				user.username,
				cocktailName,
				cocktailImg
			)
			.then(() => setFavorite(true));
	};

	const onClickRemoveFavorite = () => {
		favoriteService
			.removeFavorite(cocktailId, user._id)
			.then(() => setFavorite(false));
	};

	return (
		<div className="container-fluid top-margin bottom-margin">
			<div className="row">
				<div className="col-sm-2" />
				<div className="col-sm-8">
					<br />
					<button
						className="btn btn-outline-primary"
						onClick={() => {
							history.goBack();
						}}
					>
						Back
					</button>
					<br />
					<h2 className="separation-padding cocktail-title">
						{cocktailName}
					</h2>
					<div className="row">
						{user && (
							<div className="col-xs-4">
								<Link
									className="btn btn-outline-info mr-1"
									to="/profile"
								>
									See Favorites{" "}
									<span className="fa fa-folder" />
								</Link>
								<>
									{!favorite && (
										<button
											className="btn btn-outline-success"
											onClick={onClickAddFavorite}
										>
											Add to Favorite{" "}
											<span className="fa fa-plus-square" />
										</button>
									)}
									{favorite && (
										<button
											className="btn btn-outline-danger"
											onClick={onClickRemoveFavorite}
										>
											Remove Favorite{" "}
											<span className="fa fa-trash" />
										</button>
									)}
								</>
							</div>
						)}
						<div className="col-xs-4"></div>
					</div>
					<br />
					<div className="text-center description-image">
						<img src={cocktailImg} width={500} />
					</div>
					<br />

					<div>
						<h5 className="separation-padding section-title">
							Category
						</h5>
						<p>
							{cocktail.drinks &&
								cocktail.drinks[0] &&
								cocktail.drinks[0].strCategory}
						</p>
					</div>

					<div>
						<h5 className="section-title">Glass Type</h5>
						<p>
							{cocktail.drinks &&
								cocktail.drinks[0] &&
								cocktail.drinks[0].strGlass}
						</p>
					</div>

					<div>
						<InstructionDetail />
					</div>

					<div>
						<IngredientDetail />
					</div>
					{/*<div>*/}
					{/*    <a*/}
					{/*        href={*/}
					{/*            cocktail.drinks && cocktail.drinks[0] && cocktail.drinks[0].strImageSource*/}
					{/*        }*/}
					{/*        target="_blank">*/}
					{/*        Download Image Here!*/}
					{/*    </a>*/}
					{/*</div>*/}

					<div className="separation-padding">
						<ReviewList
							cocktailId={cocktailId}
							user={user}
							setUser={setUser}
							cocktailName={cocktailName}
							cocktailImg={cocktailImg}
						/>
					</div>
				</div>
				<div className="col-sm-2" />
			</div>
		</div>
	);
};
export default DetailsScreen;
