import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import cocktailService from "../../services/cocktail-service";
import "./search.css";
import { logout } from "../../services/user-service";

const SearchScreen = () => {
    const history = useHistory();
    const { cocktailParams } = useParams();
    console.log(cocktailParams + "<- params");
    const [searchCocktail, setSearchCocktail] = useState("");
    console.log(searchCocktail + "<- searchCocktail");
    const [results, setResults] = useState({ drinks: [] });
    useEffect(() => {
        console.log("I am Search's useEffect");
        if (
            cocktailParams !== "undefined" &&
            typeof cocktailParams !== "undefined"
        ) {
            cocktailService
                .findCocktailByName(cocktailParams)
                .then((results) => {
                    setResults(results);
                });
        }
    }, []);
    const [check, setCheck] = useState("");

    const findCocktailByName = (cocktailName) => {
        console.log("I am findCocktailByName function");
        cocktailService
            .findCocktailByName(cocktailName)
            .then((results) => {
                if(results.drinks === null) {
                    setCheck("check3");
                }
                else {
                    setResults(results);
                }
            })
            .then(() => {
                console.log("updated results");
            });
    };
    return (
        <div className="container-fluid search-top-margin search-bottom-margin">
            <div className="row">
                <div className="col-sm-2" />
                <div className="col-sm-8">
                    <div>
                        <h2 className="gold"> Search Cocktail </h2>
                        <input
                            value={searchCocktail}
                            onChange={(event) => {
                                setSearchCocktail(event.target.value);
                            }}
                            placeholder="Enter your search here."
                            className="form-control"
                        />
                        <button
                            onClick={() => {
                                findCocktailByName(searchCocktail);
                            }}
                            className="btn btn-primary btn-block button-search"
                        >
                            Search
                        </button>
                    </div>

                    <ul className="list-group">
                        <div>
                            {
                                check === "check3" &&
                                <>
                                    <div className='alert alert-warning'>
                                        We don't find related cocktail.
                                    </div>
                                </>
                            }
                        </div>
                        {results &&
                            results.drinks &&
                            results.drinks.map((cocktail) => {
                                return (

                                    <li className="list-group-item">
                                        <Link
                                            to={`/details/${cocktail.idDrink}`}
                                        >
                                            <div>
                                                {cocktail.strDrink}
                                                <img
                                                    className="float-right"
                                                    src={cocktail.strDrinkThumb}
                                                    width={50}
                                                />
                                            </div>

                                        </Link>
                                    </li>
                                );
                            })}
                    </ul>
                </div>
                <div className="col-sm-2" />
            </div>
        </div>
    );
};
export default SearchScreen;
