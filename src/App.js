// import Navbar from "./Components/Navbar";
import Navbar2 from "./Components/Navbar2";
import "./App.css";
import News from "./Components/News";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import TopBtn from "./Components/TopBtn";
import LoadingBar from "react-top-loading-bar";

import React, { Component } from "react";
// import Navbar from './Components/Navbar2';

export default class App extends Component {
 

  state = {
    progress: 0,
  };

  setProgress = (progress) => {
    this.setState({ progress: progress });
  };

  render() {
    return (
      <Router>
        <div>
          <LoadingBar color="#38BDF9" progress={this.state.progress} />
          <Navbar2></Navbar2>
          <TopBtn></TopBtn>
          {/* <Navbar></Navbar> */}
          <Routes>
            <Route
              path="/general"
              element={
                <News
                  setProgress={this.setProgress}
                  key="general"
                  pageSize={6}
                  country="in"
                  category="general"
                />
              }
            />
            <Route
              path="/"
              element={
                <News
                  setProgress={this.setProgress}
                  key="Home"
                  pageSize={6}
                  country="in"
                  category="general"
                />
              }
            />
            <Route
              path="/business"
              element={
                <News
                  setProgress={this.setProgress}
                  key="business"
                  pageSize={6}
                  country="in"
                  category="business"
                />
              }
            />
            <Route
              path="/entertainment"
              element={
                <News
                  setProgress={this.setProgress}
                  key="entertainment"
                  pageSize={6}
                  country="in"
                  category="entertainment"
                />
              }
            />
            <Route
              path="/science"
              element={
                <News
                  setProgress={this.setProgress}
                  key="science"
                  pageSize={6}
                  country="in"
                  category="science"
                />
              }
            />
            <Route
              path="/sports"
              element={
                <News
                  setProgress={this.setProgress}
                  key="sports"
                  pageSize={6}
                  country="in"
                  category="sports"
                />
              }
            />
            <Route
              path="/health"
              element={
                <News
                  setProgress={this.setProgress}
                  key="health"
                  pageSize={6}
                  country="in"
                  category="health"
                />
              }
            />
            <Route
              path="/technology"
              element={
                <News
                  setProgress={this.setProgress}
                  key="technology"
                  pageSize={6}
                  country="in"
                  category="technology"
                />
              }
            />
          </Routes>
        </div>
      </Router>
    );
  }
}
