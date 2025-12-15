import {  useEffect, useState } from 'react'
import './App.css'
import SearchBar from './Components/SearchBar'
// ListBar isn't used in your logic yet, but kept it here
import ListBar from './Components/ListBar' 
import List from './Components/List'
import SideBar from './Components/SideBar'
import ListFinished from './Components/ListFinished'

function App() {
  // 1. Initialize state as an array of strings
  const [todos, setTodos] = useState<string[]>([]);
  const[finish, setFinish] = useState<string[]>([]);
  const [onGo, SetOnGo] = useState<number>(0);
  const [showFinished, setShowFinished] = useState(false);


  // 2. This function receives the text from SearchBar
  function addJob(taskName:string) {
    if (!taskName) return; // Don't add empty tasks
    setTodos([...todos, taskName]);
  }
  function Deletes(todo:number){
    const newTodos = todos.filter((_:string, index:number) => index !== todo);
    setTodos(newTodos);
  }
  function Finishes(todo:number){
    const task = todos[todo];

    const newTodos = todos.filter((_:string, index:number) => index !== todo);
    setTodos(newTodos);

    setFinish([...finish, task]);
  }

  useEffect(() => {
    SetOnGo(todos.length);
  }, [todos])
  return (
    <>
    <div className='AppContainer'>
      <SideBar 
        count1={finish.length}
        count2={onGo}
        setShowFinished={setShowFinished} />
        <div className='Wrapper'>
          <h1 className='Headings'>To-Do-List</h1>
          
          {/* Pass the function down */}
          <SearchBar onAdd={addJob}/>
          
          <ListBar/>
          
          {/* 3. Map over the data array */}
          <div className="list-container">
              {!showFinished &&
                todos.map((task:string, index:number) => (
                  <List 
                    Delete={() => Deletes(index)} 
                    Finish={() => Finishes(index)}
                    key={index} 
                    Task={task} 
                  />
                ))}

              {showFinished &&
                finish.map((task:string, index:number) => (
                  <ListFinished 
                    key={index} 
                    Task={task} 
                  />
                ))}
            </div>
        </div>
      </div>
    </>
  )
}

export default App