const text = document.querySelector("#text");
const characterCount = document.querySelector("#character-count");
const wordCount = document.querySelector("#word-count");
const paragraph = document.querySelector("#paragraph");

text.addEventListener("input", () => {
  const textArea = text.value;

  const words = textArea.split(/\s+/);
  const regex = /[a-zA-Z0-9]/g;
  const newWords = words.filter((word) => {
    return word.match(regex);
  });

  wordCount.textContent = newWords.length;
  characterCount.textContent = textArea.length;

  paragraph.textContent = `You've written ${wordCount.textContent} words and ${characterCount.textContent} characters`;
});
