import './App.css';
import LoginPage from './Pages/LoginPage';
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
        </Routes>
      </Router>
    </div>
  );
}
export default App;
