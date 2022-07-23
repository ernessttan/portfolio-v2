/* eslint-disable no-unused-vars */
import { lazy, Suspense, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer/Index";
import Loader from "./components/common/Loader";

function App() {
  const [isDarkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode((prevState) => !prevState);
  };

  const Home = lazy(() => import("./pages/Home"));
  const Contact = lazy(() => import("./pages/Contact"));
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <div className={`${isDarkMode && "dark"}`}>
          <div className="dark:bg-black p-5 md:px-14">
            <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </Suspense>

    </Router>
  );
}

export default App;
