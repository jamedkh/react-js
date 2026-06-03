import { useEffect, useState } from "react";
import Heading from "./components/heading";

const App = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  const handleA = () => {
    setA(a + 1);
  };

  const handleB = () => {
    setB(b - 1);
  };

  useEffect(() => {
    console.log("Component Rendered");
  }, [a]);

  return (
    <>
      <section className="flex flex-col justify-center items-center w-full min-h-screen bg-gray-900 gap-4">
        <Heading
          heading="React JS - 14 - useEffect"
          className="text-4xl font-medium py-4 text-white"
        />

        <div className="flex flex-row gap-20">
          <h2 className="text-white text-xl font-semibold">
            A Value is <span className="text-blue-500">{a}</span>
          </h2>
          <h2 className="text-white text-xl font-semibold">
            B Value is <span className="text-blue-500">{b}</span>
          </h2>
        </div>

        <div className="flex flex-row gap-20">
          <button type="button" className="" onClick={handleA}>
            <span className="px-4 py-2 bg-blue-500 text-white rounded-md">
              Change A Value
            </span>
          </button>

          <button type="button" className="" onClick={handleB}>
            <span className="px-4 py-2 bg-blue-500 text-white rounded-md">
              Change B Value
            </span>
          </button>
        </div>
      </section>
    </>
  );
};

export default App;
