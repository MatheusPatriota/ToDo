import React from "react";
import Footer from "../../components/Footer";
import { Header } from "../../components/Header";
import Icon from "../../components/Icon";
import NewTaskStyles from "./styles";

function NewTaskPage() {
  function fazIsso() {
    var lista = [];
    for (let index = 1; index <= 9; index++) {
      lista.push(<Icon iconNumber={index} />);
    }
    return lista;
  }

  return (
    // isso é um fragment
    <>
      <NewTaskStyles>
        <Header />
        <body>
          <div className="categories">{fazIsso()}</div>
          <div className="title">titulo</div>
          <div className="description">descricao</div>
          <div className="date">data</div>
          <div className="time">hora</div>
          <div className="finishArea">finish</div>
        </body>
        <Footer />
      </NewTaskStyles>
    </>
  );
}

export { NewTaskPage };
