import Image from "next/image";
import React from "react";
import soa from "/assets/share/soa.svg";
import vittorio from "/assets/share/vittorio.svg";
import oliveblue from "/assets/share/oliveblue.svg";

function Customers() {
  return (
    <section className="customers">
      <div className="customers_container">
        <div className="hidden">
          <h2>Nos Clients</h2>
        </div>
        <ul className="customers_content">
          <li>
            <Image src={soa} alt="alt" />
          </li>
          <li>
            <Image src={vittorio} alt="alt" />
          </li>
          <li>
            <Image src={oliveblue} alt="alt" />
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Customers;
