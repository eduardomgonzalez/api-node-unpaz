const express = require("express");
const router = express.Router();

const { getSearchTutorials } = require("../controllers/serchController");

// endpoint para filtrar
router.get("/", async (req, res, next) => {
  const valor = req.query;

  try {
    const tutoriales = await getSearchTutorials(valor);

    if (tutoriales !== undefined) res.status(200).json(tutoriales);
    else res.status(404).json("404 No encontrado");
  } catch (e) {
    res.status(500).json(e);
    next(e);
  }
});

module.exports = router;
