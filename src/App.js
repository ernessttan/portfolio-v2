/* eslint-disable no-unused-vars */
import { lazy, Suspense, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer/Index";

function App() {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevState) => !prevState);
  };

  const Home = lazy(() => import("./pages/Home"));
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="container mx-auto px-8 py-5">
          <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </div>
      </Suspense>

    </Router>
  );
}

export default App;
