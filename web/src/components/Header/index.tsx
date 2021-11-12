import "./styles";
import { Background, HeaderStyles } from "./styles";
import logo from '../../assets/logo.svg'
import {IoNotifications} from 'react-icons/io5'

function Header() {
  return (
    <>
      <HeaderStyles>
        <div className="logoContainer">
          <img src={logo} alt="logo ToDo"  className="logo"/>
        </div>
        <div className="menuContainer">
          <ul>
            <li>
              <a href="/">
              início

              </a>
            </li>
            <li>
              <a href="/">
              nova tarefa

              </a>
            </li>
            <li>
              <a href="/">

              sincronizar celular
              </a>
            </li>
            <li className="notification">
              <a href="/">
                <IoNotifications/>
                <div>
                  5
                </div>
              </a>

            </li>
          </ul>
        </div>
      </HeaderStyles>
      <Background />
    </>
  );
}

export { Header };
