class Funcs {
  nOfWords(fileData) {
    try {
      let words = fileData
        .replace(new RegExp("\s{2,}", "g"), " ")
        .replace(new RegExp("[\n]", "gi"), "")
        .replace(new RegExp("[\r]", "gi"), " ")
        .split(" ")
      words = words.filter((word) => word !== '');

      return words.length;
    } catch (error) {
      return error
    }
  }

  biggest5(fileData) {
    try {
      let words = fileData
        .replace(new RegExp("[\n]", "gi"), "")
        .replace(new RegExp("[\r]", "gi"), " ")
        .split(" ");
      let biggest5 = [];
      if (words.length <= 5) {
        biggest5 = [...words];
      } else {
        while (biggest5.length < 5) {
          let index = this.pickBiggestWordIndex(words);
          biggest5.push(words[index]);
          words.splice(index, 1);
        }
      }
      return biggest5;
    } catch (error) {
      return error
    }
  }

  pickBiggestVowel(fileData) {
    try {
      const defaultVowels = ["A", "E", "I", "O", "U"];
      let vowel;
      let vowelAppearence = 0;
      let vowels = fileData
        .replace(new RegExp("[^aeiouà-ú]", "gi"), "")
        .toUpperCase()
        .replace(new RegExp("[ÁÀÂÃ]", "gi"), "A")
        .replace(new RegExp("[ÉÈÊ]", "gi"), "E")
        .replace(new RegExp("[ÍÌÎ]", "gi"), "I")
        .replace(new RegExp("[ÓÒÔÕ]", "gi"), "O")
        .replace(new RegExp("[ÚÙÛ]", "gi"), "U")
        .split("");
      defaultVowels.forEach((vowelDefault) => {
        let appearences = vowels.filter((value) => value === vowelDefault).length;
        if (vowelAppearence < appearences) {
          vowelAppearence = appearences;
          vowel = vowelDefault;
        }
      });
      return {
        Vogal: vowel,
        Ocorrencias: vowelAppearence,
      };
    } catch (error) {
      return error
    }
  }

  pickFirstLineAppearence(fileData) {
    try {
      const fileLine = fileData.toUpperCase().split("\n");
      let linha = fileLine.findIndex((line) => line.includes("ÇÃO"));
      if (linha === undefined) {
        return "Não existe aparições de 'ÇÃO'";
      }
      return linha + 1;
    } catch (error) {
      return error
    }
  }

  pickBiggestWordIndex(words) {
    try {
      let indexOfBiggestWord, biggest = '';
      words.forEach((word) => {
        if (word.length > biggest.length) {
          biggest = word;
          indexOfBiggestWord = words.indexOf(word);
        }
      });
      return indexOfBiggestWord;
    } catch (error) {
      return error
    }
  }
}

module.exports = new Funcs();