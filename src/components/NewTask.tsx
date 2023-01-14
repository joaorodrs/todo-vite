import Button from "./Button"
import Input from "./Input"

import buttonIcon from '../assets/add.svg'

import styles from './NewTask.module.css'
import { TaskType } from "../App"
import { useRef } from "react"

type Props = {
  onSubmitTask(task: Pick<TaskType, 'name'>): void;
}

function NewTask({ onSubmitTask }: Props) {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSubmitTask = () => {
    const taskName = inputRef.current?.value

    if (!taskName) return

    onSubmitTask({ name: taskName })

    inputRef.current.value = ""
  }

  return (
    <form noValidate onSubmit={(e) => e.preventDefault()} className={styles.container}>
      <Input ref={inputRef} name="task_name" placeholder="Adicione uma nova tarefa" />
      <Button onClick={handleSubmitTask}>
        <span className={styles.buttonText}>Criar</span>
        <img src={buttonIcon} alt="Adicionar" />
      </Button>
    </form>
  )
}

export default NewTask