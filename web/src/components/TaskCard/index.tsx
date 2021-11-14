import React, { useMemo, useState } from "react";
import { format } from "date-fns";
import { TaskCardStyles } from "./styles";
import TypeIcons from "../../utils/TypeIcons";

type TaskCardTypes = {
  iconIndex: number;
  title: string;
  when: string;
};

export default function TaskCard(props: TaskCardTypes) {
  const [count, setcount] = useState(0);
  const date = useMemo(
    () => format(new Date(props.when), "dd/MM/yyyy"),
    [count]
  );
  const hour = useMemo(() => format(new Date(props.when), "HH:mm"), [count]);

  return (
    <>
      <TaskCardStyles>
        <div className="cardStyles">
          <div className="iconContainer">
          <img src={TypeIcons[props.iconIndex]} alt="Icone da Tarefa"/>
            <span>{props.title}</span>
          </div>
          <div className="dateContainer">
            <span>{date}</span>
            <span>{hour}</span>
          </div>
        </div>
      </TaskCardStyles>
    </>
  );
}
