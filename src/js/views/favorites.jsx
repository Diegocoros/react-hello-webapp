import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Favorites = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="container">
            <h1>Favorites</h1>
            <div className="row">
                {store.favorites.map((fav) => (
                    <div className="col-md-4" key={fav.uid}>
                        <div className="card">
                            <img
                                src={`https://starwars-visualguide.com/assets/img/${fav.type}/${fav.uid}.jpg`}
                                alt={fav.name}
                            />
                            <div className="card-body">
                                <h5>{fav.name}</h5>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => actions.removeFavorite(fav.uid)}>
                                    Remove
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
