const express = require("express");
const router = express.Router();

const {
  getTutoriales,
  getTutorial,
  updateTutorial,
  removeTutorial,
  removeTutoriales,
  addTutorial,
} = require("../controllers/tutorialController");

// Obtener
router.get("/", async (req, res, next) => {
  try {
    const tutoriales = await getTutoriales();
    res.status(200).json(tutoriales);
  } catch (e) {
    res.status(500).json(e);
    next(e);
  }
});

router.get("/:id", async (req, res, next) => {
  const id = req.params.id;
  try {
    const tutorial = await getTutorial(id);

    if (tutorial !== undefined) res.status(200).json(tutorial);
    else res.status(404).json("404 No encontrado");
  } catch (e) {
    res.status(500).json(e);
    next(e);
  }
});

// Crear
router.post("/", async (req, res, next) => {
  try {
    const response = await addTutorial(req.body);

    res.status(201).json({
      status: "success",
      message: `${response} tutorial agregado.`, // 1 tutorial agregado
      tutorial: req.body,
    });
  } catch (e) {
    res.status(500).json(e);
    next(e);
  }
});

// Actualizar
router.put("/:id", async (req, res, next) => {
  const id = req.params.id;
  try {
    const response = await updateTutorial(id, req.body);

    if (response === 1) {
      res.status(200).json({ message: "Tutorial actualizado" });
    } else {
      res.status(404).json("404 No encontrado");
    }
  } catch (e) {
    res.status(500).json(e);
    next(e);
  }
});

// Eliminar
router.delete("/", async (req, res, next) => {
  try {
    const response = await removeTutoriales();

    if (response !== 0)
      res.status(200).json({
        status: "success",
        message: "Todos los tutoriales fueron borrados.",
      });
    else res.status(200).json({ message: "No hay tutoriales para borrar." });
  } catch (e) {
    res.status(500).json(e);
    next(e);
  }
});

router.delete("/:id", async (req, res, next) => {
  const id = req.params.id;
  try {
    const response = await removeTutorial(id);

    if (response === 1)
      res.status(200).json({
        status: "success",
        message: `${response} tutorial borrado.`, // 1 tutorial borrado
      });
    else res.status(404).json("404 No encontrado");
  } catch (e) {
    res.status(500).json(e);
    next(e);
  }
});

module.exports = router;
