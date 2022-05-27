const input = require("prompt-sync")();
const fileData = require("./fileData");

const main = async () => {
  console.log(
    `
      ********** EXTRAINDO DADOS TXT **********
    `
  )
  let filePath = input("Informe o path do arquivo -> ");
  try {
    await fileData.catchData(filePath);
  } catch (error) {
    console.log(error);
    return error;
  }
}

main();