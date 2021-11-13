import FilterCard from "../../components/FilterCard";
import Footer from "../../components/Footer";
import { Header } from "../../components/Header";
import TaskCard from "../../components/TaskCard";
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
            <span>Tarefas</span>
            <div className="line"></div>
          </div>
          <div className="cardsContainer">
            <TaskCard icon="" date="12/11/2021" time="20:44" />
            <TaskCard icon="" date="12/11/2021" time="20:44" />
            <TaskCard icon="" date="12/11/2021" time="20:44" />
            <TaskCard icon="" date="12/11/2021" time="20:44" />
            <TaskCard icon="" date="12/11/2021" time="20:44" />
            <TaskCard icon="" date="12/11/2021" time="20:44" />
            <TaskCard icon="" date="12/11/2021" time="20:44" />
            <TaskCard icon="" date="12/11/2021" time="20:44" />
            <TaskCard icon="" date="12/11/2021" time="20:44" />
            <TaskCard icon="" date="12/11/2021" time="20:44" />
            <TaskCard icon="" date="12/11/2021" time="20:44" />
            <TaskCard icon="" date="12/11/2021" time="20:44" />
            <TaskCard icon="" date="12/11/2021" time="20:44" />
            <TaskCard icon="" date="12/11/2021" time="20:44" />
            <TaskCard icon="" date="12/11/2021" time="20:44" />
            <TaskCard icon="" date="12/11/2021" time="20:44" />
          </div>
        </body>
        <Footer />
      </HomeStyles>
    </>
  );
}

export { Home };
