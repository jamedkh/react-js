import Heading from "./components/heading";

const App = () => {
  const handleClick = () => {
    alert("Button Clicked!");
  };
  return (
    <>
      <section className="flex flex-col justify-center items-center w-full min-h-screen bg-gray-900 gap-4">
        <Heading
          heading="React JS - 08 - Functions"
          className="text-4xl font-medium py-4 text-white"
        />
        <button type="button" className="" onClick={handleClick}>
          <span className="px-4 py-2 bg-blue-500 text-white rounded-md">
            Click Me
          </span>
        </button>
      </section>
    </>
  );
};

export default App;
