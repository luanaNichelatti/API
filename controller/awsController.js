const awsService = require("../services/awsService");

class AwsController {
    async uploadArquivo(request, response) {
        try {
            const { filePath, bucketName, keyName } = request.body;
            const fileUrl = await awsService.uploadFile(filePath, bucketName, keyName);
            return response.json({ message: "Upload realizado com sucesso!", fileUrl });
        } catch (error) {
            return response.status(500).json({ error: error.message });
        }
    }

    async baixarArquivo(request, response) {
        try {
            const {  downloadPath, bucketName, keyName } = request.body;
            await awsService.downloadFile(bucketName, keyName, downloadPath);
            return response.json({ message: "Download realizado com sucesso!", downloadPath });
        } catch (error) {
            return response.status(500).json({ error: error.message });
        }
    }
}

module.exports = new AwsController();