import React, {useState, useEffect, Fragment} from 'react'
import profileService from "../../services/profile-service";
import {findAllFavorites} from "../../services/favorite-service"
import {Link} from "react-router-dom";

const FavoriteList = ({user}) => {
    const [favorites, setFavorites] = useState([]);


    useEffect(() => {
        findAllFavorites()
            .then((favorites) => {
                setFavorites(favorites);
            })
    }, [])
    // var favorites = []
    return (
        <Fragment>
            <div className="favorite-block">
                <h3 className="rose-red">User's Favorites</h3>
                <ul className='list-group'>
                    {favorites.map(favorite =>
                        <li className="favorite-list-item" key={favorite._id}>
                            <Link to={`/details/${favorite.cocktailId}`}>
                                <img src={favorite.cocktailImg}
                                     width={120}/>
                                <br/>
                                {favorite.cocktailName}
                            </Link>
                        </li>
                    )}
                </ul>
            </div>


        </Fragment>
    );
}
export default FavoriteList;