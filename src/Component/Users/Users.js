import { NavLink } from "react-router-dom";
import { API } from "./apiService";
import { useState, useEffect,useContext} from "react";
import { UserInfo } from "../../App";

const Users = () => {
  const {Names} = useContext(UserInfo);
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
   
 
 
  return (<>
    
      <div className="User">
      {Loading ? (
        <center>Loading...</center>
      ) : ( <>
      
        <ul >
          {users.map((user) => (
            <li className="list" key={user.id}>{user.name}</li>
          ))}

      {Names.map((name) => (
          <li className="list" key={name.id}> {name}  </li>
        ))}
          
        </ul>     

         </>
      )}
  
    
      <NavLink to="/adduser" className={"add-user-btn"} >
        Add User
      </NavLink> </div>
     
       
     </>
  
  );
};
export default Users;
