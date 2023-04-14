import React from "react";
import Banner from "./components/Banner";
import Header from "./components/Header";
import NavMobile from "./components/NavMobile";
import { useState } from "react";

const App = () => {
  const [navMobile, setNavMobile] = useState(false)
  return (
    <div >
      <Header setNavMobile={setNavMobile} />
      <Banner />
       {/* mobile nav */}
       <div
        className={`${
          navMobile ? 'right-0' : '-right-full'
        } fixed top-0 bottom-0 w-48 transition-all`}
      >
        <NavMobile setNavMobile={setNavMobile} />
      </div>
    </div>
  );
}

export default App;
