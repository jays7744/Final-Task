import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext, useState, lazy, Suspense } from "react";
import Nav from "./Component/Nav";
import "./Component/CSS/Component.css";
const AddUser = lazy(()=>import("./Component/Add-Users/Add-Users"));
const Users = lazy(()=>import("./Component/Users/Users"));
const Todos = lazy(()=>import("./Component/Todo-Redux/Todos"));

export const UserInfo = createContext();

function App() {
  const [userName, setUserName] = useState([]);

  const getDay = (item) => {
    setUserName([...userName, item]);
  };

  return (
    <UserInfo.Provider value={{ getDay: getDay, Names: userName }}>
      <div className="component">
        <BrowserRouter>
          <Nav />
          <div className="todo">
          <Suspense fallback={<h2>Loading...</h2>}>
            <Routes>
              <Route path="/" element={<Todos />} />
              <Route path="/users" element={<Users />} />
              <Route path="/adduser" element={<AddUser />} />
            </Routes>
          </Suspense>
          </div>
        </BrowserRouter>
      </div>
    </UserInfo.Provider>
  );
}

export default App;
