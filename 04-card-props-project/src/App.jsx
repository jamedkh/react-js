import React from "react";
import Card from "./components/card";
import Heading from "./components/heading";

const App = () => {
  const profileData = [
    {
      img: "https://mockmind-api.uifaces.co/content/human/80.jpg",
      name: "Monarch Jhon",
      designation: "UI/UX Designer",
      location: "Sydney, Australia",
      email: "monarch@egm.com",
      phone: "+1 0347 1234567",
    },

    {
      img: "https://mockmind-api.uifaces.co/content/human/221.jpg",
      name: "Julia Pan",
      designation: "Interactive Designer",
      location: "Poland, Warsaw",
      email: "julia@egm.com",
      phone: "+1 0347 1234567",
    },
    {
      img: "https://mockmind-api.uifaces.co/content/human/128.jpg",
      name: "Svetlana Anyukova",
      designation: "UX Researcher",
      location: "Kyiv, Ukraine",
      email: "svetlana@egm.com",
      phone: "+1 0347 1234567",
    },
    {
      img: "https://mockmind-api.uifaces.co/content/human/104.jpg",
      name: "Wade Wilson",
      designation: "HR",
      location: "NYC, America",
      email: "wade@egm.com",
      phone: "+1 0347 1234567",
    },
    {
      img: "https://mockmind-api.uifaces.co/content/human/217.jpg",
      name: "Sonia Simionov",
      designation: "Chief Finance",
      location: "Paris, France",
      email: "sonia@egm.com",
      phone: "+1 0347 1234567",
    },
  ];

  return (
    <>
      <Heading heading="React Js - 04 - Cards Props Drilling" />

      <div className="profile-container">
        {profileData.map(function (elem, index) {
          return (
            <Card
              key={index}
              img={elem.img}
              name={elem.name}
              designation={elem.designation}
              location={elem.location}
              email={elem.email}
              phone={elem.phone}
            />
          );
        })}
        {/* 
        <Card
          img="https://mockmind-api.uifaces.co/content/human/80.jpg"
          name="Monarch Jhon"
          designation="UI/UX Designer"
          location="Sydney, Australia"
          email="monarch@egm.com"
          phone="+1 0347 1234567"
        />

        <Card
          img="https://mockmind-api.uifaces.co/content/human/221.jpg"
          name="Julia Pan"
          designation="Interactive Designer"
          location="Poland, Warsaw"
          email="julia@egm.com"
          phone="+1 0347 1234567"
        />
        <Card
          img="https://mockmind-api.uifaces.co/content/human/128.jpg"
          name="Svetlana Anyukova"
          designation="UX Researcher"
          location="Kyiv, Ukraine"
          email="svetlana@egm.com"
          phone="+1 0347 1234567"
        />
        <Card
          img="https://mockmind-api.uifaces.co/content/human/104.jpg"
          name="Wade Wilson"
          designation="HR"
          location="NYC, America"
          email="wade@egm.com"
          phone="+1 0347 1234567"
        />
        <Card
          img="https://mockmind-api.uifaces.co/content/human/217.jpg"
          name="Sonia Simionov"
          designation="Chief Finance"
          location="Paris, France"
          email="sonia@egm.com"
          phone="+1 0347 1234567"
        /> 
        */}
      </div>
    </>
  );
};

export default App;
