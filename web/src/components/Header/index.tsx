import "./styles";
import { Background, HeaderStyles } from "./styles";
import logo from "../../assets/logo.svg";
import { IoNotifications } from "react-icons/io5";
import { Link } from "react-router-dom";


type HeaderTypes = {
  lateTasksCount?: number,
  clickNotification?: any,
}
function Header(props: HeaderTypes) {
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
            <li className="notification">
              <button type="button" onClick={props.clickNotification} title="Notificações Atrasadas">
                <IoNotifications />
                <div>{props.lateTasksCount}</div>
              </button>
            </li>
          </ul>
        </div>
      </HeaderStyles>
      <Background />
    </>
  );
}

export { Header };
