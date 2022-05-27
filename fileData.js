const fs2 = require("fs").promises;
const path = require("path");
const funcs = require("./funcs");

exports.catchData = async (filePath) => {
  try {
    let exec = false;

    /* 
     * VERIFICANDO SE O CAMINHO É ABSOLUTO
     */
    if (path.isAbsolute(filePath)) {
      exec = true;
    } else {
      console.log('\n\n-> O caminho informado não existe ou não é absoluto! <-');
      console.log('-> Informe um caminho absoluto e existente. <-');
      return 'CAMINHO NÃO VÁLIDO';
    }

    if (exec) {
      /* 
       * CAPTURANDO DADOS DO ARQUIVO
       */
      const data = await fs2.readFile(filePath, "utf-8");
      const qtPalavras = funcs.nOfWords(data);
      const maioresPalavras = funcs.biggest5(data);
      const vogalMaiorOcorrencia = funcs.pickBiggestVowel(data);
      const primeiraOcorrenciaCAO = funcs.pickFirstLineAppearence(data);
  
      /* 
       * INFORMANDO VALORES
       */
      console.log('\n\nQuantidade de palavras presentes no arquivo ==>  ', qtPalavras);
      console.log('\nVogal com maior número de incidência ==>  ', vogalMaiorOcorrencia);
      if (primeiraOcorrenciaCAO) {
        console.log('\nLinha da primeira incidência de [ÇÃO] ==>  ', primeiraOcorrenciaCAO);
      }
      console.log('\nMairoes palavras presente no arquivo ==>  ', maioresPalavras);

      return 'OK!';
    }
  } catch (error) {
    return error;
  }
}
