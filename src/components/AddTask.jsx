import { useState } from "react";

const AddTask = ({onAddTask}) => {
    const [text, setText] = useState('')
  return (
    <>
    <input placeholder="add task" value={text} onChange={(e)=>setText(e.target.value)} />
    <button onClick={()=>{
        setText('');
        onAddTask(text);
    }}>Add</button>
    </> 
  )
}

export default AddTask
