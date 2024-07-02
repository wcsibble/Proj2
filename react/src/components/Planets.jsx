import { useSearchParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

const Planets = () => {
  const [planet, setPlanet] = useState({});
  const [characters, setCharacters] = useState([]);
  const [films, setFilms] = useState([]);

  useEffect(() => {
    let params = new URL(document.location).searchParams;
    let id = params.get("id");
    console.log(id);

    const getFilms = async (id) => {
      // let url = 'https://swapi2.azurewebsites.net/api/characters';
      let url = `http://localhost:3000/api/planets/${id}/films`;

      try {
        const fetchedFilms = await fetch(url).then((res) => res.json());
        setFilms(fetchedFilms);
        console.log(fetchedFilms);
      } catch (ex) {
        console.error("Error reading characters.", ex.message);
      }
    };

    const getPlanet = async (id) => {
      // let url = 'https://swapi2.azurewebsites.net/api/characters';
      let url = `http://localhost:3000/api/planets/${id}`;

      try {
        const fetchedPlanet = await fetch(url).then((res) => res.json());
        setPlanet(fetchedPlanet);
        console.log(fetchedPlanet);
      } catch (ex) {
        console.error("Error reading characters.", ex.message);
      }
    };

    const getCharacters = async (id) => {
      // let url = 'https://swapi2.azurewebsites.net/api/characters';
      let url = `http://localhost:3000/api/planets/${id}/characters`;

      try {
        const fetchedCharacters = await fetch(url).then((res) => res.json());
        setCharacters(fetchedCharacters);
        console.log(fetchedCharacters);
      } catch (ex) {
        console.error("Error reading characters.", ex.message);
      }
    };

    getPlanet(id);
    getFilms(id);
    getCharacters(id);
  }, []);

  return (
    <div>
      <h1 id="name">{planet.name}</h1>
      <div id="generalInfo">
        <p>
          Climate: <span id="climate">{planet.climate}</span>
        </p>
        <p>
          Terrain: <span id="terrain">{planet.terrain}</span>
        </p>
        <p>
          Population: <span id="population"></span>
          {planet.population}
        </p>
      </div>
      <section id="characters">
        <h2>Characters</h2>
        <ul>
          {characters.map((character) => (
            <li key={character.id}>
              <a
                onClick={() => {
                  window.location = `/characters?id=${character.id}`;
                }}
              >
                {character.name}
              </a>
            </li>
          ))}
        </ul>
      </section>
      <section id="films">
        <h2>Films</h2>
        <ul>
          {films.map((film) => (
            <li key={film.id}>
              <a
                onClick={() => {
                  window.location = `/films?id=${film.id}`;
                }}
              >
                {film.title}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Planets;
