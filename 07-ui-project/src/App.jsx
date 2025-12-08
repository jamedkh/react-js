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
          title="We’ve cracked the code."
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
    </>
  );
}

export default App;
