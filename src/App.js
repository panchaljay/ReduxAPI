import './App.css';
import { Routes,Route} from "react-router-dom";
import Read from './component/Read';
import Create from './component/Create';
import Update from './component/Update';

function App() {
  return (
    <div className="App">
       <Routes> 
          <Route path="/" element={<Read/>} exact />
          <Route path="/create" element={<Create/>} />
          <Route path="/update/:id" element={<Update/>} />
         </Routes>
    </div>
  );
}

export default App;
