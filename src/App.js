import React from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';

function App() {
  return (
    <div className="p-6 md:p-8 lg:pl-12 lg:pr-12 xl:pl-16 xl:pr-16">
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
