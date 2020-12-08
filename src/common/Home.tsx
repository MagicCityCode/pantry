import React, { useState, useEffect } from 'react';
// const unirest = require('unirest');

// const Home: React.FC<Home> = (props) => {
const Home: React.FC = () => {
  // const handleJokeButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  // e.preventDefault();
  // };
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
        console.log(r);
        setJoke(r.text);
      });
  }, []);
  const [joke, setJoke] = useState([]);

  return (
    <div>
      <h1>Home View Working</h1>
      <br />
      {/* <button
        className="button button--outline button--primary"
        onClick={handleJokeButtonClick}
      >
        Generate Food Joke
      </button> */}
      <h3>Here&apos;s a random joke from Spoonacular; are you not entertained?</h3>
      <h4>{joke}</h4>
    </div>
  );
};

// interface Home {}

export default Home;
