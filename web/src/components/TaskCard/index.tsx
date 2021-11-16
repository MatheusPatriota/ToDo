import React, { useMemo, useState } from "react";
import { format } from "date-fns";
import { TaskCardStyles } from "./styles";
import TypeIcons from "../../utils/TypeIcons";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { HiDocumentSearch } from "react-icons/hi";
import { Link } from "react-router-dom";
import Popup from "../Popup";

type TaskCardTypes = {
  iconIndex: number;
  title: string;
  description: string;
  when: string;
  _id: any;
};

export default function TaskCard(props: TaskCardTypes) {
  const [count, setcount] = useState(0);
  const date = useMemo(
    () => format(new Date(props.when), "dd/MM/yyyy"),
    [count]
  );
  const hour = useMemo(() => format(new Date(props.when), "HH:mm"), [count]);

  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <TaskCardStyles>
        <div className="cardStyles">
          <div className="flip-card-front">
            <div className="iconContainer">
              <img src={TypeIcons[props.iconIndex]} alt="Icone da Tarefa" />
              <span>{props.title}</span>
            </div>
            <div className="dateContainer">
              <span>{date}</span>
              <span>{hour}</span>
            </div>
          </div>
          <div className="flip-card-back">
            <div className="editButton">
              <Link to={`/task/${props._id}`}>
                <button title="editar tarefa">
                  <AiFillEdit />
                </button>
              </Link>
              Editar
            </div>
            <div className="viewTaskButton">
              <button title="visualizar tarefa" onClick={togglePopup}>
                <HiDocumentSearch />
              </button>
              Visualizar
            </div>
            <div className="deleteButton">
              <button title="remover tarefa">
                <AiFillDelete />
              </button>
              Remover
            </div>
          </div>

          {/* <Popup
            trigger={<button className="button"> Open Modal </button>}
            modal
            >
            
          </Popup> */}
        </div>
      </TaskCardStyles>
      {isOpen && (
        <Popup
          content={
            <>
              <div className="firstDiv">
                <span className="title">Descrição</span>
                <span className="description">{props.description}</span>
              </div>
              <div className="dateTime">
                <span className="date">{date}</span>
                <span className="hour">{hour}</span>
              </div>
            </>
          }
          handleClose={togglePopup}
        />
      )}
    </>
  );
}
