const { Router } = require("express");
const { TYPES } = require("../src/dictionary");
const { configStorage } = require("../middlewares/uploadFIles");

const router = Router();

// Creación del middleware de Multer para procesar la solicitud multipart/form-data*/
// para dejar todo más limpio cree esta funcion que crea y prepara la configuración para el middleware
const upload = configStorage(TYPES.IMG);

router.post("/img", upload.single(TYPES.IMG), (req, res) => {
  // Se obtiene el nombre del archivo guardado y se construye la URL
  const fileName = req.file.filename;
  const url = `${req.protocol}://${req.get("host")}/${fileName}`;

  res.send({ url });
});

module.exports = router;
