import React, { useCallback, useEffect, useState } from "react";
import api from "../../services/api";

import FilterCard from "../../components/FilterCard";
import Footer from "../../components/Footer";
import { Header } from "../../components/Header";
import TaskCard from "../../components/TaskCard";
import HomeStyles from "./styles";

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
  const [filterActived, setFilterActived] = useState("all");
  const [tasks, setTasks]: any[] = useState([]);

  const loadTasks = useCallback(async () => {
    await api
      .get(`/task/filter/${filterActived}/11:11:11:11:11:11`)
      .then((response) => {
        console.log(response.data);
        setTasks(response.data);
      });
  }, [filterActived]); // every time id changed, new book will be loaded

  useEffect(() => {
    loadTasks();
  }, [loadTasks]); // useEffect will run once and when id changes


  function Notification() {
    setFilterActived("late");
  }

  // useEffect(() => {
  //   loadTasks();
  //   lateTasksVerify();
  // }, [filterActived]);

  return (
    <>
      <Header clickNotification={Notification} />
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
                <TaskCard
                  iconIndex={task.type}
                  title={task.title}
                  when={task.when}
                  description={task.description}
                  _id={task._id}
                />
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
