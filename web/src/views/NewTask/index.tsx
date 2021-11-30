import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import { Header } from "../../components/Header";
import TypeIcons from "../../utils/TypeIcons";
import api from "../../services/api";
import NewTaskStyles from "./styles";
import { useParams } from "react-router";
import { format } from "date-fns";
import { Navigate } from "react-router-dom";

function NewTaskPage() {
  const [redirect, setRedirect] = useState(false);
  const [type, setType] = useState<number>(0);
  const { id } = useParams();
  const [done, setDone] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setHour] = useState("");
  const [macaddress, setMacAddress] = useState("11:11:11:11:11:11");

  async function loadTasks() {
    await api.get(`/task/${id}`).then((response) => {
      setType(response.data.type);
      setTitle(response.data.title);
      setDescription(response.data.description);
      setDate(format(new Date(response.data.when), "yyyy-MM-dd"));
      setHour(format(new Date(response.data.when), "HH:mm"));
    });
  }

  async function updateTask() {
    await api
      .put(`/task/${id}`, {
        macaddress,
        type,
        title,
        description,
        when: `${date}T${time}:00.000`,
      })
      .then(() => {
        alert("tarefa Atualizada com sucesso!");
        setRedirect(true);
      })
      .catch((e) => {
        alert("algo deu errado na atualização");
        console.log(e.message);
      });
  }

  async function createTask() {
    if (type === 0) {
      return alert("informe a categoria da tarefa");
    } else if (title === "") {
      return alert("informe o Titulo da tarefa");
    } else if (description === "") {
      return alert("informe a Descrição da tarefa");
    } else if (date === "") {
      return alert("informe a Data da tarefa");
    } else if (time === "") {
      return alert("informe a Hora da tarefa");
    }

    if (id) {
      updateTask();
    } else {
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
          setRedirect(true);
        })
        .catch((e) => {
          alert("algo deu errado");
          console.log(e.message);
        });
    }
  }

  useEffect(() => {
    loadTasks();
  }, [loadTasks]);

  return (
    // isso é um fragment
    <>
      <NewTaskStyles>
        {redirect && <Navigate to="/" />}
        <Header />
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
                required
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
              </div>
              <button type="submit" onClick={createTask}>
                Salvar
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </NewTaskStyles>
    </>
  );
}

export { NewTaskPage };
