import React from "react";
import "./docsCard.scss";

const DocsCard = ({ icon, title, desc1 }) => {
  return (
    <div className="docs-card">
      <span>
        <img src={icon} alt="icon" />
      </span>
      <h3>{title}</h3>
      <p>{desc1}</p>
    </div>
  );
};

export default DocsCard;
