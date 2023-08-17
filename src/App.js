import React, { createContext, Suspense, useState } from "react";
import "./App.css";

import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import AppRouter from "./components/AppRouter";

export const ThemeContext = createContext(null);

function App() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="App">
      {loading ? (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "grid",
            alignItems: "center",
            justifyItems: "center",
          }}
        >
          <div>Loading...</div>
        </div>
      ) : (
        <Suspense fallback={null}>
          <Router>
              <Header />
              <div style={{ marginTop: "20px" }}>
                <AppRouter />
              </div>
              <Footer />
          </Router>
        </Suspense>
      )}
    </div>
  );
}

export default App;
