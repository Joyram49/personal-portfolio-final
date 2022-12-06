import React from "react";
import { About, Blog, Contact, Home, Resume, Works, Footer } from "./container";
import { Navbar } from "./component";

import "./App.css";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Home />
      <About />
      <Resume />
      <Works />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
