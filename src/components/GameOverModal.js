import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class GameOverModal extends Component {
  state = {
    modal: true
  };

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };

  endGame = () => {
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Gratulacje!</ModalHeader>
          <ModalBody>Udało Ci się dopasować wszystkie obrazki!</ModalBody>
          <ModalFooter>
            <Button color="success" onClick={this.endGame}>
              Zakończ
            </Button>{" "}
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default GameOverModal;
