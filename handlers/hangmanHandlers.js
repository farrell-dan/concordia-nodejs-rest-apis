const { words } = require('../data/words');

// write your handlers here...

function getWordById(req, res) {
  const id = req.params.id;
  const word = words.find((word) => word.id === id);
  if (!word) {
    return res.status(404).json({ error: "Word not found" });
  }
  res.json(word);
}

function getRandomWord(req, res) {
  const randomIndex = Math.floor(Math.random() * words.length);
  const randomWord = words[randomIndex];
  res.json({
    id: randomWord.id,
    letterCount: randomWord.letterCount,
  });
}

function guessLetter(req, res) {
  const id = req.params.id;
  const letter = req.params.letter;
  const word = words.find((word) => word.id === id);

  if (!word) {
    return res.status(404).json({ error: "Word not found" });
  }

  const guessedWord = word.word.split("").map((char) => char === letter);
  res.status(200).json(guessedWord);
}

module.exports = {
  getWordById,
  getRandomWord,
  guessLetter,
};