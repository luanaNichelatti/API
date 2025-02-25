const fs = require('fs');
const s3 = require('../config/awsConfig'); // Importando a configuração do S3

// Função para fazer o upload de um arquivo
const uploadFile = async (filePath, bucketName, keyName) => {
  const fileContent = fs.readFileSync(filePath);

  const params = {
    Bucket: bucketName,  // Nome do seu bucket S3
    Key: keyName,        // Nome do arquivo no S3
    Body: fileContent    // Conteúdo do arquivo
  };

  return s3.upload(params).promise()
    .then(data => {
      console.log('Arquivo carregado com sucesso:', data.Location);
      return data.Location;
    })
    .catch(err => {
      console.error('Erro ao fazer o upload:', err);
      throw err;
    });
};

// Função para baixar um arquivo do S3
const downloadFile = (bucketName, keyName, downloadPath) => {
  const params = {
    Bucket: bucketName,
    Key: keyName
  };

  const file = fs.createWriteStream(downloadPath);

  s3.getObject(params).createReadStream().pipe(file);

  file.on('close', () => {
    console.log('Arquivo baixado com sucesso:', downloadPath);
  });
};

module.exports = {
  uploadFile,
  downloadFile
};