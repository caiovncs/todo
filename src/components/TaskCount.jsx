import React from 'react'
import styles from './taskCount.module.css'
import Task from './Task'
import { ClipboardText } from "@phosphor-icons/react";

const TaskCount = ({tasks, onDelete, onCompleted}) => {
  const tasksQuantity = tasks.length
  const completedTasks = tasks.filter(task => {return task.isCompleted}).length

  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <p>Tarefas criadas</p>
          <span>{tasksQuantity}</span>
        </div>

        <div>
          <p className={styles.textPurple}> Concluídas</p>
          <span>{completedTasks} de {tasksQuantity}</span>
        </div>
      </header>
      
      {tasksQuantity > 0 ? 
        <div className={styles.list} key={tasks.id}>
        {tasks.map((task) =>{
          return <Task task={task} onDelete={onDelete} onCompleted={onCompleted}/>
        })}
      </div>
      :
        <section className={styles.empty}>
          <ClipboardText size={50} />
          <p>Você ainda não tem tarefas cadastradas</p>
          <span>Crie tarefas e organize seus itens a fazer</span>
        </section>
    }


    </section>
  )
}

export default TaskCount