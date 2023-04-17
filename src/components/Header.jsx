import {useState} from 'react';
import logo from '../assets/logo.svg';
import { PlusCircle } from "@phosphor-icons/react";
import styles from './header.module.css'

const Header = ({onAddTask}) => {

  const [newTaskText, setNewTaskText] = useState('')

  function handleSubmit(e) {
    e.preventDefault();
    onAddTask(newTaskText)
    setNewTaskText('')
  }

  function changeTitleValue({target}) {
    setNewTaskText(target.value)
  }

  const taskWithoutText = newTaskText.length == 0

  return (
    <div className={styles.header}>
      <img src={logo} alt="logo todo" />

      <form onSubmit={handleSubmit} className={styles.newTaskForm}>
        <input placeholder='Adicione uma nova tarefa' onChange={changeTitleValue} value={newTaskText}/>
        <button
        disabled={taskWithoutText}
        >
          Criar
          <PlusCircle size={20}/>
        </button>
      </form>
    </div>
  )
}

export default Header