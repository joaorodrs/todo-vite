import { useState } from 'react';

import removeIcon from '../assets/trash.svg'

import styles from './Task.module.css'

type Props = {
  id: number;
  name: string;
  done: boolean;
  onToggleTaskChecked(taskId: number): void;
  onRemoveTask(taskId: number): void;
}

function Task({ id, name, done, onToggleTaskChecked, onRemoveTask }: Props) {
  return (
    <div className={styles.container}>
      <label className={styles.item}>
        <input
          className={styles.inputCheckbox}
          checked={done}
          onChange={() => onToggleTaskChecked(id)}
          type="checkbox"
        />
        {!done ? <p>{name}</p> : <s>{name}</s>}
      </label>
      <button className={styles.removeButton} onClick={() => onRemoveTask(id)}>
        <img src={removeIcon} alt="Remove" />
      </button>
    </div>
  )
}

export default Task