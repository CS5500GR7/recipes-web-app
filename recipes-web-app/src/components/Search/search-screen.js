import React, {useState, useEffect} from 'react'
import {Link, useParams, useHistory} from "react-router-dom";
import cocktailService from "../../services/cocktail-service"
import './search.css'
import {logout} from "../../services/user-service";

const SearchScreen = () => {
    const history = useHistory();
    const {cocktailParams} = useParams()
    console.log(cocktailParams + "<- params");
    const [searchCocktail, setSearchCocktail] = useState("")
    console.log(searchCocktail + "<- searchCocktail")
    const [results, setResults] = useState({drinks: []})
    useEffect(() => {
        console.log("I am Search's useEffect")
        if (cocktailParams !== "undefined" && typeof cocktailParams !== "undefined") {
            cocktailService.findCocktailByName(cocktailParams)
                .then((results) => {
                    setResults(results)
                })

        }
    },[])

    const findCocktailByName = (cocktailName) => {
        console.log("I am findCocktailByName function")
        // history.push(`/search/${cocktailName}`)
        // console.log("完成redirect")
        cocktailService.findCocktailByName(cocktailName)
            .then((results) => {
                setResults(results)
            })
            .then(() => {
                console.log("发送请求，收到回应，已updated results")
            })
    }
    return (
        <div>

        </div>
    )
}
export default SearchScreen