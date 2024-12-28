import './App.css';
import Home from './components/Home.js';
import ToDoList from './components/ToDoList.js';
import { Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/tasks" element={<ToDoList/>} />
      </Routes>
    </div>
  );
}
export default App;
