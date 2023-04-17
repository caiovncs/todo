import { useState } from 'react'
import Header from './components/Header'
import './styles/global.css'
import TaskCount from './components/TaskCount'

function App() {
  const [tasks, setTasks] = useState([])

  function deleteTaskById(taskIdToDelete) {
    const newTasks = tasks.filter(task => task.id !== taskIdToDelete);
    setTasks(newTasks)
  }

  function addTask(taskTitle) {
    setTasks([...tasks, {id: crypto.randomUUID(), title: taskTitle, isCompleted: false}])
  }

  function toggleTaskCompleted(taskId) {
    const newTasks = tasks.map(task => {
      if(task.id == taskId) {
        return {
          ...task, isCompleted: !task.isCompleted
        }
      }
      return task
    })
    setTasks(newTasks)
  }

  return (
    <>
      <Header onAddTask={addTask}/>
      <TaskCount tasks={tasks} onDelete={deleteTaskById} onCompleted={toggleTaskCompleted}/>
    </>
  )
}

export default App
