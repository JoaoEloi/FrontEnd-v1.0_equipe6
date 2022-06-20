import "./style.scss";

import { SiFacebook } from "react-icons/si";
import { RiLinkedinFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IconContext } from "react-icons";

export default function Footer() {
  return (
    <footer id="footer" className="footer_container_home">
      <h1 className="footer-title">©2022 Digital Booking</h1>

      <section className="footer-icons">
        <IconContext.Provider value={{ color: "white", size: "2.3em" }}>
          <SiFacebook />
          <RiLinkedinFill />
          <FaTwitter />
          <FiInstagram />
        </IconContext.Provider>
      </section>
    </footer>
  );
}
