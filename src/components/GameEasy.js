import React from "react";
import "./styles/Game.scss";
// Images
import cherries from "./styles/IMG/food/cherries.png";
import strawberry from "./styles/IMG/food/strawberry.png";
import grapes from "./styles/IMG/food/grapes.png";
import back_face from "./styles/IMG/back-face.png";

export default function GameEasy() {
  return (
    <section className="memory-game easy">
      <div className="memory-card" data-title="cherries">
        <img src={cherries} alt="cherries" className="front-face" />
        <img src={back_face} alt="Backface" className="back-face" />
      </div>
      <div className="memory-card" data-title="strawberry">
        <img src={strawberry} alt="strawberry" className="front-face" />
        <img src={back_face} alt="Backface" className="back-face" />
      </div>

      <div className="memory-card" data-title="grapes">
        <img src={grapes} alt="grapes" className="front-face" />
        <img src={back_face} alt="Backface" className="back-face" />
      </div>

      {/* Pairs */}

      <div className="memory-card" data-title="cherries">
        <img src={cherries} alt="cherries" className="front-face" />
        <img src={back_face} alt="Backface" className="back-face" />
      </div>
      <div className="memory-card" data-title="strawberry">
        <img src={strawberry} alt="strawberry" className="front-face" />
        <img src={back_face} alt="Backface" className="back-face" />
      </div>

      <div className="memory-card" data-title="grapes">
        <img src={grapes} alt="grapes" className="front-face" />
        <img src={back_face} alt="Backface" className="back-face" />
      </div>
    </section>
  );
}
