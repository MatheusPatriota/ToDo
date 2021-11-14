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
  const [lateCount, setLateCount] = useState();

  async function loadTasks() {
    await api
      .get(`/task/filter/${filterActived}/11:11:11:11:11:11`)
      .then((response) => {
        setTasks(response.data);
      });
  }

  async function lateTasksVerify() {
    await api.get(`/task/filter/late/11:11:11:11:11:11`).then((response) => {
      setLateCount(response.data.length);
    });
  }

  function Notification() {
    setFilterActived("late");
  }

  useEffect(() => {
    loadTasks();
    lateTasksVerify();
  }, [filterActived, lateCount, tasks]);

  return (
    <>
      <Header lateTasksCount={lateCount} clickNotification={Notification} />
      <body>
        <HomeStyles>
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
            <span>{filterActived === "late" ? "Atrasadas":"Tarefas"}</span>
            <div className="line"></div>
          </div>
          <div className="cardsContainer">
            {tasks ? (
              tasks.map((task: TaskType) => {
                return (
                  <TaskCard
                    icon={task.tipo}
                    title={task.titulo}
                    quando={task.quando}
                  />
                );
              })
            ) : (
              <div>não existem tasks cadastradas</div>
            )}
          </div>
        </HomeStyles>
      </body>
      <Footer />
    </>
  );
}

export { Home };
