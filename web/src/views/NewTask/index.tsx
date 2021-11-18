import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import { Header } from "../../components/Header";
import TypeIcons from "../../utils/TypeIcons";
import api from "../../services/api";
import NewTaskStyles from "./styles";
import { useParams } from "react-router";
import { format } from "date-fns";

function NewTaskPage() {
  const [lateCount, setLateCount] = useState();
  const [type, setType] = useState<number>(0);
  const { id } = useParams();
  const [done, setDone] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setHour] = useState("");
  const [macaddress, setMacAddress] = useState("11:11:11:11:11:11");

  async function lateTasksVerify() {
    await api.get(`/task/filter/late/11:11:11:11:11:11`).then((response) => {
      setLateCount(response.data.length);
    });
  }

  async function loadTasks() {
    console.log("esse é o id", id);
    await api.get(`/task/${id}`).then((response) => {
      console.log(response.data.when);
      setType(response.data.iconIndex);
      setTitle(response.data.title);
      setDescription(response.data.description);
      setDate(format(new Date(response.data.when), "yyyy-MM-dd"));
      setHour(format(new Date(response.data.when), "HH:mm"));
    });
  }

  async function createTask() {
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
    loadTasks();
  }, [lateCount]);

  return (
    // isso é um fragment
    <>
      <NewTaskStyles>
        <Header lateTasksCount={lateCount} />
        <div className="contentContainer">
          <div className="content">
            <div className="categories">
              {TypeIcons.map(
                (icon, index) =>
                  index >= 0 && (
                    <button
                      type="button"
                      onClick={() => {
                        console.log("cliquei no botao", type);
                        setType(index);
                      }}
                      className={`${index && type !== index && "inative"} ${
                        index === 0 ? "undefined" : ""
                      }`}
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
                value={title}
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
                value={description}
              ></textarea>
            </div>
            <div className="date">
              <span>Data:</span>
              <input
                type="date"
                onChange={(e) => {
                  setDate(e.target.value);
                }}
                value={date}
              />
            </div>
            <div className="time">
              <span>Hora:</span>
              <input
                type="time"
                onChange={(e) => {
                  setHour(e.target.value);
                }}
                value={time}
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
        </div>
        <Footer />
      </NewTaskStyles>
    </>
  );
}

export { NewTaskPage };
