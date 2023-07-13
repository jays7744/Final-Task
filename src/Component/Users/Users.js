import { NavLink } from "react-router-dom";
import { API } from "./apiService";
import { useState, useEffect } from "react";
import AddUser from "../Add-Users/Add-Users";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [Loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await API.getUsers();
      setLoading(false);
      setUsers(response.data);
    } 
    catch (error) {
      setLoading(false);
      setUsers("404 Error");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  

  console.log(users);
  return (
    <>
      <div className="User">
      {Loading ? (
        <center>Loading...</center>
      ) : (
        <ul >
          {users.map((user) => (
            <li className="list" key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}

      <NavLink to="/adduser" className="Nav-link">
        Add User
      </NavLink> </div>
    </>
  );
};
export default Users;
