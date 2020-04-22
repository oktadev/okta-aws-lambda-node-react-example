import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';

const GameOver = ({ score, playAgain, submitHighScore }) => {

    return (
        <div>
            <Row>
                <Col lg={12} className="text-center">
                    Game over!  Your score was <strong>{score}</strong>.
                </Col>
            </Row>
            <Row>
                <Col lg={12} className="text-center">
                    <Button onClick={submitHighScore} variant="secondary">Submit High Score</Button>
                    <Button onClick={playAgain} variant="primary">Play Again</Button>
                </Col>
            </Row>
        </div>
    );
}

export default GameOver;