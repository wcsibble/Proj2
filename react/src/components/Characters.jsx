import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Characters = () => {
  const [character, setCharacter] = useState({});
  const [planet, setPlanet] = useState("");
  const [films, setFilms] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    //let params = new URL(document.location).searchParams;
    console.log(id);

    const getCharacter = async (id) => {
      // let url = 'https://swapi2.azurewebsites.net/api/characters';
      let url = `http://localhost:3000/api/characters/${id}`;

      try {
        const fetchedCharacter = await fetch(url).then((res) => res.json());
        setCharacter(fetchedCharacter);
        console.log(fetchedCharacter);
        await getPlanet(fetchedCharacter.homeworld);
      } catch (ex) {
        console.error("Error reading characters.", ex.message);
      }
    };
    const getPlanet = async (homeworldId) => {
      // let url = 'https://swapi2.azurewebsites.net/api/characters';
      let url = `http://localhost:3000/api/planets/${homeworldId}`;

      try {
        const fetchedCharacter = await fetch(url).then((res) => res.json());
        if (fetchedCharacter) {
          console.log("good");
        } else {
          console.log("bad");
        }
        setPlanet(fetchedCharacter.name);
        console.log(fetchedCharacter);
      } catch (ex) {
        console.error("Error reading characters.", ex.message);
      }
    };
    const getFilms = async (id) => {
      // let url = 'https://swapi2.azurewebsites.net/api/characters';
      let url = `http://localhost:3000/api/characters/${id}/films`;

      try {
        const fetchedCharacter = await fetch(url).then((res) => res.json());
        setFilms(fetchedCharacter);
        console.log(fetchedCharacter);
      } catch (ex) {
        console.error("Error reading characters.", ex.message);
      }
    };

    getCharacter(id);
    // getPlanet(id);
    getFilms(id);
  }, []);

  return (
    <main>
      <h1 id="name">{character.name}</h1>
      <section id="generalInfo">
        <p>
          Height: <span id="height">{character.height}</span> cm
        </p>
        <p>
          Mass: <span id="mass">{character.mass}</span> kg
        </p>
        <p>
          Born: <span id="birth_year">{character.birth_year}</span>
        </p>
      </section>
      <section id="planets">
        <h2>Homeworld</h2>
        <p>
          <span id="homeworld">
            {/* <a
              onClick={() => {
                window.location = `/planets?id=${character.homeworld}`;
              }}
            > {planet}
            </a>*/}
            <Link to={`/planets/${character.homeworld}`}>{planet}</Link>
          </span>
        </p>
      </section>
      <section id="films">
        <h2>Films appeared in</h2>
        <ul>
          {films.map((film) => (
            <li key={film.id}>
              {/* <a
                onClick={() => {
                  window.location = `/films?id=${film.id}`;
                }}
              >
                {film.title}
              </a> */}
              <Link to={`/films/${film.id}`}>{film.title}</Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Characters;
