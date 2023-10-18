CREATE DATABASE ejercicio2;

USE ejercicio2;

CREATE TABLE PAIS
(
  pais_id INT NOT NULL UNIQUE AUTO_INCREMENT,
  nombre_pais VARCHAR(50) NOT NULL,
  PRIMARY KEY (pais_id)
);

CREATE TABLE PROVINCIA
(
  provincia_id INT NOT NULL UNIQUE AUTO_INCREMENT,
  nombre_provincia VARCHAR(50) NOT NULL,
  pais_id INT NOT NULL,
  PRIMARY KEY (provincia_id),
  FOREIGN KEY (pais_id) REFERENCES PAIS(pais_id)
);

CREATE TABLE LOCALIDAD
(
  localidad_id INT NOT NULL AUTO_INCREMENT,
  nombre_localidad VARCHAR(50) NOT NULL,
  codigo_postal INT NOT NULL,
  provincia_id INT NOT NULL,
  PRIMARY KEY (localidad_id),
  FOREIGN KEY (provincia_id) REFERENCES PROVINCIA(provincia_id),
  UNIQUE (codigo_postal)
);

CREATE TABLE EMPLEADO
(
  empleado_id INT NOT NULL AUTO_INCREMENT,
  email VARCHAR(50) NOT NULL,
  fecha_alta DATE NOT NULL,
  nombre VARCHAR(50) NOT NULL,
  dni INT NOT NULL,
  localidad_id INT NOT NULL,
  PRIMARY KEY (empleado_id),
  FOREIGN KEY (localidad_id) REFERENCES LOCALIDAD(localidad_id),
  UNIQUE (dni)
);

CREATE TABLE EMPLEADO_telefono
(
  telefono VARCHAR(50) NOT NULL,
  empleado_id INT NOT NULL,
  PRIMARY KEY (telefono, empleado_id),
  FOREIGN KEY (empleado_id) REFERENCES EMPLEADO(empleado_id)
);

INSERT INTO PAIS (nombre_pais) VALUES
('Argentina'),
('Brasil'),
('Chile');

INSERT INTO PROVINCIA (nombre_provincia, pais_id) VALUES
('Misiones', 1),
('Sao Paulo', 2),
('Santiago', 3);

INSERT INTO LOCALIDAD (nombre_localidad, codigo_postal, provincia_id) VALUES
('Posadas', 3300, 1),
('Sao Paulo', 01001, 2),
('Providencia', 7500000, 3);

INSERT INTO EMPLEADO (email, fecha_alta, nombre, dni, localidad_id) VALUES
('andres@gmail.com', '2023-11-22', 'Santa Cruz, Andres', 40011345, 1),
('empleado2@email.com', '2023-02-20', 'López, Maria', 87654321, 2),
('empleado3@email.com', '2023-03-25', 'González, Carlos', 55555555, 3);

--TABLA PAIS
SELECT * FROM PAIS;

--Datos de provincia y pasis al que corresponden
SELECT P.*, PA.nombre_pais
FROM PROVINCIA P
INNER JOIN PAIS PA ON P.pais_id = PA.pais_id;

--Datos de localidad, pais y provincia a la que pertenece
SELECT L.*, PR.nombre_provincia, PA.nombre_pais
FROM LOCALIDAD L
INNER JOIN PROVINCIA PR ON L.provincia_id = PR.provincia_id
INNER JOIN PAIS PA ON PR.pais_id = PA.pais_id;

--Datos de empleado, localidad, provincia y pais a la que pertenece
SELECT E.*, L.nombre_localidad, PR.nombre_provincia, PA.nombre_pais
FROM EMPLEADO E
INNER JOIN LOCALIDAD L ON E.localidad_id = L.localidad_id
INNER JOIN PROVINCIA PR ON L.provincia_id = PR.provincia_id
INNER JOIN PAIS PA ON PR.pais_id = PA.pais_id;

--Tabla EMPLEADO_telefono y el nombre de los empleados
SELECT ET.telefono, E.nombre AS nombre_empleado
FROM EMPLEADO_telefono ET
INNER JOIN EMPLEADO E ON ET.empleado_id = E.empleado_id;


