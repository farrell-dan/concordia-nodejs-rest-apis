const { words } = require('../data/words');

// write your handlers here...

const getWordById = (request, response) => {
  const id = request.params.id;
  const word = words.find((word) => word.id === id);
  if (!word) {
    return response.status(404).json({ error: "Word not found" });
  }
  response.json(word);
}

const getRandomWord = (request, response) => {
  const randomIndex = Math.floor(Math.random() * words.length);
  const randomWord = words[randomIndex];
  response.json({
    id: randomWord.id,
    letterCount: randomWord.letterCount,
  });
}

const guessLetter = (request, response) => {
  const id = request.params.id;
  const letter = request.params.letter;
  const word = words.find((word) => word.id === id);

  if (!word) {
    return response.status(404).json({ error: "Word not found" });
  }

  const guessedWord = word.word.split("").map((char) => char === letter);
  response.status(200).json(guessedWord);
}

module.exports = {
  getWordById,
  getRandomWord,
  guessLetter,
};