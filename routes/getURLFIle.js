const { Router } = require("express");
const { TYPES } = require("../src/dictionary");
const { configStorage } = require("../middlewares/uploadFIles");

const router = Router();

// Creación del middleware de Multer para procesar la solicitud multipart/form-data*/
// para dejar todo más limpio cree esta funcion que crea y prepara la configuración para el middleware
const upload = configStorage(TYPES.FILE);

router.post("/file", upload.single(TYPES.FILE), (req, res) => {
  // Se obtiene el nombre del archivo guardado y se construye la URL
  const filename = req.file.filename;
  const url = `${req.protocol}://${req.get("host")}/${filename}`;

  res.send({ url });
});

module.exports = router;
