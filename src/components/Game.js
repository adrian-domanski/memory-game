import React, { Component } from "react";

import GameEasy from "./GameEasy";
import GameMedium from "./GameMedium";
import GameHard from "./GameHard";
import GameOverModal from "./GameOverModal";

export class Game extends Component {
  state = {
    cards: [],
    isFlippedCard: false,
    firstCard: null,
    secondCard: null,
    isBoardLock: false,
    maxPairs: null,
    currentPairs: 0,
    isGameOver: false,
    score: 0,
    level: this.props.match.params.level
  };

  componentDidMount() {
    const cards = document.querySelectorAll(".memory-card");
    // Amount of pairs to end game
    this.setState({ maxPairs: cards.length / 2 });
    // Add click event
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

  checkScore = () => {
    // Score ++
    this.setState(prevState => ({ score: prevState.score + 1 }));
    this.setState(prevState => ({
      currentPairs: prevState.currentPairs + 1
    }));

    // Game over ?
    const { maxPairs, currentPairs } = this.state;
    if (currentPairs === maxPairs) {
      setTimeout(() => {
        this.setState({ isGameOver: true });
      }, 1000);
    }
    console.log(this.state);
  };

  disableCards = () => {
    this.checkScore();
    this.state.firstCard.removeEventListener("click", this.flipCard);
    this.state.secondCard.removeEventListener("click", this.flipCard);
  };

  unFlipCards = () => {
    this.setState({ isBoardLock: true });
    setTimeout(() => {
      this.setState(prevState => ({ score: prevState.score + 1 }));
      this.state.firstCard.classList.remove("flip");
      this.state.secondCard.classList.remove("flip");
      this.resetBoard();
    }, 1500);
  };

  getCards = () => {
    switch (this.state.level) {
      case "Łatwy":
        return <GameEasy />;
      case "Średni":
        return <GameMedium />;
      case "Trudny":
        return <GameHard />;
      default:
        return <GameMedium />;
    }
  };

  shuffle = () => {
    this.state.cards.forEach(card => {
      let randomPos = Math.floor(Math.random() * 12);
      card.style.order = randomPos;
    });
  };
  render() {
    const { isGameOver, score } = this.state;
    return (
      <div className="game">
        {this.getCards()}
        <div className="game__score">Liczba Prób: {score}</div>
        {isGameOver ? <GameOverModal history={this.props.history} /> : null}
      </div>
    );
  }
}

export default Game;
