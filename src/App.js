import { useState } from "react"
import React from 'react'
import FlashCardList from "./FlashCardList";
import './App.css';
import Navbar from './Navbar.js';


export default function App() {
    const [flashcards , setFlashCards] = useState(MONGODB_FLASHCARDS);
    const [cardbackground , setCardBackground] = useState("green");
    function changeData(data) {
        if(data === "MONGO")
        {
          setFlashCards(MONGODB_FLASHCARDS);
          setCardBackground("green");
        }
        else if (data === "JQUERY")
        {
            setFlashCards(JQUERY_FLASHCARDS);
            setCardBackground("darksalmon");
        }
        else if (data === "CSS")
        {
            setFlashCards(CSS_FLASHCARDS);
            setCardBackground("darkcyan");
        }
        else
        {
            setFlashCards(REACT_FLASHCARDS);
            setCardBackground("yellow");
        }
    }

  return (
    <div>
      <Navbar changeData={changeData}/>
      <FlashCardList flashcards = {flashcards} cardbackground = {cardbackground}/>
    </div>
  )

}

const MONGODB_FLASHCARDS = [
    {
        id: 1,
        question: 'How to  create schema in mongoose ?',
        answer: `const mongoose = require('mongoose');
            const Schema = mongoose.Schema;
        
        const UserSchema = new Schema({
            name : {
                type: String,
                required: true
            },
            age: {
                type: Number,
                required: true
            },
        } , {timestamps : true});
        
        const User =  mongoose.model('User' , UserSchema); // plurlize and lowercase it
        module.exports = User;`,
      },
    {
        id : 2,
        question: 'Create new object in DB ?',
        answer:`async function((req, res) => {
          const user = await User.create({ //User is the name of the schema we exported
          name : 'Ofek',
          age:'24'
          })
      });`
        
    },
    {
        id : 3,
        question: 'Connect to database in mongoose',
        answer:`const dbURI = 'mongodb+srv://User:Password@myDB.e4oubf9.mongodb.net/myDB'; // replace myDB (both of them) with the db name.
        mongoose.connect(dbURI)
        .then((result)=>{
            console.log('connection established')
            app.listen(3000 , console.log('app listening on port 3000'));
        })`
        
    },
    {
        id : 4,
        question: 'How to delete single document?',
        answer:`Person.deleteOne({ name: 'John' })
        .then(() => {
          console.log('Document deleted');
        })
        .catch((error) => {
          console.error('Error deleting document:', error);
        });`
        
        
        
    },
    {
        id : 5,
        question: 'How to delete many documents?',
        answer:`Person.deleteMany({ age: { $gte: 30 } })
        .then(() => {
          console.log('Documents deleted');
        })
        .catch((error) => {
          console.error('Error deleting documents:',error);
        });`
        
    },
    {
      id : 6,
      question: 'How to modify single document?',
      answer:`Person.updateOne({ name: 'John' }, { age: 35 })
      .then(() => {
        console.log('Document updated');
      })
      .catch((error) => {
        console.error('Error updating document:', error);
      });`
      
      
      
  },
  {
    id : 7,
    question: 'How to modify many documents ?',
    answer:`Person.updateMany({ age: { $gte: 30 } }, { isAdult: true })
    .then(() => {
      console.log('Documents updated');
    })
    .catch((error) => {
      console.error('Error updating documents:', error);`
    
    
    
}
]


const CSS_FLASHCARDS = [
  {
      id : 1,
      question: 'How can I center align a div both horizontally and vertically? ',
      answer:`div {
        display: flex;
        justify-content: center;
        align-items: center;
      }`

  },
  {
      id : 2,
      question: ' How can I create a responsive layout using CSS Grid?',
      answer:`.container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        grid-gap: 10px;
      }`
      
  },
  {
      id : 3,
      question: 'How can I create a smooth transition effect on hover using CSS?',
      answer:`.element {
        background-color: red;
        transition: background-color 0.3s ease;
      }
      
      .element:hover {
        background-color: blue;
      }`
      
  },
  {
      id : 4,
      question: 'How can I create a fixed/sticky header in CSS?',
      answer:`.header {
        position: fixed; /* or position: sticky; */
        top: 0;
        left: 0;
        width: 100%;
        background-color: #ffffff;
      }`
      
  },
  {
    id : 5,
    question: 'How can I create a responsive background image that scales with the viewport?',
    answer:`.container {
      background-image: url('image.jpg');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }`
}
]



const JQUERY_FLASHCARDS = [
  {
      id : 1,
      question: 'How can I fade in an element using jQuery? ',
      answer:`$(element).fadeIn();`

  },
  {
      id : 2,
      question: 'How can I toggle a class on click using jQuery?',
      answer:`$(element).click(function() {
        $(this).toggleClass('active');
      });`
      
  },
  {
      id : 3,
      question: 'How can I make an AJAX request using jQuery?',
      answer:`$.ajax({
        url: 'example.com/api/data',
        method: 'GET',
        success: function(response) {
          console.log(response);
        },
        error: function(error) {
          console.error(error);
        }
      });`
      
  },
  {
      id : 4,
      question: "How can I animate an element's properties using jQuery?",
      answer:`$(element).animate({
        left: '200px',
        opacity: 0.5,
        fontSize: '24px'
      }, 1000);`
      
  },
  {
    id : 5,
    question: 'How can I detect when the page has finished loading using jQuery?',
    answer:`$(document).ready(function() {
      console.log('Page loaded!');
    });`
}
]



const REACT_FLASHCARDS = [
  {
      id : 1,
      question: 'How can I create a functional component in React? ',
      answer:`import React from 'react';

      function MyComponent() {
        return <div>Hello, World!</div>;
      }
      
      export default MyComponent;`

  },
  {
      id : 2,
      question: 'How can I handle events in React?',
      answer:`import React from 'react';

      function MyComponent() {
        const handleClick = () => {
          console.log('Button clicked!');
        };
      
        return <button onClick={handleClick}>Click me</button>;
      }
      
      export default MyComponent;`
      
  },
  {
      id : 3,
      question: 'How can I pass data from a parent component to a child component in React?',
      answer:`import React from 'react';

      function ParentComponent() {
        const data = 'Hello, Child!';
      
        return <ChildComponent message={data} />;
      }
      
      function ChildComponent(props) {
        return <div>{props.message}</div>;
      }
      
      export default ParentComponent;`
      
  },
  {
      id : 4,
      question: "How can I manage state in a React component?",
      answer:`import React, { useState } from 'react';

      function MyComponent() {
        const [count, setCount] = useState(0);
      
        const increment = () => {
          setCount(count + 1);
        };
      
        return (
          <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
          </div>
        );
      }
      
      export default MyComponent;`
      
  },
  {
    id : 5,
    question: 'How can I fetch data from an API in a React component?',
    answer:`import React, { useEffect, useState } from 'react';
    import axios from 'axios';
    
    function MyComponent() {
      const [data, setData] = useState(null);
    
      useEffect(() => {
        axios.get('https://api.example.com/data')
          .then(response => {
            setData(response.data);
          })
          .catch(error => {
            console.error(error);
          });
      }, []);
    
      return (
        <div>
          {data ? <p>{data}</p> : <p>Loading...</p>}
        </div>
      );
    }
    
    export default MyComponent;`
}
]


