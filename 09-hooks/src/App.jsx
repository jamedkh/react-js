import Heading from "./components/heading";
import { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <section className="flex flex-col justify-center items-center w-full min-h-screen bg-gray-900 gap-4">
        <Heading
          heading="React Js - 09 - Hooks - useState"
          className="text-4xl font-medium py-4 text-white"
        />

        <div className="w-4/12 text-center flex flex-col gap-8">
          <h2 className="text-2xl text-gray-300">
            This is a simple React application demonstrating the useState hook.
          </h2>
          <p className="text-gray-300">
            The useState hook allows you to add state to functional components.
            It returns an array with two elements: the current state value and a
            function to update that value. You can use it to manage state in
            your components without needing to convert them to class components.
          </p>

          <p className="text-gray-300">
            In this example, we have a button that, when clicked, will update
            the state and display the new value. The useState hook makes it easy
            to manage state in functional components, allowing for a more
            concise and readable codebase.
          </p>

          <p className="text-gray-300">
            To use the useState hook, you need to import it from the React
            library and call it inside your functional component. You can
            initialize the state with a default value, and then use the provided
            function to update the state whenever needed. This allows you to
            create interactive and dynamic components in your React
            applications.
          </p>

          <p className="text-gray-300">
            Count Value is {/* Display the current count value here */}
            {counter}
          </p>

          <div className="flex gap-4 w-full justify-center items-center ">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-md w-auto  hover:bg-blue-600 transition-colors "
              onClick={() => setCounter(counter + 1)}
            >
              Increment Counter
            </button>

            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-md w-auto  hover:bg-blue-600 transition-colors "
              onClick={() => setCounter(0)}
            >
              Reset Counter
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
