import "./styles";
import { Background, HeaderStyles } from "./styles";
import logo from "../../assets/logo.svg";
import { IoNotifications } from "react-icons/io5";
import { Link } from "react-router-dom";

function Header() {
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
              <Link to="/">sincronizar celular</Link>
            </li>
            <li className="notification">
              <Link to="/">
                <IoNotifications />
                <div>5</div>
              </Link>
            </li>
          </ul>
        </div>
      </HeaderStyles>
      <Background />
    </>
  );
}

export { Header };
