import React, { Component } from "react";

import GameHome from "../Components/GameHome";
import GameBoard from "../Components/GameBoard";
import GameOver from "../Components/GameOver";

import Header from "../Components/Header";

import { Container } from "react-bootstrap";
import { withOktaAuth } from "@okta/okta-react";

class Game extends Component {

  constructor( props, context ) {
    super( props, context );

    this.state = {
      gameState: "none",
      lastScore: 0,
      loading: false,
      highScores: [],
      player: ""
    };

    this.submitHighScore = this.submitHighScore.bind( this );
  }

  componentDidMount() {
    this.setState( { loading: true } );
    fetch( process.env.REACT_APP_AMAZON_API_BASE + "/highscore" )
      .then( res => res.json() )
      .then(
        ( result ) => {
          this.setState( { highScores: JSON.parse( result.body ) } );
        } )
      .then( () => this.props.authService.getUser() )
      .then( user => {
        this.setState( { loading: false, player: user.email } );
      } );
  }

  submitHighScore() {

    fetch( process.env.REACT_APP_AMAZON_API_BASE + "/highscore",
      {
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify( { player: this.state.player, score: this.state.lastScore } )
      } )
      .then( function ( res ) {
        //display message however you wish
      } );
  }

  newGameClick() {
    this.gameBoardLoaded();
  }

  gameBoardLoaded() {
    this.setState( { gameState: "playing" } );
  }

  endGame( score ) {
    this.setState( { gameState: "finished", lastScore: score } );
  }

  render() {

    let content;

    if ( this.state.loading ) {
      content = <h3>Loading, please wait</h3>;
    }
    if ( this.state.gameState === "none" ) {
      content = <GameHome newGameClick={this.newGameClick} highScores={this.state.highScores} >  </GameHome>;
    }
    else if ( this.state.gameState === "loading" ) {
      content = <div>Please wait while we load your deck...</div>;
    }
    else if ( this.state.gameState === "playing" ) {
      content = <GameBoard loaded={this.gameBoardLoaded} endGame={this.endGame}></GameBoard>;
    }
    else if ( this.state.gameState === "finished" ) {
      content = <GameOver score={this.state.lastScore} playAgain={this.newGameClick} submitHighScore={this.submitHighScore}></GameOver>;
    }

    return (
      <div>
        <Container>
          <Header></Header>
          <br></br>
          {content}
        </Container>
      </div>
    );
  }
}
export default withOktaAuth( Game );
