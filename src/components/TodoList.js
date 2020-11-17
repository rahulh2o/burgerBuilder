import React from 'react'
import Todo from './Todo'

function TodoList({todos, setTodos, filteredTodos}) {
    return (
        <div>
             <div className="todo-container">
                <ul className="todo-list">
                    {filteredTodos.map((todo) => (
                        <Todo key={todo.id} text={todo.text} todo={todo} setTodos={setTodos} todos={todos}/>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default TodoList
