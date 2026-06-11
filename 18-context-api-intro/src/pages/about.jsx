import Heading from "../components/heading";

const About = () => {
  return (
    <section className="flex flex-col justify-center items-center w-full min-h-screen bg-gray-900 gap-4">
      <Heading
        heading="About"
        className="text-4xl font-medium py-4 text-white"
      />
    </section>
  );
};

export default About;
