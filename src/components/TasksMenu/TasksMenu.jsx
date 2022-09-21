import React, {useState} from 'react';
import './TasksMenu.scss';
import Task from '../Task/Task';

export default function TasksMenu({title, currentFolderId, color, сhoiceAll}) {
    // Tasks Data
    const [tasksData, setTasksData] = useState([
        {id: 1, content: 'Изучить JavaScript'},
        {id: 1, content: 'Изучить паттерны проектирования'},
        {id: 1, content: 'ReactJS Hooks (useState, useReducer, useEffect и т.д.)'},
        {id: 1, content: 'Redux (redux-observable, redux-saga)'},
        {id: 2, content: 'Бойцовский клуб'},
        {id: 2, content: 'Начало'},
        {id: 2, content: 'Шерлок'},
        {id: 3, content: 'Мотылёк'},
        {id: 3, content: 'Грокаем Алгоритмы'}
    ]);
    // Toogle Active Menu
    const [addFormActive, setAddFormActive] = useState(false);
    // Handle Input Value
    const [inputValue, setInputValue] = useState();
    function handleInputValue(e) {
       setInputValue(e.target.value);
    }
    // Add Task Function
    function addTask() {
        const newTask = {
            id: currentFolderId,
            content: inputValue
        };
        setTasksData(prevState => [...prevState, newTask]);
    }

  return (
    <div className='tasksMenu'>
        {сhoiceAll === false ?
            <h1 className="tasksMenu-title" style={{color: color}}>{title}</h1> :
            <h1 className="tasksMenu-title">Все задачи</h1>
        }
        <ul>
            {сhoiceAll === false ?
                tasksData.map((item) => (
                    <li key={item.content}>
                        {item.id === currentFolderId ? <Task content={item.content}></Task> : null}
                    </li>
                )) :
                tasksData.map((item) => (
                    <li key={item.content}>
                        <Task content={item.content}></Task>
                    </li>
                ))
            }
        </ul>
        {сhoiceAll === false ?
            <button className="tasksMenu__add">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 1V11" stroke="#868686" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1 6H11" stroke="#868686" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <h4 className="tasksMenu__add-title" onClick={() => setAddFormActive(prevState => !prevState)}>Новая задача</h4>
            </button> : null
        }
        <div className={addFormActive ? 'tasksMenu__form' : 'tasksMenu__form--hidden'}>
            <input onInput={handleInputValue} type="text" className="tasksMenu__form-input" placeholder='Текст задачи'/>
            <div className="tasksMenu__form__buttons">
                <button className="tasksMenu__form-add" 
                onClick={() => (addTask(), setAddFormActive(false))}>Добавить задачу</button>
                <button className="tasksMenu__form-close" 
                onClick={() => setAddFormActive(false)
                }>Отмена</button>
            </div>
        </div>
    </div>
  );
}
