import { useState } from 'react'
import './App.css'
import SimpleAccordion from './MuiAccordion'
import SearchBox from './SearchBox'
import TodoList from './TodoList'

function App() {
  const [search, setSearch] = useState<string>("");
  const [listTodo, setListTodo] = useState<string[]>(["1", "2", "3"]);
  const [listTodoSearch, setListTodoSearch] = useState<string[]>(["1", "2", "3"]);


  const handleChange = (searchText: string) => {
    var newListTodo = [...listTodo];
    setListTodoSearch(newListTodo.filter(x => x.includes(searchText)))
  }
  return (
    <>
      <SearchBox handleChange={handleChange}></SearchBox>
      <TodoList listTodo={listTodoSearch} ></TodoList>
    </>
  )
}

export default App
