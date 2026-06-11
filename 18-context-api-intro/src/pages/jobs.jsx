import React from "react";
import { NavLink } from "react-router";
import CardJob from "../components/card-job";

const Jobs = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full py-12 gap-4">
      <h1 className="text-6xl font-bold text-center text-gray-800">
        Jobs Listing Page
      </h1>

      {/* 
      This is the example of nested routing where 
      we are rendering the list of jobs.
      You can see the /jobs/:id route in the App.jsx file.
      */}

      <div className="flex gap-6">
        <CardJob
          id="1"
          title="Front-End Developer"
          description="We are looking for a passionate front-end developer to join our team. You will be responsible for building user-friendly interfaces and working closely with our design and backend teams."
          path="/jobs/front-end-developer"
        />
        <CardJob
          id="2"
          title="Back-End Developer"
          description="We are looking for a passionate back-end developer to join our team. You will be responsible for building user-friendly interfaces and working closely with our design and backend teams."
          path="/jobs/back-end-developer"
        />
        <CardJob
          id="3"
          title="Full-Stack Developer"
          description="We are looking for a passionate full-stack developer to join our team. You will be responsible for building user-friendly interfaces and working closely with our design and backend teams."
          path="/jobs/full-stack-developer"
        />
      </div>
    </div>
  );
};

export default Jobs;
