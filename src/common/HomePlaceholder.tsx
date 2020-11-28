import dotenv from "dotenv";
import React, { useState, useEffect } from "react";
// const unirest = require("unirest");

const envFound = dotenv.config();

if (!envFound) {
  throw new Error("env file not found");
}

// const HomeTemplate: React.FC<HomeTemplateProps> = (props) => {
const HomeTemplate: React.FC = () => {
  useEffect(() => {
    const API_KEY = String(process.env.REACT_APP_SPOONACULAR_KEY);

    let secondQueryParam = "";

    let requestString =
      "https://api.spoonacular.com/food/jokes/random" +
      "?apiKey=" +
      API_KEY +
      secondQueryParam;
    console.log(requestString);

    fetch(requestString, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
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
      <h3>Here's a random joke from Spoonacular; are you not entertained?</h3>
      <br />
      <h4>{joke}</h4>
    </div>
  );
};

// interface HomeTemplateProps {}

export default HomeTemplate;
