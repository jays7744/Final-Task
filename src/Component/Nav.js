import { NavLink } from "react-router-dom";
import "./CSS/Nav.css"


const Nav = ()=>{
    return (
      <>
        <ul className="Nav">
          <li>
            <NavLink className="Nav-link" to="/">Todos</NavLink>
          </li>

          <li>
            <NavLink className="Nav-link" to="/users">Users</NavLink>
          </li>

          <li>
            <NavLink className="Nav-link" to="adduser">Add User</NavLink>
          </li>
        </ul>

     </>
    );
}
export default Nav;