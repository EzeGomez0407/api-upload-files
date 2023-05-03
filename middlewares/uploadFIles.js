const multer = require("multer");
const path = require("path");
const { ROUTES, TYPES } = require("../src/dictionary");

function configStorage(fileType) {
  let storage = null;
  let upload = null;

  if (fileType === TYPES.IMG) {
    storage = multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, ROUTES.IMG);
      },
      filename: function (req, file, cb) {
        cb(null, `${Date.now()}${path.extname(file.originalname)}`);
      },
    });

    upload = multer({ storage });
  } else if (fileType === TYPES.FILE) {
    storage = multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, ROUTES.FILE);
      },
      filename: function (req, file, cb) {
        cb(null, `${Date.now()}${path.extname(file.originalname)}`);
      },
    });
    upload = multer({ storage });
  } else if (fileType === TYPES.VIDEO) {
    storage = multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, ROUTES.VIDEO);
      },
      filename: function (req, file, cb) {
        cb(null, `${Date.now()}${path.extname(file.originalname)}`);
      },
    });
    upload = multer({ storage });
  } else {
    throw Error("No se proporciono ninguno de los parametros requeridos");
  }

  return upload;
}

module.exports = {
  configStorage,
};
