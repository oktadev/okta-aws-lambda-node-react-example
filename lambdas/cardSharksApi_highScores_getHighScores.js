exports.handler = async( event ) => {

  const getHighScores = () => {

    const scores = [];

    scores.push( {
      player: "Roger Rabbit",
      score: 100
    } );

    scores.push( {
      player: "Donald Duck",
      score: 50
    } );

    scores.push( {
      player: "Goofy",
      score: 40
    } );

    scores.push( {
      player: "John Daly",
      score: 30
    } );

    scores.push( {
      player: "Mike Tyson",
      score: 20
    } );

    return scores;

  };

  const response = {
    statusCode: 200,
    body: JSON.stringify( getHighScores() ),
  };
  return response;
};
