import React, { useMemo, useState } from "react";
import { format } from "date-fns";
import Icon from "../Icon";
import { TaskCardStyles } from "./styles";

type TaskCardTypes = {
  icon: any;
  title: string;
  quando: string;
};

export default function TaskCard(props: TaskCardTypes) {
  const [count, setcount] = useState(0);
  const date = useMemo(() => format(new Date(props.quando), 'dd/MM/yyyy'), [count]  );
  const hour = useMemo(() => format(new Date(props.quando), "HH:mm"), [count] );

  return (
    <>
      <TaskCardStyles>
        <div className="cardStyles">
          <div className="iconContainer">
            <Icon />
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
