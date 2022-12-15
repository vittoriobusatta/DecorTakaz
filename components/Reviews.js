import React from "react";
import Image from "next/image";
import circle1 from "/assets/share/circle.png";

function Reviews() {
  return (
    <section className="reviews">
      <div className="reviews_content">
        <h2>Leurs Avis</h2>
        <div className="reviews_layout">
          <span>&#34;</span>
          <p>
            Le seul et unique ARTISAN spécialisé en bois et résine sur l&#39;île qui
            a cru à mon projet , le seul qui a su réaliser et rendre réel la
            vision que j&#39;avais concernant mon enseigne.
          </p>
          <div className="reviews_customers">
            <Image src={circle1} alt="alt" />
            <h4>- Jenny Beauty</h4>
            <h5>Esthéticienne</h5>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
