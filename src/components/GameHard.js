import React from "react";
import "./styles/Game.scss";
// Images
import pirate from "./styles/IMG/chars/pirate.png";
import bee from "./styles/IMG/chars/bee.png";
import dragon from "./styles/IMG/chars/dragon.png";
import dog from "./styles/IMG/chars/dog.png";
import panda from "./styles/IMG/chars/panda.png";
import squirrel from "./styles/IMG/chars/squirrel.png";
import baker from "./styles/IMG/chars/baker.png";
import sheep from "./styles/IMG/chars/sheep.png";

import back_face from "./styles/IMG/back-face.png";

export default function GameHard() {
  return (
    <section className="memory-game hard">
      <div className="memory-card" data-title="pirate">
        <img src={pirate} alt="pirate" className="front-face" />
        <img src={back_face} alt="Backface" className="back-face" />
      </div>
      <div className="memory-card" data-title="bee">
        <img src={bee} alt="bee" className="front-face" />
        <img src={back_face} alt="Backface" className="back-face" />
      </div>

      <div className="memory-card" data-title="dragon">
        <img src={dragon} alt="dragon" className="front-face" />
        <img src={back_face} alt="Backface" className="back-face" />
      </div>
      <div className="memory-card" data-title="dog">
        <img src={dog} alt="dog" className="front-face" />
        <img src={back_face} alt="Backface" className="back-face" />
      </div>

      <div className="memory-card" data-title="panda">
        <img src={panda} alt="panda" className="front-face" />
        <img src={back_face} alt="Backface" className="back-face" />
      </div>
      <div className="memory-card" data-title="squirrel">
        <img src={squirrel} alt="squirrel" className="front-face" />
        <img src={back_face} alt="Backface" className="back-face" />
      </div>

      <div className="memory-card" data-title="baker">
        <img src={baker} alt="baker" className="front-face" />
        <img src={back_face} alt="Backface" className="back-face" />
      </div>
      <div className="memory-card" data-title="sheep">
        <img src={sheep} alt="sheep" className="front-face" />
        <img src={back_face} alt="Backface" className="back-face" />
      </div>

      {/* Pairs */}

      <div className="memory-card" data-title="pirate">
        <img src={pirate} alt="pirate" className="front-face" />
        <img src={back_face} alt="Backface" className="back-face" />
      </div>
      <div className="memory-card" data-title="bee">
        <img src={bee} alt="bee" className="front-face" />
        <img src={back_face} alt="Backface" className="back-face" />
      </div>

      <div className="memory-card" data-title="dragon">
        <img src={dragon} alt="dragon" className="front-face" />
        <img src={back_face} alt="Backface" className="back-face" />
      </div>
      <div className="memory-card" data-title="dog">
        <img src={dog} alt="dog" className="front-face" />
        <img src={back_face} alt="Backface" className="back-face" />
      </div>

      <div className="memory-card" data-title="panda">
        <img src={panda} alt="panda" className="front-face" />
        <img src={back_face} alt="Backface" className="back-face" />
      </div>
      <div className="memory-card" data-title="squirrel">
        <img src={squirrel} alt="squirrel" className="front-face" />
        <img src={back_face} alt="Backface" className="back-face" />
      </div>

      <div className="memory-card" data-title="baker">
        <img src={baker} alt="baker" className="front-face" />
        <img src={back_face} alt="Backface" className="back-face" />
      </div>
      <div className="memory-card" data-title="sheep">
        <img src={sheep} alt="sheep" className="front-face" />
        <img src={back_face} alt="Backface" className="back-face" />
      </div>
    </section>
  );
}
