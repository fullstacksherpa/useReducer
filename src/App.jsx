import { useReducer } from "react"
import AddTask from "./components/AddTask"
import TaskList from "./components/TaskList";



function App() {
  const [tasks, dispatch] = useReducer(tasksReducer, initailTasks);

  function handleAddTask(text){
    dispatch({
      type: 'added',
      id: nextID++,
      text: text,
    })
  }

  function handleChangeTask(task){
    dispatch({
      type:'changed',
      task:task,
    })
  }

  function handleDeleteTask(taskID){
    dispatch({
      type: 'deleted',
      id: taskID,
    })
  }

  return (
    <>
    <h1>Ongchen's itinerary</h1>
    <AddTask onAddTask={handleAddTask} />
    <TaskList tasks={tasks} onChangeTask={handleChangeTask} onDeleteTask={handleDeleteTask} />
    </>
  )
}

function tasksReducer(tasks, action){
  switch (action.type){
    case 'added': {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done:false,
        }
      ]
    }
    case 'changed':{
      return tasks.map((t)=>{
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      })
    }
    case 'deleted':{
      return tasks.filter((t)=> t.id !==action.id)
    }
    default:{
      throw Error('unknown action: ' + action.type)
    }
  }
}

let nextID= 3;
const initailTasks = [
  {id:0, text: 'visit cliff jump', done:true},
  {id:1, text: 'visit banff', done:false},
  {id:2, text: 'visit KTM', done:false},
]

export default App
