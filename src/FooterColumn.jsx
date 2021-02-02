import React from "react";
import "./FouterColumn.css";

const FooterColumn = ({ title, links }) => {
  return (
    <div className="footer__column">
      <div className="footer__column__title">
        <h3>{title}</h3>
      </div>
      <ul>
        {links.map((link) => (
          <li key={link}>{link}</li>
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn;
