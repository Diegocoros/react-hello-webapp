import React, { useState, useEffect } from "react";
import { EntityCard } from "../component/entityCard";

export const Home = () => {
    const [people, setPeople] = useState([]);
    const [vehicles, setVehicles] = useState([]);
    const [planets, setPlanets] = useState([]);

    useEffect(() => {
        fetch("https://www.swapi.tech/api/people")
            .then((res) => res.json())
            .then((data) => setPeople(data.results));
        fetch("https://www.swapi.tech/api/vehicles")
            .then((res) => res.json())
            .then((data) => setVehicles(data.results));
        fetch("https://www.swapi.tech/api/planets")
            .then((res) => res.json())
            .then((data) => setPlanets(data.results));
    }, []);

    return (
        <div className="container">
            <h1>SWAPI Explorer</h1>
            <div>
                <h2>People</h2>
                <div className="row">
                    {people.map((person) => (
                        <EntityCard key={person.uid} entity={person} type="characters" />
                    ))}
                </div>
                <h2>Vehicles</h2>
                <div className="row">
                    {vehicles.map((vehicle) => (
                        <EntityCard key={vehicle.uid} entity={vehicle} type="vehicles" />
                    ))}
                </div>
                <h2>Planets</h2>
                <div className="row">
                    {planets.map((planet) => (
                        <EntityCard key={planet.uid} entity={planet} type="planets" />
                    ))}
                </div>
            </div>
        </div>
    );
};
