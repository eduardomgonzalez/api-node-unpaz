const { pool } = require("../config/config");

// Obtener
const getTutoriales = async () => {
  const tutoriales = await pool.query("SELECT * FROM tutoriales");
  return tutoriales.rows;
};

const getTutorial = async (id) => {
  const query = {
    text: "SELECT * FROM tutoriales WHERE id = $1",
    values: [id],
  };

  const tutorial = await pool.query(query);
  return tutorial.rows[0];
};

// Actualizar
const updateTutorial = async (id, tutorial) => {
  const { titulo, descripcion, publicado } = tutorial;

  const query = {
    text:
      "UPDATE tutoriales SET titulo = $1, descripcion = $2, publicado = $3 WHERE id = $4",
    values: [titulo, descripcion, publicado, id],
  };

  const response = await pool.query(query);
  return response.rowCount;
};

// Eliminar
const removeTutoriales = async () => {
  const query = {
    text: "DELETE FROM tutoriales",
  };

  const response = await pool.query(query);
  console.log("respuesta en controller: ", response);
  return response.rowCount;
};

const removeTutorial = async (id) => {
  const query = {
    text: "DELETE FROM tutoriales WHERE ID = $1",
    values: [id],
  };

  const response = await pool.query(query);
  return response.rowCount;
};

// Crear
const addTutorial = async (tutorial) => {
  const { titulo, descripcion, publicado } = tutorial;

  const query = {
    text:
      "INSERT INTO tutoriales (titulo, descripcion, publicado ) VALUES ($1, $2, $3)",
    values: [titulo, descripcion, publicado],
  };

  const response = await pool.query(query);
  return response.rowCount;
};

module.exports = {
  getTutoriales,
  getTutorial,
  updateTutorial,
  removeTutorial,
  removeTutoriales,
  addTutorial,
};
