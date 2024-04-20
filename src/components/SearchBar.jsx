import React from "react";

function SearchBar({ search }) {
  return (
    <section id="buscador">
      <h1>
        JUEGOS<strong className="free">FREE</strong>.com
      </h1>
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
