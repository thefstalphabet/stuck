import "./App.css";
import LoginPage from "./Pages/LoginPage";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { getUserAuth } from "./Actions";
import { connect } from "react-redux";
import Header from "./Components/Header";

function App(props) {
  useEffect(() => {
    props.getUserAuth();
  }, []);

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<LoginPage />}></Route>
          <Route path="/home" element={[<Header/>, <Home/>]} /></Routes>
      </Router>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProp = (dispatch) => ({
  getUserAuth: () => dispatch(getUserAuth()),
});

export default connect(mapStateToProps, mapDispatchToProp)(App);
