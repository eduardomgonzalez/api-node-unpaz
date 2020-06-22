
CREATE TABLE tutoriales
(
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    descripcion VARCHAR(255) NOT NULL,
    publicado boolean NOT NULL DEFAULT false
);

/* Para insertar datos */
INSERT INTO tutoriales (titulo, descripcion, publicado)
    VALUES ('PHP', 'Todo sobre PHP', true),
           ('PHP1', 'Todo sobre PHP1', true),
           ('PHP2', 'Todo sobre PHP2', true),
           ('PHP3', 'Todo sobre PHP3', true);