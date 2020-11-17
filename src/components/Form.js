import React from 'react'

function Form({ setInputText, todos, setTodos, inputText, setStatus }) {

    const inputTextHandler = (event) => {
        setInputText(event.target.value);
    }

    const submitTodoHandler = (event) => {
        event.preventDefault();
        setTodos([...todos, {text: inputText, completed: false, id: Math.floor(Math.random()*1000 +1)}]);
        setInputText("");
    }

    const statusHandeler = (event) => {
        setStatus(event.target.value);
    }

    return (
        <div>
            <form>
                <input onChange={inputTextHandler} value={inputText} type="text" className="todo-input" />
                <button onClick={submitTodoHandler} className="todo-button" type="submit">
                    <i className="fas fa-plus-square"></i>
                </button>
                <div className="select">
                    <select name="todos" className="filter-todo" onChange={statusHandeler}>
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </form>
        </div>
    )
}

export default Form
