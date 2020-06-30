const express = require("express");
const cors = require("cors");
const tutorialRouter = require("./routers/tutorialRouter");
const searchRouter = require("./routers/searchRouter");

const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/tutoriales", tutorialRouter);
app.use("/api/search", searchRouter);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
