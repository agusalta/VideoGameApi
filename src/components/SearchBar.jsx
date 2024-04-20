import React from "react";

function SearchBar({ search }) {
  return (
    <section id="buscador">
      <h1>JUEGOSJUEGOS.com</h1>
      <input
        id="input-buscador__juegos"
        type="search"
        onChange={search}
        placeholder="Buscar juego"
      />
    </section>
  );
}

export default SearchBar;
