import Heading from "./components/heading";
import axios from "axios";
import { useEffect, useState } from "react";
import CardSkeleton from "./components/card-skeleton";
import NavButtons from "./components/nav-buttons";
import CardImage from "./card-image";
function App() {
  const [pictureData, setPictureData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [pageNo, setPageNo] = useState(1);

  useEffect(() => {
    const getAXPictures = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://picsum.photos/v2/list?page=${pageNo}&limit=18`,
        );
        setPictureData(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
        console.log("Request Success");
      }
    };

    const fetchPics = async () => {
      await getAXPictures();
    };

    fetchPics();
  }, [pageNo]);

  const handleNextClick = () => {
    setPageNo(pageNo + 1);
  };

  const handlePreviousClick = () => {
    if (pageNo > 1) {
      setPageNo(pageNo - 1);
    }
  };

  let printImages = (
    <div className="flex flex-row justify-center items-center text-2xl text-gray-400">
      {Array.from({ length: 12 }).map((_, index) => (
        <CardSkeleton key={index} />
      ))}
    </div>
  );

  if (pictureData.length > 0) {
    printImages = pictureData.map((item, index) => (
      <li key={index} id={item.id}>
        <CardImage item={item} />
      </li>
    ));
  }

  return (
    <>
      <section className="flex flex-col justify-center items-center w-full min-h-[25vh] bg-gray-900 gap-4">
        <Heading
          heading="React JS - 15 - Gallery App"
          className="text-4xl font-medium py-4 text-white"
        />
      </section>

      <section className="pt-4 pb-12 px-4">
        {isLoading ? (
          <ul className="columns-2 md:columns-4 gap-4">
            {Array.from({ length: 12 }).map((_, index) => (
              <CardSkeleton key={index} />
            ))}
          </ul>
        ) : (
          <>
            <NavButtons
              handleNextClick={handleNextClick}
              handlePreviousClick={handlePreviousClick}
              pageNo={pageNo}
            />
            <ul className="columns-2 md:columns-4 gap-4 text-center relative">
              {printImages}
            </ul>
            <NavButtons
              handleNextClick={handleNextClick}
              handlePreviousClick={handlePreviousClick}
              pageNo={pageNo}
            />
          </>
        )}
      </section>
    </>
  );
}

export default App;
