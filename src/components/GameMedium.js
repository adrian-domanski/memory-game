import React from "react";
import "./styles/Game.scss";
// Images
import gloves from "./styles/IMG/items/gloves.png";
import hat from "./styles/IMG/items/hat.png";
import jeans from "./styles/IMG/items/jeans.png";
import shoes from "./styles/IMG/items/shoes.png";
import back_face from "./styles/IMG/back-face.png";
import socks from "./styles/IMG/items/socks.png";
import tshirt from "./styles/IMG/items/tshirt.png";

export default function GameMedium() {
  return (
    <section className="memory-game">
      <div className="memory-card" data-title="gloves">
        <img src={gloves} alt="gloves" className="front-face" />
        <img src={back_face} alt="Backface" className="back-face" />
      </div>
      <div className="memory-card" data-title="hat">
        <img src={hat} alt="hat" className="front-face" />
        <img src={back_face} alt="Backface" className="back-face" />
      </div>

      <div className="memory-card" data-title="jeans">
        <img src={jeans} alt="jeans" className="front-face" />
        <img src={back_face} alt="Backface" className="back-face" />
      </div>
      <div className="memory-card" data-title="shoes">
        <img src={shoes} alt="shoes" className="front-face" />
        <img src={back_face} alt="Backface" className="back-face" />
      </div>

      <div className="memory-card" data-title="socks">
        <img src={socks} alt="socks" className="front-face" />
        <img src={back_face} alt="Backface" className="back-face" />
      </div>
      <div className="memory-card" data-title="tshirt">
        <img src={tshirt} alt="tshirt" className="front-face" />
        <img src={back_face} alt="Backface" className="back-face" />
      </div>

      {/* Pairs */}

      <div className="memory-card" data-title="gloves">
        <img src={gloves} alt="gloves" className="front-face" />
        <img src={back_face} alt="Backface" className="back-face" />
      </div>
      <div className="memory-card" data-title="hat">
        <img src={hat} alt="hat" className="front-face" />
        <img src={back_face} alt="Backface" className="back-face" />
      </div>

      <div className="memory-card" data-title="jeans">
        <img src={jeans} alt="jeans" className="front-face" />
        <img src={back_face} alt="Backface" className="back-face" />
      </div>
      <div className="memory-card" data-title="shoes">
        <img src={shoes} alt="shoes" className="front-face" />
        <img src={back_face} alt="Backface" className="back-face" />
      </div>

      <div className="memory-card" data-title="socks">
        <img src={socks} alt="socks" className="front-face" />
        <img src={back_face} alt="Backface" className="back-face" />
      </div>
      <div className="memory-card" data-title="tshirt">
        <img src={tshirt} alt="tshirt" className="front-face" />
        <img src={back_face} alt="Backface" className="back-face" />
      </div>
    </section>
  );
}
