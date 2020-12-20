import React, { useState, useEffect } from 'react';
import service from '../utils/api-service';

const Home: React.FC = () => {
  useEffect(() => {
    service
      .handleFetch('/joke', 'GET')
      .then((r: any) => r.json())
      .then((r: any) => {
        setJoke(r.text);
      })
      .catch((err: any) => console.log({ Error: err, Status: err.status, Message: err.message }));
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

export default Home;
