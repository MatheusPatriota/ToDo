import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./views/Home";
import { NewTaskPage } from "./views/NewTask";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Home/>} />
        <Route path="/new-task"  element={<NewTaskPage/>} />
        <Route path="/task/:id"  element={<NewTaskPage/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
