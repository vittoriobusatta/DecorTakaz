import { useRef } from "react";
import Image from "next/image";
import logo from "../../assets/share/logo.png";
import axterix from "../../assets/share/axterix.svg";
import menu from "../../assets/share/menu.svg";

export default function Header() {
  const asterix = useRef(null);
//   window.onscroll = () => {
//     scrollRotate();
//   };
//   function scrollRotate() {
//     asterix.current.style.transform =
//       "rotate(" + window.pageYOffset / 2 + "deg)";
//   }
  return (
    <header>
      <Image className="logo" src={logo} alt="logo" />
      <div className="menu">
        <Image src={menu} alt="menu" />
      </div>
      <Image className="axterix" src={axterix} alt="axterix" ref={asterix}/>
    </header>
  );
}
