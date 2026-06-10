import { NavLink, useNavigate, useParams } from "react-router";
const JobDetail = () => {
  const { id } = useParams();

  const replaceHyphen = (str) => {
    return str.replace(/-/g, " ");
  };

  let navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center w-full py-12 gap-4">
      <h1 className="text-6xl font-bold text-center text-gray-800 capitalize">
        {replaceHyphen(id)}
      </h1>
      <p className="text-2xl text-center text-gray-600 max-w-2xl">
        We are looking for a passionate {replaceHyphen(id)} to join our team.
      </p>
      <p className="text-2xl text-center text-gray-600 max-w-2xl">
        You will be responsible for building user-friendly interfaces and
        working closely with our design and backend teams.
      </p>
      <button className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 text-xl font-medium">
        Apply Now
      </button>

      <hr className="w-full bg-gray-600 h-px my-10" />

      <div className="flex gap-4">
        <button
          className="px-4 py-2 text-white bg-gray-600 rounded-lg hover:bg-blue-700 text-xl font-medium"
          onClick={() => navigate("/jobs")}
        >
          Go Back
        </button>

        <button
          className="px-4 py-2 text-white bg-gray-600 rounded-lg hover:bg-blue-700 text-xl font-medium"
          onClick={() => navigate("/")}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default JobDetail;
