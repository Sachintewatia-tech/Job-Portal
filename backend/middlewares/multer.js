const multer = require('multer');
const storage = multer.memoryStorage();

const sinlgeUpload = multer({storage}).single("file");
module.exports = {
    sinlgeUpload
}