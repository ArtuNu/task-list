import '../styles/task-form.css'
import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'

export default function FormTask({onSubmit}) {

    const [input, setInput] = useState('');

    const changeHandle=(e)=>{
        setInput(e.target.value);
    }

    const sendHandle=(e)=>{
        e.preventDefault();

        const newTask={
            id: uuidv4(),
            text: input,
            complete: false,
        }

        onSubmit(newTask);
    }

   

    return(
        <form className="form-task"  onSubmit={sendHandle}>
            <input autoComplete='off' className="task-input" type='text' placeholder="Escribe una tarea" name="text" onChange={changeHandle}></input>
            <button className="task-button">Añadir</button>
        </form>
    )
};
