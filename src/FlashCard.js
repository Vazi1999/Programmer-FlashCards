import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function FlashCard({flashcard , cardbackground}) {
  const [flippedCards, setFlippedCards] = useState([]);
  function flipCard(id) {
    if (flippedCards.includes(id)) {
      setFlippedCards(flippedCards.filter(cardId => cardId !== id));
    } else {
      setFlippedCards([...flippedCards, id]);
    }
  }

  const cardBackGround = {backgroundColor : cardbackground};
  return (
    <div className="flashcard-container">
        <div
        
        style={cardBackGround}
          className={`card ${flippedCards.includes(flashcard.id) ? 'flipped' : ''}`}
          key={flashcard.id}
          onClick={() => flipCard(flashcard.id)}
        >
          <div className="card-inner">
            <div className="card-front">
              <h3>Question:</h3>
              <p>{flashcard.question}</p>
            </div>
            <div className="card-back">

              <pre><code>{flashcard.answer}</code></pre>
            </div>
          </div>
        </div>
    </div>
  );
}
