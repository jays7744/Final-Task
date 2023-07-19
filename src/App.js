import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";
import AddUser from "./Component/Add-Users/Add-Users";
import Nav from "./Component/Nav";
import "./Component/CSS/Component.css";
import Users from "./Component/Users/Users";
import Todos from "./Component/Todo-Redux/Todos";
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
            <Routes>
              <Route path="/" element={<Todos />} />
              <Route path="/users" element={<Users />} />
              <Route path="/adduser" element={<AddUser />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </UserInfo.Provider>
  );
}

export default App;
