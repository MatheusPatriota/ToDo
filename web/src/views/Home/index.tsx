import React, { useEffect, useState } from "react";
import api from "../../services/api";

import FilterCard from "../../components/FilterCard";
import Footer from "../../components/Footer";
import { Header } from "../../components/Header";
import TaskCard from "../../components/TaskCard";
import HomeStyles from "./styles";
import { Link } from "react-router-dom";

type TaskType = {
  _id: any;
  created: string;
  description: string;
  done: boolean;
  macaddress: string;
  when: string;
  type: number;
  title: string;
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
  }, [filterActived]);

  return (
    <>
      <Header lateTasksCount={lateCount} clickNotification={Notification} />
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
          <div className="dividerTasks">
            <div className="line"></div>
            <span>{filterActived === "late" ? "Atrasadas" : "Tarefas"}</span>
            <div className="line"></div>
          </div>
          <div className="cardsContainer">
            {tasks ? (
              tasks.map((task: TaskType) => {
                return (
                  <Link to={`/task/${task._id}`}>
                    <TaskCard
                      iconIndex={task.type}
                      title={task.title}
                      when={task.when}
                    />
                  </Link>
                );
              })
            ) : (
              <div>não existem tasks cadastradas</div>
            )}
          </div>
        </HomeStyles>
      <Footer />
    </>
  );
}

export { Home };
