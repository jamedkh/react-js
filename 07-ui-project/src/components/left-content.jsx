import React from "react";
import SubSectionTitle from "./sub-section-title";
import PointContent from "./point-content";

const LeftContent = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <article className="border-t-(--divider) border-t pr-0 lg:pr-12 lg:pb-0 pb-6">
        <SubSectionTitle
          title="See the Big Picture"
          description="Area turns your data into clear, vibrant visuals that show you exactly what's happening in each region."
        />

        <div className="my-16">
          <PointContent
            index="01"
            text="Spot Trends in Seconds: No more digging through numbers."
          />

          <PointContent
            index="02"
            text="Get Everyone on the Same Page: Share easy-to-understand reports with your team. "
          />

          <PointContent
            index="03"
            text="Make Presentations Pop: Interactive maps and dashboards keep your audience engaged."
          />

          <PointContent
            index="04"
            text="Your Global Snapshot: Get a quick, clear overview of your entire operation."
          />
        </div>

        <a
          href="/"
          className="bg-(--primary-100) rounded-full text-black font-bold py-4 px-8"
        >
          Discover More
        </a>
      </article>

      <article className="text-center">
        <img
          src="/features-carousel.png"
          alt="hero"
          className="inline-block max-w-full"
        />
      </article>
    </div>
  );
};

export default LeftContent;
