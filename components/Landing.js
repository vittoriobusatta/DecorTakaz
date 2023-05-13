import React from "react";

const Landing = () => {
  return (
    <section className="landing">
      <div className="landing_container">
        <div className="landing_title">
          <h1>Décor Ta Kaz</h1>
          <h2>Menuiserie Artisanale</h2>
        </div>
        <div className="landing_location">
          <div className="landing_location_content">
            <div>
              <h5>14 rue Auguste de villele</h5>
              <p>Saint Benoît, La Réunion</p>
            </div>
            <div>
              <h5>Coordonnées</h5>
              <p>21°2’37.304”S, 55°43’10.438”E </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
