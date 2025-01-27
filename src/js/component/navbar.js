import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
    const { store } = useContext(Context);

    return (
        <nav className="navbar navbar-light bg-light">
            <Link to="/" className="navbar-brand">SWAPI Explorer</Link>
            <div>
                <Link to="/favorites" className="btn btn-primary">
                    Favorites ({store.favorites.length})
                </Link>
            </div>
        </nav>
    );
};
