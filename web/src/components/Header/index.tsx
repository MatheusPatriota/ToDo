import "./styles";
import { Background, HeaderStyles } from "./styles";
import logo from '../../assets/logo.svg'


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
          </ul>
        </div>
      </HeaderStyles>
      <Background />
    </>
  );
}

export { Header };
