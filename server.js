'use strict';

const express = require('express');
const morgan = require('morgan');
const { getWordById, getRandomWord, guessLetter } = require("./handlers/hangmanHandlers");


express()
  .use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  })
  .use(morgan("tiny"))
  .use(express.static("public"))
  .use(express.json())
  .use(express.urlencoded({ extended: false }))

  // endpoints


  

  .get("/hangman/word/:id", getWordById)
  .get("/hangman/word", getRandomWord)
  .get("/hangman/guess/:id/:letter", guessLetter)

  .listen(8000, () => console.log(`Listening on port 8000`));
