import React, { useState, useEffect } from "react";
import Layout from "./components/Layout/Layout";
import Footer from "./components/Common/Footer";
import Header from "./components/Common/Header";

function App() {
  const [clone, setClone] = useState(false);

  const toggleClone = () => {
    setClone(!clone);
  };

  return (
    <div className="w-full">
      <Header toggleClone={toggleClone} />
      <Layout clone={clone} setClone={setClone} toggleClone={toggleClone} />
      <Footer />
    </div>
  );
}

export default App;
