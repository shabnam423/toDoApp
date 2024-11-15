import {useState} from "react";

export default function Todo() {
    const [ todo,setTodo] = useState("");
    const [ todos,setTodos] = useState([]);
    function handleSubmit(e) {
        e.preventDefault();
        setTodos([...todos,todo]);
        setTodo("");
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={(e) => setTodo(e.target.value)} value={todo}type="text"></input>
                <button>Add</button>
            </form>
        </div>
    )
}