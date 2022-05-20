import React, { useEffect } from "react";

import RandomImagePicker from "./RandomImagePicker";

const Home = () => {
  return (
    <div>
      <div className="breaker">
        <div className="breaker2"></div>
      </div>
      <main>
        <div className="grid-container">
          <RandomImagePicker />
        </div>
      </main>
    </div>
  );
};

export default Home;
