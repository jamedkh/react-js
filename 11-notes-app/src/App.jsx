import { useState } from "react";
import Heading from "./components/heading";

const App = () => {
  const [user, setUser] = useState({ username: "John", age: 10 });

  const [input, setInput] = useState("");

  const handleClick = () => {
    setUser((prev) => ({ ...prev, username: "Jane", age: (prev.age = 20) }));
  };

  const handleSubmit = (el) => {
    el.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted with input:", input);
    setInput("");
  };
  return (
    <>
      <section className="flex flex-col justify-center items-center w-full min-h-screen bg-gray-900 gap-4">
        <Heading
          heading="React Js - 11 - Notes App"
          className="text-4xl font-medium py-4 text-white"
        />
        <p className="text-2xl font-bold text-white">
          Name: {user.username}, Age: {user.age}
        </p>
        <button type="button" className="" onClick={handleClick}>
          <span className="px-4 py-2 bg-blue-500 text-white rounded-md">
            Update user Info
          </span>
        </button>

        <hr className="h-[1px] bg-teal-500 border-0  w-1/4 mt-3" />
        <Heading
          heading="Form Example(Two way binding)"
          className="text-2xl font-medium py-4 text-white"
        />

        <form
          className="flex flex-col gap-4"
          onSubmit={(el) => {
            handleSubmit(el);
          }}
        >
          <input
            type="text"
            placeholder="Username"
            className="text-white   px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 border border-gray-300 placeholder-gray-500"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit" className="">
            <span className="px-4 py-2 bg-green-500 text-white rounded-md">
              Submit
            </span>
          </button>
        </form>
      </section>
    </>
  );
};

export default App;
