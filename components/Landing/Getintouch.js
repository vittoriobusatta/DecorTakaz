import Link from "next/link";
import React, { useState } from "react";
import ContactForm from "../ContactForm";

function Getintouch() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <section className="getintouch">
      <div className="getintouch_content">
        <span>
          <div className="hidden">
            <p>Impressionnez par notre travail?</p>
          </div>
          <div className="hidden">
            <p>Contactez-nous maintenant</p>
          </div>
        </span>
        <button onClick={() => setIsOpened(true)}>
          <div className="hidden">
            <p>Faire un devis</p>
          </div>
        </button>
      </div>
      {isOpened && (
        <ContactForm isOpened={isOpened} setIsOpened={setIsOpened} />
      )}
    </section>
  );
}

export default Getintouch;
