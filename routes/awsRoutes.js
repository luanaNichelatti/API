const express = require('express');
const router = express.Router();
const AwsController = require('../controller/awsController');

router.post('/upload', AwsController.uploadArquivo);
router.post('/download', AwsController.baixarArquivo);

module.exports = router;