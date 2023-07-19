import { useDispatch, useSelector } from "react-redux";
import { addUser, removeTodo } from "./Redux/todoSlice";
import { useState } from "react";

const Todos = () => {
  // const [data, setData] = useState([]);
  const [inputData, setInputData] = useState([]);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.todos);

  const addNewTodo = () => {
    dispatch(addUser(inputData));
    setInputData("");
  };

  const deleteTodo = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <>
      <div>
        <input
          type="text"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}/>
        <button className="inputbtn" onClick={addNewTodo}>Add Todo</button>
      </div>

      <div>
        {data.map((todo, id) => (
          <li className="todoLi" key={id}>
            {todo}
            <button className="btn" onClick={() => deleteTodo(id)}> Delete</button>
          </li>
        ))}
      </div>
    </>
  );
};
export default Todos;
