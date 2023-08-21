import React, { createContext, Suspense } from "react";
import "./App.css";

import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import AppRouter from "./components/AppRouter";

export const ThemeContext = createContext(null);

function App() {

  return (
    <div className="App">
      <Suspense fallback={null}>
        <Router>
            <Header />
            <div style={{ marginTop: "20px" }}>
              <AppRouter />
            </div>
            <Footer />
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
