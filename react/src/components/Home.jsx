import React, { useEffect, useState } from "react";
import "../index.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Characters from "./Characters";

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [matchingCharacters, setMatchingCharacters] = useState([]);
  const [searchString, setSearchString] = useState("");

  useEffect(() => {
    const getCharacters = async () => {
      // let url = 'https://swapi2.azurewebsites.net/api/characters';
      let url = "http://localhost:3000/api/characters";

      try {
        const fetchedCharacters = await fetch(url).then((res) => res.json());
        setCharacters(fetchedCharacters);
      } catch (ex) {
        console.error("Error reading characters.", ex.message);
      }
    };

    getCharacters();
  }, []);

  useEffect(() => {
    const re = new RegExp(searchString, "i");
    const filtered = characters.filter((character) => re.test(character.name));
    setMatchingCharacters(filtered);
  }, [searchString, characters]);

  const handleSearchChange = (e) => {
    setSearchString(e.target.value);
  };

  const renderCharacters = (charactersList) => {
    return charactersList.map((character) => (
      <div key={character.id}>
        <Link to={`/characters/${character.id}`}>{character.name}</Link>
      </div>
    ));
  };

  return (
    <div>
      <h1>Star Wars Universe Lookup</h1>
      <label htmlFor="searchString">
        Who you looking for? <span className="small"></span>
      </label>
      <input
        id="searchString"
        onInput={handleSearchChange}
        autoComplete="off"
      />
      <section id="charactersList">
        {renderCharacters(
          matchingCharacters.length > 0 ? matchingCharacters : characters
        )}
      </section>
    </div>
  );
};

export default Home;
