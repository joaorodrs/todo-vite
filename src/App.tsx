import Header from "./components/Header"
import NewTaskInput from "./components/NewTask"

import styles from './App.module.css'

import './global.css'
import Tasks from "./components/Tasks"
import { useState } from "react"

export type TaskType = {
  id: number;
  name: string;
  done: boolean;
}

function App() {
  const [tasks, setTasks] = useState<TaskType[]>([])

  const onSubmitTask = (task: Pick<TaskType, 'name'>) => {
    const lastTaskId = tasks.length

    setTasks(currentTasks => [
      {
        id: lastTaskId + 1,
        name: task.name,
        done: false
      },
      ...currentTasks
    ])
  }

  const onToggleTaskChecked = (taskId: number) => {
    console.log({ taskId })
    const taskToToggle = tasks.find(task => task.id === taskId)
    const tasksWithoutTaskToToggle = tasks.filter(task => task.id !== taskId)

    if (!taskToToggle) return

    if (taskToToggle?.done) {
      setTasks([{ ...taskToToggle, done: false }, ...tasksWithoutTaskToToggle])
      return
    }

    setTasks([...tasksWithoutTaskToToggle, { ...taskToToggle, done: true }])
  }

  const onRemoveTask = (taskId: number) => {
    setTasks(currentTasks => currentTasks.filter(task => task.id !== taskId))
  }

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <NewTaskInput onSubmitTask={onSubmitTask} />
        <Tasks
          tasks={tasks}
          onToggleTaskChecked={onToggleTaskChecked}
          onRemoveTask={onRemoveTask}
        />
      </main>
    </div>
  )
}

export default App
