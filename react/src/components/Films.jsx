import { useSearchParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

const Films = () => {
  const [film, setFilm] = useState({});
  const [planets, setPlanets] = useState([]);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    let params = new URL(document.location).searchParams;
    let id = params.get("id");
    console.log(id);

    const getFilm = async (id) => {
      // let url = 'https://swapi2.azurewebsites.net/api/characters';
      let url = `http://localhost:3000/api/films/${id}`;

      try {
        const fetchedFilm = await fetch(url).then((res) => res.json());
        setFilm(fetchedFilm);
        console.log(fetchedFilm);
      } catch (ex) {
        console.error("Error reading characters.", ex.message);
      }
    };
    const getPlanets = async (id) => {
      // let url = 'https://swapi2.azurewebsites.net/api/characters';
      let url = `http://localhost:3000/api/films/${id}/planets`;

      try {
        const fetchedPlanets = await fetch(url).then((res) => res.json());
        setPlanets(fetchedPlanets);
        console.log(fetchedPlanets);
      } catch (ex) {
        console.error("Error reading characters.", ex.message);
      }
    };
    const getCharacters = async (id) => {
      // let url = 'https://swapi2.azurewebsites.net/api/characters';
      let url = `http://localhost:3000/api/films/${id}/characters`;

      try {
        const fetchedCharacters = await fetch(url).then((res) => res.json());
        setCharacters(fetchedCharacters);
        console.log(fetchedCharacters);
      } catch (ex) {
        console.error("Error reading characters.", ex.message);
      }
    };

    getFilm(id);
    getPlanets(id);
    getCharacters(id);
  }, []);

  return (
    <main>
      <h1 id="name">{film.title}</h1>
      <section id="generalInfo">
        <p>
          Released: <span id="released">{film.release_date}</span>
        </p>
        <p>
          Director: <span id="director">{film.director}</span>
        </p>
        <p>
          Episode: <span id="episode">{film.episode_id}</span>
        </p>
      </section>
      <section id="characters">
        <h2>Characters in Film</h2>
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
      <section id="planets">
        <h2>Planets in Film</h2>
        <ul>
          {planets.map((planet) => (
            <li key={planet.id}>
              <a
                onClick={() => {
                  window.location = `/planets?id=${planet.id}`;
                }}
              >
                {planet.name}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Films;
