import React from "react";
import { Asterix } from "../utils/icons";

const Landing = () => {
  return (
    <section className="landing">
      <div className="landing_container">
        <div className="landing_title">
          <h1>Décor</h1>
          <h1>Ta Kaz</h1>
          <Asterix />
        </div>
        <div className="landing_location">
          <div className="landing_location_content">
            <div>
              <h5>14 rue Auguste de villele</h5>
              <p>Saint Benoît, La Réunion</p>
            </div>
            <div>
              <h5>Coordonnées</h5>
              <p>55” 43” 3.402 E</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
