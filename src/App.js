import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddUser from './Component/Add-Users/Add-Users';
import Nav from './Component/Nav';
import "./Component/CSS/Component.css"
import Users from './Component/Users/Users';

function App() {
  return (
    <div className="component">
      
      <BrowserRouter>
           <Nav/> 
      <div className="todo">
      <Routes >
        <Route path='/' element={<h2>Hello Todo</h2>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/adduser' element={<AddUser/>}/>
      </Routes>
      </div>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
