const Characters = (character) => {
    return (
        <main>
        <h1 id="name">{character.name}</h1>
        <section id="generalInfo">
          <p>Height: <span id="height">{character.height}</span> cm</p>
          <p>Mass: <span id="mass">{character.mass}</span> kg</p>
          <p>Born: <span id="birth_year">{character.birth_year}</span></p>
        </section>
        <section id="planets">
          <h2>Homeworld</h2>
          <p><span id="homeworld">{character.homeworld}</span></p>
        </section>
        <section id="films">
          <h2>Films appeared in</h2>
          <ul>
            {/* {character.films.map(film => (
              <li key={film}>{film}</li>
            ))} */}
          </ul>
        </section>
      </main>
    );
  };
  
  export default Characters;