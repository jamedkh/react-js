import React from "react";
import "../profile-card.css";

const Card = (profileCard) => {
  console.log(profileCard);

  return (
    <>
      <div className="profile-card">
        {/* <div className="header">
          <button className="menuButton">⋯</button>
        </div> */}

        <div className="imageWrapper">
          <img
            src={profileCard.img}
            alt={profileCard.name}
            className="profileImage"
          />
        </div>

        <div className="content">
          <h1 className="name">{profileCard.name}</h1>
          <span className="badge">{profileCard.designation}</span>
        </div>

        <div className="contactSection">
          <div className="contactItem">
            <div className="contactText">
              <span className="label">Location:</span>
              <span className="value">{profileCard.location}</span>
            </div>
          </div>

          <div className="contactItem">
            <div className="contactText">
              <span className="label">Email:</span>
              <span className="value">{profileCard.email}</span>
            </div>
          </div>

          <div className="contactItem">
            <div className="contactText">
              <span className="label">Phone:</span>
              <span className="value">{profileCard.phone}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
