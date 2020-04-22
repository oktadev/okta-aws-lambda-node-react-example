exports.handler = async ( event ) => {

  const response = {
    statusCode: 200,
    body: JSON.stringify( {
      player: event.player,
      score: event.score
    } ),
  };
  return response;
};
