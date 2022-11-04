import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import cocktailService from "../../services/cocktail-service";

const IngredientDetail = ({ ingredient }) => {
    const { cocktailId } = useParams();
    const [cocktail, setCocktail] = useState({});
    useEffect(() => {
        findCocktailByCocktailId();
    }, []);
    const findCocktailByCocktailId = () => {
        cocktailService.findCocktailByCocktailId(cocktailId).then((data) => {
            setCocktail(data);
        });
    };

    const items = [];
    for (let i = 1; i <= 20; i++) {
        if (
            cocktail.drinks &&
            cocktail.drinks[0] &&
            cocktail.drinks[0][`strIngredient${i}`] === ""
        ) {
            break;
        }
        items.push(
            <tr>
                <td>
                    {cocktail.drinks &&
                        cocktail.drinks[0] &&
                        cocktail.drinks[0][`strIngredient${i}`]}
                </td>
                <td>
                    {cocktail.drinks &&
                        cocktail.drinks[0] &&
                        cocktail.drinks[0][`strMeasure${i}`]}
                </td>
            </tr>
        );
    }

    return (
        <div>
            <div>
                <h5 className="section-title">Ingredients</h5>
            </div>

            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Ingredient</th>
                        <th scope="col">Amount</th>
                    </tr>
                </thead>
                <tbody>{items}</tbody>
            </table>
        </div>
    );
};
export default IngredientDetail;
