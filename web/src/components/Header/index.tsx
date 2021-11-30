import "./styles";
import { Background, HeaderStyles } from "./styles";
import logo from "../../assets/logo.svg";
import { IoNotifications } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../services/api";

type HeaderTypes = {
  clickNotification?: any;
};
function Header(props: HeaderTypes) {
  const [lateCount, setLateCount] = useState(0);

  async function lateTasksVerify() {
    await api.get(`/task/filter/late/11:11:11:11:11:11`).then((response) => {
      setLateCount(response.data.length);
    });
  }

  useEffect(() => {
    lateTasksVerify();
  },[])

  return (
    <>
      <HeaderStyles>
        <div className="logoContainer">
          <img src={logo} alt="logo ToDo" className="logo" />
        </div>
        <div className="menuContainer">
          <ul>
            <li>
              <Link to="/">início</Link>
            </li>
            <li>
              <Link to="/new-task">nova tarefa</Link>
            </li>
            <li>
              <Link to="/sincronizar">sincronizar celular</Link>
            </li>

            {lateCount >0  && (
              <li className="notification">
                <button
                  type="button"
                  onClick={props.clickNotification}
                  title="Tarefas Atrasadas"
                >
                  <IoNotifications />
                  <div>{lateCount}</div>
                </button>
              </li>
            )}
          </ul>
        </div>
      </HeaderStyles>
      <Background />
    </>
  );
}

export { Header };
