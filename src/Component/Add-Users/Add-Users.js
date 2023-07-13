import { useState } from "react";

const AddUser = ({jay})=>{

const [inputValue, setInputValue] = useState();

const getValue = (e)=>{
  setInputValue(e.target.value)
}
const addUser = ()=>{
    console.log(inputValue);
    setInputValue("")
}


    return(
        <div>
            <input value={inputValue} onChange={getValue} placeholder="Enter user name here"></input>
            <button onClick={addUser}>Add User</button>
        </div>
    )
};
export default AddUser;