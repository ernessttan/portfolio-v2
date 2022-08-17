/* eslint-disable no-unused-vars */
import { lazy, Suspense, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import useDarkMode from "./hooks/useDarkMode";
import Main from "./components/layout/Main";

function App() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  const Home = lazy(() => import("./pages/Home"));
  const Contact = lazy(() => import("./pages/contact/Contact"));

  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <div className={`${darkMode && "dark"}`}>
          <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <Main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Main>
          <Footer />
        </div>
      </Suspense>
    </Router>
  );
}

export default App;
