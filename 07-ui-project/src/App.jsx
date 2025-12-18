import {
  Ri24HoursFill,
  RiEarthLine,
  RiFileChart2Line,
  RiLineChartLine,
  RiSpeakLine,
} from "@remixicon/react";
import FullSectionTitle from "./components/full-section-title";
import Header from "./components/header";
import Hero from "./components/hero";
import IconCard from "./components/icon-card";
import Logos from "./components/logos";

import PriceCard from "./components/price-card";
import LeftContent from "./components/left-content";
import RightContent from "./components/right-content";
import NumberCard from "./components/number-card";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <section className="pt-40 pb-10">
        <Logos />
      </section>

      <section className="lg:px-0 px-4">
        <FullSectionTitle
          caption="Benifits"
          title="We've cracked the code."
          description="Area provides real insights, without the data overload."
        />
      </section>

      <section className="pt-20 lg:px-0 px-4 pb-40">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <IconCard
              icon={<RiFileChart2Line />}
              title="Amplify Insights"
              description="Unlock data-driven decisions with comprehensive analytics, revealing key opportunities for strategic regional growth."
            />

            <IconCard
              icon={<RiEarthLine />}
              title="Control Your Global Presence"
              description="Manage and track satellite offices, ensuring consistent performance and streamlined operations everywhere."
            />
            <IconCard
              icon={<RiSpeakLine />}
              title="Remove Language Barriers"
              description="Adapt to diverse markets with built-in localization for clear communication and enhanced user experience."
            />
            <IconCard
              icon={<RiLineChartLine />}
              title="Visualize Growth"
              description="Generate precise, visually compelling reports that illustrate your growth trajectories across all regions."
            />
          </div>
        </div>
      </section>

      <section className="lg:px-0 px-4 lg:pb-40 pb-8">
        <div className="container mx-auto text-center">
          <picture>
            <source media="(min-width: 575px)" srcset="/section-img.png" />
            <img
              src="/section-img-1.png"
              alt="hero"
              className="inline-block max-w-full"
            />
          </picture>
        </div>
      </section>

      <section className="pt-20 lg:px-0 px-4 pb-12 lg:pb-40">
        <div className="container mx-auto">
          <LeftContent />
        </div>
      </section>

      <section className="lg:px-0 px-4 text-center mb-20 ">
        <FullSectionTitle
          caption="Specs"
          title="Why Choose Area?"
          description="You need a solution that keeps up. That's why we developed Area. A developer-friendly approach to streamline your business."
        />
        <a
          href="/"
          className="bg-(--primary-100) rounded-full text-black font-bold py-4 px-8 mt-12 inline-flex"
        >
          Discover More
        </a>
      </section>
      <section className="lg:px-0 px-4 lg:pb-40 pb-8">
        <div className="container mx-auto">
          <PriceCard />
        </div>
      </section>

      <section className="pt-20 lg:px-0 px-4 pb-12 lg:pb-40">
        <div className="container mx-auto">
          <RightContent />
        </div>
      </section>

      <section className="pt-20 lg:px-0 px-4 ">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 justify-between items-center w-full border-t border-t-(--divider) lg:py-16 py-10">
            <h2 className="text-3xl lg:text-7xl ">Map Your Success</h2>

            <a
              href="/"
              className="bg-(--primary-100) rounded-full text-black font-bold py-4 px-8 mt-12 inline-flex"
            >
              Discover More
            </a>
          </div>
        </div>
      </section>

      <section className="lg:px-0 px-4 pb-40">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <NumberCard
              number="01"
              title="Get Started"
              description="With our intuitive setup, you're up and running in minutes."
            />
            <NumberCard
              number="02"
              title="Customize and Configure"
              description="Adapt Area to your specific requirements and preferences."
            />
            <NumberCard
              number="03"
              title="Grow Your Business"
              description="Make informed decisions to exceed your goals."
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
