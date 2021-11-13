import React from "react";
import Icon from "../Icon";
import { TaskCardStyles } from "./styles";

type TaskCardTypes = {
  icon: any,
  title: string,
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
            <span>{props.title}</span>
          </div>
          <div className="dateContainer">
            <span>{props.date}</span>
            <span>{props.time}</span>
          </div>
        </div>
      </TaskCardStyles>
    </>
  );
}
