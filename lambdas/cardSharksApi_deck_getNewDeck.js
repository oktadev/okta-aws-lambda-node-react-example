exports.handler = async( event ) => {

  const getSuit = ( suitId ) => {
    switch ( suitId ) {
    case 0:
      return "diams";
    case 1:
      return "hearts";
    case 2:
      return "spades";
    case 3:
      return "clubs";
    default:
      throw "only 4 suits";
    }
  };

  const getRank = ( rankId ) => {
    if ( rankId > 13 || rankId < 1 )
      throw "invalid rank " + rankId;
    switch ( rankId ) {
    case 11:
      return "J";
    case 12:
      return "Q";
    case 13:
      return "K";
    case 1:
      return "A";
    default:
      return rankId.toString();
    }
  };

  const buildDeck = () => {
    let deck = [];

    for ( let suit = 0; suit < 3; suit++ ) {
      for ( let value = 1; value <= 13; value++ ) {
        deck.push( {
          suit: getSuit( suit ),
          rank: getRank( value ),
          value: value,
          visible: false
        } );
      }
    }

    return deck;
  };

  const getCards = () => {

    let deck = buildDeck();
    deck.sort( ( a, b ) => 0.5 - Math.random() );

    let cards = [];

    for ( let i = 0; i < 6; i++ ) {
      let card = deck[i];

      if ( i == 0 )
        card.visible = true;

      card.order = i;

      cards.push( card );
    }
    return cards;
  };

  const response = {
    statusCode: 200,
    body: JSON.stringify( getCards() )
  };
  return response;
};
