const NavButtons = ({ handleNextClick, handlePreviousClick, pageNo }) => {
  return (
    <div className="flex flex-row justify-center items-center gap-4 pb-4">
      <button
        type="button"
        className="active:scale-95 w-32 rounded-full py-2 bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={handlePreviousClick}
        disabled={pageNo > 1 ? false : true}
      >
        <span className=" text-white">Previous</span>
      </button>

      <span className=" text-gray-500">Page {pageNo}</span>

      <button
        type="button"
        className="active:scale-95 w-32 rounded-full py-2 bg-blue-500"
        onClick={handleNextClick}
      >
        <span className=" text-white">Next</span>
      </button>
    </div>
  );
};

export default NavButtons;
