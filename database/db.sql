CREATE DATABASE apinode;

CREATE TABLE tutoriales
(
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    descripcion VARCHAR(255) NOT NULL,
    publicado boolean NOT NULL DEFAULT false
);

/* Para insertar datos */
INSERT INTO tutoriales (titulo, descripcion, publicado)
    VALUES ('Angular 10', 'Todo sobre Angular 10', true),
           ('JavaScript', 'La guia moderna de JS', false),
           ('ReactJS', 'Basico de ReactJS', true),
           ('ElectronJS', 'Utiliza JS para crear app de escritorio', true),
		   ('TypeScript', 'JavaScript con super poderes', true),
           ('Java', 'Java Avanzado', false),
           ('FUndamentos', 'Fundamentos de la programacion', false),
		   ('Redes', 'Crea modelos reales de redes', true),
           ('Matarial UI', 'Aprende este poderoso framework', true),
           ('Bootstrap 4', 'Utiliza todo el poder de Bootstrap', false),
		   ('Arduino', 'Crea robots impresionantes', true),
           ('Electronica', 'Electronica basica', true),
           ('Electricidad', 'Aprende las bases de la electricidad', true),
		   ('Haking Etico', 'Intrudoccion al hacking', false),
           ('Pentesting', 'Pentesting con Kali Linux', false),
           ('Kotlin', 'Crea modernas apps', true);