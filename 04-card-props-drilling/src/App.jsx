import React from "react";
import Card from "./components/card";
import Heading from "./components/heading";

const App = () => {
  return (
    <>
      <Heading heading="React Js - 04 - Cards Props Drilling" />
      <Card
        img="https://images.unsplash.com/photo-1721331762508-13fe0743499f?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Mona Lisa"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quod fugit porro sapiente animi officiis!"
        actions={
          <a href="void" className="btn">
            Read More
          </a>
        }
      />

      <Card
        img="https://images.unsplash.com/photo-1659018966820-de07c94e0d01?q=80&w=1796&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="AI Bot"
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora aliquid ipsam maiores id laboriosam dolor laudantium ipsum quaerat neque iste."
        actions={
          <a href="void" className="btn">
            Read More
          </a>
        }
      />
    </>
  );
};

export default App;
