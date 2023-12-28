import React from "react";

import "./HarryPotterList.css";

function HarryPotterList({ characters }) {
  console.log("thisss is harry potter list", characters.map);
  return characters.map(({ image, name }) => {
    return (
      <div className="characterContainer" key={name}>
        <img className="characterImg" src={image} alt={name} />
        <h2 className="characterName">{name}</h2>
      </div>
    );
  });
}

export default HarryPotterList;
