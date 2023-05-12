import React from 'react'
import FlashCard from './FlashCard'

export default function FlashCardList(props) {
  return (
    <div className='card-grid'>
      {props.flashcards.map(flashcard => {
        return <FlashCard flashcard={flashcard} key={flashcard.id} cardbackground = {props.cardbackground}/>
    })}
    </div>
  )
}
