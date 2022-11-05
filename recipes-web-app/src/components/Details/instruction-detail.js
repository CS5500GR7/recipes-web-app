import React, { useEffect, useState } from "react";
import cocktailService from "../../services/cocktail-service";
import { useParams } from "react-router-dom";

const InstructionDetail = ({ instruction }) => {
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
    return (
        <div>
            <h5 className="section-title">Instructions</h5>
            <ul>
                {cocktail.drinks &&
                    cocktail.drinks[0] &&
                    cocktail.drinks[0].strInstructions
                        .split("\n")
                        .map((item, i) => {
                            return <li key={i}>{item}</li>;
                        })}
            </ul>
        </div>
    );
};
export default InstructionDetail;
