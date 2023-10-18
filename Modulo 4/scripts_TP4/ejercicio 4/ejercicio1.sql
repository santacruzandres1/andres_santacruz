CREATE DATABASE ejercicio1;

USE ejercicio1;

CREATE TABLE ALUMNO
(
  cod_matricula INT NOT NULL UNIQUE AUTO_INCREMENT,
  nombre VARCHAR(50) NOT NULL,
  dni INT NOT NULL,
  fecha_nac DATE NOT NULL,
  email VARCHAR(50) NOT NULL,
  PRIMARY KEY (cod_matricula)
);

CREATE TABLE CURSO
(
  cod_curso INT NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(50) NOT NULL,
  PRIMARY KEY (cod_curso)
);

CREATE TABLE PROFESOR
(
  profesor_id INT NOT NULL UNIQUE AUTO_INCREMENT,
  nombre VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL,
  especialidad VARCHAR(50) NOT NULL,
  PRIMARY KEY (profesor_id)
);

CREATE TABLE INSCRIPCION
(
    cod_matricula INT NOT NULL,
    cod_curso INT NOT NULL,
    PRIMARY KEY (cod_curso),
    FOREIGN KEY (cod_curso) REFERENCES CURSO(cod_curso),
    FOREIGN KEY (cod_matricula) REFERENCES ALUMNO(cod_matricula)
);

CREATE TABLE IMPARTIDO
(
  profesor_id INT NOT NULL,
  cod_curso INT NOT NULL,
  PRIMARY KEY (profesor_id, cod_curso),
  FOREIGN KEY (profesor_id) REFERENCES PROFESOR(profesor_id),
  FOREIGN KEY (cod_curso) REFERENCES CURSO(cod_curso)
);

INSERT INTO ALUMNO 


INSERT INTO ALUMNO (nombre, dni, fecha_nac, email) values ("Santa Cruz, Andres", 44004487 , "1998-12-7","andres@gmail.com");
INSERT INTO ALUMNO (nombre, dni, fecha_nac, email) values ("Franchetti, Lara", 49394582 , "2003-4-27","laraandres@gmail.com");
INSERT INTO ALUMNO (nombre, dni, fecha_nac, email) values ("Fernandez, Francisco", 38765283 , "1994-7-19","francisco@gmail.com");

INSERT INTO CURSO (nombre) values ("Ful Stack C-A");
INSERT INTO CURSO (nombre) values ("Front End");
INSERT INTO CURSO (nombre) values ("Back End");

INSERT INTO PROFESOR (nombre, email, especialidad) values ( "Podkowa, Lucas", "lucaspodkowa@gmail.com", "Full Stack C-A");
INSERT INTO PROFESOR (nombre, email, especialidad) values ("Gonzalez, Juan", "juangonzalez@gmail.com", "Front End");
INSERT INTO PROFESOR (nombre, email, especialidad) values ("Perez, Maria", "mariaperez@gmail.com", "Back End");

INSERT INTO INSCRIPCION (cod_matricula, cod_curso) values (1, 1);
INSERT INTO INSCRIPCION (cod_matricula, cod_curso) values (2, 2);
INSERT INTO INSCRIPCION (cod_matricula, cod_curso) values (3, 3);

SELECT * FROM ALUMNO;
SELECT * FROM CURSO;
SELECT * FROM PROFESOR;