import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import { useState } from 'react';
import './App.scss'
import Todo from './Todo';
import { useEffect } from 'react';
import Movie from './Movie';
//template + logic
// JSX  
const App = () => {

  const [name, setName] = useState('Dien')
  const [value, setValue] = useState('')
  const [list, setList] = useState([
    { id: 'todo1', title: 'Watching TV' },
    { id: 'todo2', title: 'Learning ReactJS Hook' },
    { id: 'todo3', title: 'Playing Game' },
  ]);

  // = componentDidUpdate, chạy mỗi khi giao diện rerender
  // useEffect(() => {
  //   console.log('run use Effect')
  // });

  //= componentDidMount, chỉ chạy 1 lần duy nhất sau khi render lần đầu
  // useEffect(() => {
  //   console.log('run use Effect')
  // },[]);


  // chạy khi có điều kiện, ví dụ khi value thay đổi thì useEffect sẽ chạy
  useEffect(() => {
    console.log('run use Effect')
  }, [value]);

  const handlechangleInput = (event) => {
    let changeValue = event.target.value;
    setValue(changeValue)
  }
  const handleButtonClickMe = () => {
    let newtodo = {
      id: Math.floor(Math.random() * 1000) + 1,
      title: value
    };
    setList([...list, newtodo]);
  }
  const handleDeleteTodos = (id) => {
    let currentTodos = list;
    currentTodos = currentTodos.filter(item => item.id !== id)
    setList(currentTodos);
  }
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <img src={logo} className="App-logo" alt="logo" />
        <h1> Hello world with React Hook and {name}</h1>
        {/* <input type='text' value={value} onChange={(event) => handlechangleInput(event)} />
        <button type='button' onClick={() => handleButtonClickMe()}>Click me</button> */}
        {/* <Todo
          list_todo={list}
          handleDeleteTodos={handleDeleteTodos}
        /> */}

        <Movie />

      </header>
    </div>
  );
}

export default App;
