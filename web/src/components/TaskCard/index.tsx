import React from "react";
import { TaskCardStyles } from "./styles";

export default function TaskCard() {
  return (
    <>
      <TaskCardStyles>
        <div className="iconContainer">
          icone
          <span>Descricao</span>
        </div>
        <div className="DateContainer">
          <span>data</span>
          <span>hora</span>
        </div>
      </TaskCardStyles>
    </>
  );
}
