import React from "react";
import Icon from "../Icon";
import { TaskCardStyles } from "./styles";

type TaskCardTypes = {
  icon: any,
  date: string,
  time: string,
}

export default function TaskCard(props: TaskCardTypes) {
  return (
    <>
      <TaskCardStyles>
        <div className="cardStyles">
          <div className="iconContainer">
            <Icon />
            <span>Academia</span>
          </div>
          <div className="dateContainer">
            <span>12/11/2021</span>
            <span>14:00</span>
          </div>
        </div>
      </TaskCardStyles>
    </>
  );
}
