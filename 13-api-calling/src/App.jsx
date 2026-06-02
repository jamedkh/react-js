import Heading from "./components/heading";
import axios from "axios";
import { useState } from "react";
import CardSkeleton from "./components/card-skeleton";
function App() {
  /*
   async function getData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    console.log(response);
  }

  const getResponse = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1",
    );
    const data = await response.json();
    console.log(data);
  };

  const getAXResponse = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/1",
    );
    // const data = await response.data;
    console.log(response.data);
  };
  */

  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const getAXPictures = async () => {
    setLoading(true);

    try {
      const response = await axios.get("https://picsum.photos/v2/list");
      setData(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      console.log("Request Success");
    }
  };

  const handleClick = () => {
    getAXPictures();
  };

  return (
    <>
      <section className="flex flex-col justify-center items-center w-full min-h-[25vh] bg-gray-900 gap-4">
        <Heading
          heading="React JS - 13 - API Calling"
          className="text-4xl font-medium py-4 text-white"
        />
        <button type="button" className="" onClick={handleClick}>
          <span className="px-4 py-2 bg-blue-500 text-white rounded-md">
            Click to Load Images
          </span>
        </button>
      </section>

      <section className="pt-4 pb-12 px-4">
        {isLoading ? (
          <ul className="columns-2 md:columns-4 gap-4">
            {Array.from({ length: 12 }).map((_, index) => (
              <CardSkeleton key={index} />
            ))}
          </ul>
        ) : (
          <ul className="columns-2 md:columns-4 gap-4">
            {data.map((item, index) => (
              <li
                key={index}
                id={item.id}
                className="rounded-2xl overflow-clip mb-4"
              >
                <img
                  src={item.download_url}
                  alt={item.author}
                  className="w-full h-auto"
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                />
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}

export default App;
