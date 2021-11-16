import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./views/Home";
import { NewTaskPage } from "./views/NewTask";
import { QRCODEPage } from "./views/QrCode";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Home/>} />
        <Route path="/new-task"  element={<NewTaskPage/>} />
        <Route path="/task/:id"  element={<NewTaskPage/>} />
        <Route path="/sincronizar"  element={<QRCODEPage/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
