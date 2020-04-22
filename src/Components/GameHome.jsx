import React from 'react';

import { Row, Col, Table, Button } from 'react-bootstrap'

const GameHome = ({ newGameClick, highScores, submitHighScore }) => {

    return (

        <div>
            <Row>
                <Col lg={12}>
                    <h4>Recent High Scores</h4>
                </Col>
            </Row>

            <Row>
                <Col lg={12}>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Player</th>
                                <th>Score</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                highScores.map((highScore, i) => {
                                    return (
                                        <tr key={i}>
                                            <td>{highScore.player}</td>
                                            <td>{highScore.score}</td>
                                        </tr>
                                    );
                                })}

                        </tbody>
                    </Table>

                    <Button variant="primary" onClick={newGameClick}> Start a new game</Button>
                </Col>
            </Row>
        </div>
    );
}

export default GameHome;