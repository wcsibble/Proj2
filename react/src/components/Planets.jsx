const Planets = (planet) => {
    return (
        <div>
  <h1 id="name">{planet.name}</h1>
  <div id="generalInfo">
    <p>Climate: <span id="climate">{planet.climate}</span></p>
    <p>Terrain: <span id="terrain">{planet.terrain}</span></p>
    <p>Population: <span id="population"></span>{planet.population}</p>
  </div>
  <section id="residents">
    <h2>Residents</h2>
    <ul></ul>
  </section>
 
</div>

    );
};

export default Planets;