import React from 'react';
import "./style.css";

const Section = ({ title, body, extraHeaderContent }) => (
  <section className="section">
    <div className="section__list">
      <h2 className="section__subheader">{title}</h2>
      {extraHeaderContent}
    </div>
    <div className="section__tasks">
      {body}
    </div>
  </section>
);

export default Section;