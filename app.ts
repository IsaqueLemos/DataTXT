const input = require("prompt-sync")();
const fs2 = require("fs").promises;

async function catchData(path) {
  try {
    const data = await fs2.readFile(path, "utf-8");
    return data;
  } catch (error) {
    return error;
  }
}

let caminho = input("Informe o path do arquivo: ");

let fileData: string;
catchData(caminho).then((data) => {
  fileData = data;
  console.log(data);
});

function nOfWords(fileData: string) {
  const words = fileData.split(" ");
  return words.length;
}

function biggest5(fileData: string) {
  const words = fileData.split(" ");
  let biggest5: string[] = [];

  if (words.length < 5) {
    biggest5 = [...words];
  } else {
    while (biggest5.length < 5) {
      biggest5.push(pickBiggest(words));
    }
  }

  return biggest5;
}

function pickBiggest(words: string[]) {
  let indexOfBiggestWord: number;
  let biggest: string;
  words.forEach((word) => {
    if (biggest === undefined) {
      biggest = word;
      indexOfBiggestWord = words.indexOf(word);
    } else if (word.length >= biggest.length) {
      biggest = word;
      indexOfBiggestWord = words.indexOf(word);
    }
  });
  return biggest;
}
