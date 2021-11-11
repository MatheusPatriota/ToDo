import "./styles";
import { Background, HeaderStyles } from "./styles";
function Header() {
  return (
    <>
      <HeaderStyles>
        <div>logo</div>
        <div>menu</div>
      </HeaderStyles>
      <Background />
    </>
  );
}

export { Header };
