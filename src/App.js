// add search wala part urself

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import "./App.css";
import Home from "./pages/Home.page";
import Navbar from "./components/Navbar";

const App = () => {
  const pageSize = 6;
  const apiKey = process.env.REACT_APP_API_KEY;
  const [searchKeyword, setSearchKeyword] = useState("");
  const [progress, setProgress] = useState(0);
  const searchFunction = (word) => {
    setSearchKeyword(word);
  };

  return (
    <div>
      <Router>
        <Navbar searchFunction={searchFunction} />
        <LoadingBar height={3} color="#f11946" progress={progress} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home
                searchKeyword={searchKeyword} 
                setProgress={setProgress}
                apiKey={apiKey}
                key="general"
                pageSize={pageSize}
                country="in"
                category="general"
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <Home
                setProgress={setProgress}
                apiKey={apiKey}
                key="business"
                pageSize={pageSize}
                country="in"
                category="business"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <Home
                setProgress={setProgress}
                apiKey={apiKey}
                key="entertainment"
                pageSize={pageSize}
                country="in"
                category="entertainment"
              />
            }
          />
          <Route
            exact
            path="/general"
            element={
              <Home
                setProgress={setProgress}
                apiKey={apiKey}
                key="general"
                pageSize={pageSize}
                country="in"
                category="general"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <Home
                setProgress={setProgress}
                apiKey={apiKey}
                key="health"
                pageSize={pageSize}
                country="in"
                category="health"
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <Home
                setProgress={setProgress}
                apiKey={apiKey}
                key="science"
                pageSize={pageSize}
                country="in"
                category="science"
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <Home
                setProgress={setProgress}
                apiKey={apiKey}
                key="sports"
                pageSize={pageSize}
                country="in"
                category="sports"
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <Home
                setProgress={setProgress}
                apiKey={apiKey}
                key="technology"
                pageSize={pageSize}
                country="in"
                category="technology"
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
