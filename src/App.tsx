import { useState } from 'react'
import './App.css'

interface Task {
  id: number
  text: string
  completed: boolean
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [taskText, setTaskText] = useState('')

  const addTask = () => {
    if (taskText.trim()) {
      setTasks([...tasks, { id: Date.now(), text: taskText, completed: false }])
      setTaskText('')
    }
  }

  const toggleTaskCompletion = (taskId: number) => {
    setTasks(tasks.map(task => task.id === taskId ? { ...task, completed: !task.completed } : task))
  }

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map(task => (
          <li key={task.id} onClick={() => toggleTaskCompletion(task.id)} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.text}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App