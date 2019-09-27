import React from "react";
import "./styles/Game.scss";
// Images
import angular from "./styles/IMG/angular.svg";
import backbone from "./styles/IMG/backbone.svg";
import aurelia from "./styles/IMG/aurelia.svg";
import ember from "./styles/IMG/ember.svg";
import back_face from "./styles/IMG/js-badge.svg";
import react from "./styles/IMG/react.svg";
import vue from "./styles/IMG/vue.svg";

export default function GameHard() {
  return (
    <section className="memory-game hard">
      <div className="memory-card" data-title="angular">
        <img src={angular} alt="Angular" className="front-face" />
        <img src={back_face} alt="Backface" className="back-face" />
      </div>
      <div className="memory-card" data-title="backbone">
        <img src={backbone} alt="Backbone" className="front-face" />
        <img src={back_face} alt="Backface" className="back-face" />
      </div>

      <div className="memory-card" data-title="aurelia">
        <img src={aurelia} alt="Aurelia" className="front-face" />
        <img src={back_face} alt="Backface" className="back-face" />
      </div>
      <div className="memory-card" data-title="ember">
        <img src={ember} alt="Ember" className="front-face" />
        <img src={back_face} alt="Backface" className="back-face" />
      </div>

      <div className="memory-card" data-title="react">
        <img src={react} alt="React" className="front-face" />
        <img src={back_face} alt="Backface" className="back-face" />
      </div>
      <div className="memory-card" data-title="vue">
        <img src={vue} alt="vue" className="front-face" />
        <img src={back_face} alt="Backface" className="back-face" />
      </div>

      <div className="memory-card" data-title="react">
        <img src={react} alt="React" className="front-face" />
        <img src={back_face} alt="Backface" className="back-face" />
      </div>
      <div className="memory-card" data-title="vue">
        <img src={vue} alt="vue" className="front-face" />
        <img src={back_face} alt="Backface" className="back-face" />
      </div>

      {/* Pairs */}

      <div className="memory-card" data-title="angular">
        <img src={angular} alt="Angular" className="front-face" />
        <img src={back_face} alt="Backface" className="back-face" />
      </div>
      <div className="memory-card" data-title="backbone">
        <img src={backbone} alt="Backbone" className="front-face" />
        <img src={back_face} alt="Backface" className="back-face" />
      </div>

      <div className="memory-card" data-title="aurelia">
        <img src={aurelia} alt="Aurelia" className="front-face" />
        <img src={back_face} alt="Backface" className="back-face" />
      </div>
      <div className="memory-card" data-title="ember">
        <img src={ember} alt="Ember" className="front-face" />
        <img src={back_face} alt="Backface" className="back-face" />
      </div>

      <div className="memory-card" data-title="react">
        <img src={react} alt="React" className="front-face" />
        <img src={back_face} alt="Backface" className="back-face" />
      </div>
      <div className="memory-card" data-title="vue">
        <img src={vue} alt="vue" className="front-face" />
        <img src={back_face} alt="Backface" className="back-face" />
      </div>

      <div className="memory-card" data-title="react">
        <img src={react} alt="React" className="front-face" />
        <img src={back_face} alt="Backface" className="back-face" />
      </div>
      <div className="memory-card" data-title="vue">
        <img src={vue} alt="vue" className="front-face" />
        <img src={back_face} alt="Backface" className="back-face" />
      </div>
    </section>
  );
}
