import React from 'react'
import styles from './task.module.css'
import { Trash } from "@phosphor-icons/react";

const Task = ({task, onDelete, onCompleted}) => {

  return (
    <div className={styles.task}>
      <button className={styles.checkContainer} onClick={() => onCompleted(task.id)}>
        {task.isCompleted ? <span/> : <div/>}
      </button>

      <p className={task.isCompleted ? styles.textCompleted : ""}>
        {task.title}
      </p>

      <button className={styles.deleteButtonPai} onClick={() => onDelete(task.id)}>
        <Trash size={20} className={styles.deleteButton}/>
      </button>
    </div>
  )
}

export default Task