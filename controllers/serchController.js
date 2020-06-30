const { pool } = require("../config/config");

const getSearchTutorials = async (valor) => {
  const { titulo } = valor;

  const query = {
    text: `SELECT * FROM tutoriales WHERE LOWER(titulo) LIKE LOWER('%${titulo}%')`,
  };

  const tutoriales = await pool.query(query);
  console.log("tutos desde el controller: ", tutoriales);

  return tutoriales.rows;
};

module.exports = {
  getSearchTutorials,
};
