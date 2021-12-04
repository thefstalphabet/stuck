import './App.css';
import LoginPage from './Pages/LoginPage';
import Home from './Pages/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<LoginPage/>}></Route>
          <Route exact path="/home" element={<Home/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}
export default App;
