import React from "react";
import ContactForm from "../ContactForm";
import { useEstimate } from "../../hook/useEstimate";

function Getintouch() {
  const { isOpened, onOpen } = useEstimate();
  console.log(isOpened);

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
        <button onClick={onOpen}>
          <div className="hidden">
            <p>Faire un devis</p>
          </div>
        </button>
      </div>
      {isOpened && (
        <ContactForm isOpened={isOpened} />
      )}
    </section>
  );
}

export default Getintouch;
