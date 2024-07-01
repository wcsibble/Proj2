const Films = (film) => {
    return (
        <body>
        <main>
          <h1 id="name">{film.name}</h1>
          <section id="generalInfo">
            <p>Released: <span id="released">{film.released}</span></p>
            <p>Director: <span id="director">{film.director}</span></p>
            <p>Episode: <span id="episode">{film.episode}</span></p>
          </section>
          <section id="characters">
            <h2>Characters in Film</h2>
            <ul></ul>
          </section>
          <section id="planets">
            <h2>Planets in Film</h2>
            <ul></ul>
          </section>
          
        </main>
      </body>

    );
};

export default Films;