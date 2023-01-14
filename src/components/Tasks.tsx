import styles from './Tasks.module.css'

import clipboardIcon from '../assets/clipboard.svg'
import { useMemo, useState } from 'react'
import Task from './Task'
import { TaskType } from '../App'

type Props = {
  tasks: TaskType[];
  onToggleTaskChecked(taskId: number): void;
  onRemoveTask(taskId: number): void;
}

function Tasks({ tasks, onToggleTaskChecked, onRemoveTask }: Props) {
  const concludedTasks = useMemo(() => {
    return tasks.filter(task => task.done).length
  }, [tasks])

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.counter}>
          <span className={styles.createdTasksLabel}>Tarefas criadas</span>
          <div className={styles.counterValue}>{tasks.length}</div>
        </div>
        <div className={styles.counter}>
          <span className={styles.concludedTasksLabel}>Concluídas</span>
          <div className={styles.counterValue}>{concludedTasks === 0 ? 0 : `${concludedTasks} de ${tasks.length}`}</div>
        </div>
      </div>
      <div className={styles.tasksListContainer}>
        <div className={styles.tasksList}>
          {tasks.map(task => (
            <Task
              key={task.id}
              onToggleTaskChecked={onToggleTaskChecked}
              onRemoveTask={onRemoveTask}
              {...task}
            />
          ))}
        </div>

        {tasks.length ? null : (
          <div className={styles.noTasksContainer}>
            <img src={clipboardIcon} alt="Clipboard" />
            <p className={styles.noTasksTitle}>Você ainda não tem tarefas cadastradas</p>
            <p className={styles.noTasksSubtitle}>Crie tarefas e organize seus itens a fazer</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Tasks