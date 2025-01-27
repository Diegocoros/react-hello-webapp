import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const EntityCard = ({ entity, type }) => {
    const { actions } = useContext(Context);
    const imgUrl = `https://starwars-visualguide.com/assets/img/${type}/${entity.uid}.jpg`;

    return (
        <div className="col-md-4">
            <div className="card">
                <img src={imgUrl} alt={entity.name} className="card-img-top" />
                <div className="card-body">
                    <h5>{entity.name}</h5>
                    <button className="btn btn-primary" onClick={() => actions.addFavorite(entity)}>
                        Add to Favorites
                    </button>
                    <Link to={`/${type}/${entity.uid}`} className="btn btn-secondary">
                        Details
                    </Link>
                </div>
            </div>
        </div>
    );
};
