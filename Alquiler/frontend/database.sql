CREATE DATABASE Alquilartemis;
USE Alquilartemis;

CREATE TABLE Personas(
    persona_ID PRIMARY KEY INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(30) NOT NULL,
    telefono INT(20) NOT NULL,
    direccion VARCHAR(50) NOT NULL,
);

  
CREATE TABLE Constructoras(
    constructora_ID PRIMARY KEY INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(30) NOT NULL,
    direccion VARCHAR(50) NOT NULL,
);
CREATE TABLE Productos(
    producto_ID PRIMARY KEY INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(30) NOT NULL,
);
CREATE TABLE Clientes(
    cliente_ID PRIMARY KEY INT NOT NULL AUTO_INCREMENT,
    persona_related INT,
    FOREIGN KEY (persona_related) REFERENCES Personas(persona_ID)
);
CREATE TABLE Empleados(
    empleado_ID PRIMARY KEY INT NOT NULL AUTO_INCREMENT,
    identificacion INT,
    usuario VARCHAR(30),
    password VARCHAR(255),
    id_constructora INT,
    FOREIGN KEY (identificacion) REFERENCES Personas(persona_ID),
    FOREIGN KEY (id_constructora) REFERENCES Constructoras (id_constructora)
);
CREATE TABLE Cotizaciones(
    cotizacion_ID PRIMARY KEY INT NOT NULL AUTO_INCREMENT,
    cliente_ID INT,
    empleado_ID INT,
    duracion_alquiler INT NOT NULL,
    precio_total FLOAT(50) NOT NULL,
    fecha DATETIME NOT NULL,
    FOREIGN KEY (id_cliente) REFERENCES Clientes(id_cliente),
    FOREIGN KEY (id_empleado) REFERENCES Empleados(id_empleado)
);
CREATE TABLE Cotizacion_Producto(
    cotizacion_producto_ID PRIMARY KEY INT NOT NULL AUTO_INCREMENT,
    cotizacion_ID INT,
    producto_ID INT,
    FOREIGN KEY (cotizacion_ID) REFERENCES Cotizaciones(id_cotizacion),
    FOREIGN KEY (producto_ID) REFERENCES Productos(id_producto)
);

INSERT INTO Personas (nombre, telefono, sexo, direccion) 
VALUES ('John Doe', 1234567890, 'Masculino', '123 Main Street');

INSERT INTO Constructoras (nombre, direccion) 
VALUES 
('Marval', 'Tv. 72 #35-198, Bucaramanga'),
('Incomesa', 'PARADOR ALTAMIRA, Piedecuesta Los Santos')
;

INSERT INTO Empleados (id_persona, usuario, password, id_constructora) VALUES (1, 'Admin', '123', 1);