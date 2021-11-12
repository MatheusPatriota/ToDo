import FilterCard from "../../components/FilterCard";
import Footer from "../../components/Footer";
import { Header } from "../../components/Header";
import HomeStyles from "./styles";

function Home() {
  return (
    <>
      <HomeStyles>
        <Header />
        <body>
          <div className="filters">
            <FilterCard />
            <FilterCard />
            <FilterCard />
            <FilterCard />
            <FilterCard />
          </div>
          <div className="dividerTaks">
            <div className="line"></div>
            <span>Tarefa</span>
            <div className="line"></div>
          </div>
          <div>Cards</div>
        </body>
        <Footer />
      </HomeStyles>
    </>
  );
}

export { Home };
