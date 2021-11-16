import React from "react";

function Task() {
  return (
    // isso é um fragment
    <>
      <header>
        {" "}
        OI mundo sou o cabeçalho, estou presente em varios lugares
      </header>
      Oi mundo eu sou o corpo, sou exclusivo
      <footer>Eu sou o rodapé :)</footer>
    </>
  );
}

export { Task };
