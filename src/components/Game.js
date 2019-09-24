import React, { Component } from "react";
import GameMedium from "./GameMedium";

export class Game extends Component {
  state = {
    cards: [],
    isFlippedCard: false,
    firstCard: null,
    secondCard: null,
    isBoardLock: false
  };

  componentDidMount() {
    const cards = document.querySelectorAll(".memory-card");
    cards.forEach(card => {
      card.addEventListener("click", this.flipCard);
    });
    this.setState({ cards });
    // Shuffle cards
    setTimeout(() => this.shuffle());
  }

  flipCard = e => {
    const thisCard = e.target.parentElement;
    if (this.state.isBoardLock) return;
    if (thisCard === this.state.firstCard) return;

    const { isFlippedCard } = this.state;
    thisCard.classList.add("flip");

    if (!isFlippedCard) {
      // First click
      this.setState({ isFlippedCard: true });
      this.setState({ firstCard: thisCard });
      return;
    }
    // Second click
    this.setState({ isFlippedCard: false });
    this.setState({ secondCard: thisCard });

    this.checkForMatch();
  };

  checkForMatch = () => {
    const { firstCard, secondCard } = this.state;
    // Cards match?
    let isMatch = firstCard.dataset.title === secondCard.dataset.title;

    isMatch ? this.disableCards() : this.unFlipCards();
  };

  resetBoard = () => {
    this.setState({
      isFlippedCard: false,
      isBoardLock: false,
      firstCard: null,
      secondCard: null
    });
  };

  disableCards = () => {
    this.state.firstCard.removeEventListener("click", this.flipCard);
    this.state.secondCard.removeEventListener("click", this.flipCard);
  };

  unFlipCards = () => {
    this.setState({ isBoardLock: true });
    setTimeout(() => {
      this.state.firstCard.classList.remove("flip");
      this.state.secondCard.classList.remove("flip");
      this.resetBoard();
    }, 1500);
  };

  getCards = () => {
    return <GameMedium />;
  };

  shuffle = () => {
    this.state.cards.forEach(card => {
      let randomPos = Math.floor(Math.random() * 12);
      card.style.order = randomPos;
    });
  };
  render() {
    return <div className="game">{this.getCards()}</div>;
  }
}

export default Game;
