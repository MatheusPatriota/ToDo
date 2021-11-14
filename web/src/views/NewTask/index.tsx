import React from "react";
import Footer from "../../components/Footer";
import { Header } from "../../components/Header";
import Icon from "../../components/Icon";
import NewTaskStyles from "./styles";

function NewTaskPage() {
  function categoriesList() {
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
          <div className="content">
            <div className="categories">{categoriesList()}</div>
            <div className="title">
              <span>titulo:</span>
              <input type="text" />
            </div>
            <div className="description">
              <span>Descrição:</span>
              <textarea
                name="description"
                id="description"
                cols={60}
                rows={10}
              ></textarea>
            </div>
            <div className="date">
              <span>Data:</span>
              <input type="text" />
            </div>
            <div className="time">
              <span>Hora:</span>
              <input type="text" />
            </div>
            <div className="finishArea">
              <div className="text">
                <div className="checkboxArea">
                  <input type="checkbox" />
                  <span>Concluído</span>
                </div>
                <div className="checkboxArea">
                  <span>Excluir</span>
                </div>
              </div>
              <button>
                Salvar
              </button>
            </div>
          </div>
        </body>
        <Footer />
      </NewTaskStyles>
    </>
  );
}

export { NewTaskPage };
