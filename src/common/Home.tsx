import React, { useState, useEffect } from 'react';
// const unirest = require('unirest');

// const Home: React.FC<Home> = (props) => {
const Home: React.FC = () => {
  useEffect(() => {
    const requestString = '/joke';
    fetch(requestString, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((r) => r.json())
      .then((r) => {
        setJoke(r.text);
      })
      .catch((err) => console.log(err, err.message));
  }, []);
  const [joke, setJoke] = useState([]);

  return (
    <div>
      <h1 className="margin-top--md">Home View Working</h1>
      <br />
      <h3>Here&apos;s a random joke from Spoonacular; are you not entertained?</h3>
      <h4>{joke}</h4>
    </div>
  );
};

// interface Home {}

export default Home;
