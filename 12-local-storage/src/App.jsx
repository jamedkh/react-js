import Heading from "./components/heading";

function App() {
  const handleClick = () => {
    /* 
      localStorage
      .setItem(key, value)
      .getItem(key)
      .removeItem(key)
      .clear()
      .length

      sessionStorage
      .setItem(key, value)
      .getItem(key)
      .removeItem(key)
      .clear()
      .length

      cookies
      document.cookie
      
      const userInfo = {
        name: "John Wick",
        age: 30,
        email: "john@wick.com",
        city: "Milan",
        loggedIn: true,
      };
   
      // alert("Data stored successfully");
   
      localStorage.setItem("user Information", JSON.stringify(userInfo));
      // localStorage.clear();
    */

    const userInfo = localStorage.getItem("user Information");

    if (userInfo) {
      // alert(user);
      console.log(JSON.parse(userInfo));
    }
  };

  return (
    <>
      <section className="flex flex-col justify-center items-center w-full min-h-screen bg-gray-900 gap-4">
        <Heading
          heading="React JS - 12 - Local Storage"
          className="text-4xl font-medium py-4 text-white"
        />
        <button type="button" className="" onClick={handleClick}>
          <span className="px-4 py-2 bg-blue-500 text-white rounded-md">
            Click to see User Info
          </span>
        </button>
      </section>
    </>
  );
}

export default App;
