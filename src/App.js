import React , {useState, useEffect} from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(()=>{
    getLocallyStoredTodos();
  },[])

  useEffect(() => {
    filterHandelers();
    saveLocallyTodos();
  },[todos, status])

  const filterHandelers = (event) => {
    switch(status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;

      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;

      default:
        setFilteredTodos(todos);
        break;
          
    }
  }

  const saveLocallyTodos = () => {
      localStorage.setItem('todos',JSON.stringify(todos));
  }

  const getLocallyStoredTodos= () => {
    if(localStorage.getItem('todos')) {
      setTodos(JSON.parse(localStorage.getItem('todos')));
    } 
  }

  return (
    <div className="App">  
     <header>
       <h1> Utk's Todo List </h1>
     </header>
     <Form todos={todos} setTodos={setTodos} setInputText={setInputText} inputText={inputText} setStatus={setStatus}/>
     <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos}/>
    </div>
  );
}

export default App;
