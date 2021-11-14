import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import { Header } from "../../components/Header";
import TypeIcons from "../../utils/TypeIcons";
import api from "../../services/api";
import NewTaskStyles from "./styles";

function NewTaskPage() {
  const [lateCount, setLateCount] = useState();
  const [type, setType] = useState<number>(0);
  const [id, setId] = useState();
  const [done, setDone] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [macaddress, setMacAddress] = useState("11:11:11:11:11:11");

  async function lateTasksVerify() {
    await api.get(`/task/filter/late/11:11:11:11:11:11`).then((response) => {
      setLateCount(response.data.length);
    });
  }

  async function createTask() {
    console.log(
      macaddress,
      type,
      title,
      description,
      `${date}T${time}.000`,
      done
    );
    await api
      .post("/task", {
        macaddress,
        type,
        title,
        description,
        when: `${date}T${time}:00.000`,
      })
      .then(() => {
        alert("tarefa cadastrada com sucesso!");
      })
      .catch((e) => {
        alert("algo deu errado");
        console.log(e.message);
      });
  }

  useEffect(() => {
    lateTasksVerify();
  }, [lateCount]);

  return (
    // isso é um fragment
    <>
      <NewTaskStyles>
        <Header lateTasksCount={lateCount} />
        <body>
          <div className="content">
            <div className="categories">
              {TypeIcons.map(
                (icon, index) =>
                  index >= 0 && (
                    <button
                      type="button"
                      onClick={() => {
                        setType(index);
                        console.log("cliquei no botao", type);
                      }}
                      className={`${type && type !== index && "inative"} ${icon === undefined ? "undefined" : ""}`}
                    >
                      <img src={icon} alt="Tipo da Tarefa" />
                    </button>
                  )
              )}
            </div>
            <div className="title">
              <span>titulo:</span>
              <input
                type="text"
                placeholder="título da tarefa"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </div>
            <div className="description">
              <span>Descrição:</span>
              <textarea
                name="description"
                id="description"
                cols={60}
                rows={10}
                placeholder="descrição da tarefa"
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              ></textarea>
            </div>
            <div className="date">
              <span>Data:</span>
              <input
                type="date"
                onChange={(e) => {
                  setDate(e.target.value);
                }}
              />
            </div>
            <div className="time">
              <span>Hora:</span>
              <input
                type="time"
                onChange={(e) => {
                  setTime(e.target.value);
                }}
              />
            </div>
            <div className="finishArea">
              <div className="text">
                <div className="checkboxArea">
                  <input
                    type="checkbox"
                    checked={done}
                    onChange={() => {
                      setDone(!done);
                    }}
                  />
                  <span>Concluído</span>
                </div>
                <div className="checkboxArea">
                  <span>Excluir</span>
                </div>
              </div>
              <button onClick={createTask}>Salvar</button>
            </div>
          </div>
        </body>
        <Footer />
      </NewTaskStyles>
    </>
  );
}

export { NewTaskPage };
