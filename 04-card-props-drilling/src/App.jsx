import React from "react";
import Card from "./components/card";
import Heading from "./components/heading";

const App = () => {
  return (
    <>
      <Heading heading="React Js - 04 - Cards Props Drilling" />

      <div className="profile-container">
        <Card
          img="https://images.unsplash.com/photo-1721331762508-13fe0743499f?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          name="Mona Lisa"
          designation=""
          location=""
          email=""
          phone=""
        />
      </div>
    </>
  );
};

export default App;
