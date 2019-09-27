import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class GameOverModal extends Component {
  state = {
    modal: true
  };

  back = () => {
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <Modal isOpen={this.state.modal} className="legend">
          <ModalHeader toggle={this.back} className="legend__title">
            Cel gry:
          </ModalHeader>
          <ModalBody className="legend__body">
            <strong>Smok Heniek</strong> ma bardzo słabą pamięć. Bardzo często
            zostawia rzeczy w różnych miejscach oraz o nich zapomina. Nadszedł
            czas na porządki. Pomóż naszemu bałaganiarzowi w odnalezieniu
            powtarzających się przedmiotów.
          </ModalBody>
          <ModalFooter>
            <Button
              className="m-auto px-4"
              size="lg"
              color="success"
              onClick={this.back}>
              Powrót
            </Button>{" "}
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default GameOverModal;
