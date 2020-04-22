import React from 'react';

import '../cards.css';

const Card = ({ card }) => {

    var content;

    if (card.visible) {
        var cardClass = "card rank-" + card.rank.toLowerCase() + " " + card.suit;
        content =
            <div className={cardClass}>
                <div className="rank">{card.rank}</div>
                <div className="suit"></div>
            </ div>;
    }
    else {
        content = <div className="card back">*</div>
    }

    return (
        <div className="playingCards faceImages">
            {content}
        </div>
    );
};

export default Card;