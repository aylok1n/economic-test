import './App.css';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import Task1 from './Tasks/Task1';

function App() {
  return (
    <div className="App">
      <nav>
        <Link style={{ marginRight: 20 }} to='Task1' >Основные фонды предприятия</Link>
      </nav>
      <Routes>
        <Route path="/Task1" element={<Task1 />} />
      </Routes>
    </div>
  );
}

export default App;