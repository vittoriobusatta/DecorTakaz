import Link from "next/link";
import React from "react";

function Getintouch() {
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
        <button>
          <Link href="/contact">
            <div className="hidden">
              <p>Faire un devis</p>
            </div>
          </Link>
        </button>
      </div>
    </section>
  );
}

export default Getintouch;
