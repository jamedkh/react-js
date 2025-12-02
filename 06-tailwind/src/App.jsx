import React from "react";
import Card from "./components/card";
import Heading from "./components/heading";

const App = () => {
  return (
    <>
      <section className="flex justify-center items-center w-full min-h-screen bg-gray-900">
        <Heading
          heading="React Js - 06 - Tailwind CSS"
          className="text-4xl font-medium py-4 text-white"
        />
      </section>
    </>
  );
};

export default App;
