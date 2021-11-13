import React, { useEffect, useState } from "react";
import api from "../../services/api";

import FilterCard from "../../components/FilterCard";
import Footer from "../../components/Footer";
import { Header } from "../../components/Header";
import TaskCard from "../../components/TaskCard";
import HomeStyles from "./styles";

type TaskType = {
  created: string;
  descricao: string;
  done: boolean;
  macaddress: string;
  quando: string;
  tipo: number;
  titulo: string;
};

function Home() {
  const [filterActived, setFilterActived] = useState<String>("all");
  const [tasks, setTasks]: any[] = useState([]);

  async function loadTasks() {
    await api
      .get(`/task/filter/${filterActived}/11:11:11:11:11:11`)
      .then((response) => {
        console.log("console loadtask", response.data);
        setTasks(response.data);
      });
  }

  useEffect(() => {
    loadTasks();
  }, [filterActived, tasks]);

  return (
    <>
      <HomeStyles>
        <Header />
        <body>
          <div className="filters">
            <button onClick={() => setFilterActived("all")}>
              <FilterCard description="Todos" />
            </button>
            <button onClick={() => setFilterActived("today")}>
              <FilterCard description="Hoje" />
            </button>
            <button onClick={() => setFilterActived("week")}>
              <FilterCard description="Semana" />
            </button>
            <button onClick={() => setFilterActived("month")}>
              <FilterCard description="Mês" />
            </button>
            <button onClick={() => setFilterActived("year")}>
              <FilterCard description="Ano" />
            </button>
          </div>
          <div className="dividerTaks">
            <div className="line"></div>
            <span>Tarefas</span>
            <div className="line"></div>
          </div>
          <div className="cardsContainer">
            {tasks ? (
              tasks.map((task: TaskType) => {
                console.log(task.titulo);
                return (
                  <TaskCard
                    icon=""
                    title={task.titulo}
                    date={task.quando}
                    time="00"
                  />
                );
              })
            ) : (
              <div>não existem tasks cadastradas</div>
            )}
          </div>
        </body>
        <Footer />
      </HomeStyles>
    </>
  );
}

export { Home };
