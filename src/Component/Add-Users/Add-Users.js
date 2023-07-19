import { useState, useContext } from "react";
import { UserInfo } from "../../App";

const AddUser = ()=>{
    
     const {getDay} = useContext(UserInfo);
     const [inputValue, setInputValue] = useState("");

const getValue = (e)=>{
  setInputValue(e.target.value)
};


const addUser = ()=>{
    getDay(inputValue)
    
    setInputValue("")

}
    return(
        <div>
            <input type="text" value={inputValue} onChange={getValue} placeholder="Enter user name here"></input>
             <button className="inputbtn" onClick={addUser}>Add User</button>
           
            
        </div>
    );
};
export default AddUser;