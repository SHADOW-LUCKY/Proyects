-- Active: 1685022736773@@127.0.0.1@3306

CREATE DATABASE supermarket;

CREATE TABLE
    categorias(
        categoria_ID INT PRIMARY KEY AUTO_INCREMENT,
        categoria_nombre VARCHAR(50) NOT NULL,
        categoria_descripcion VARCHAR(255) NOT NULL,
        categoria_imagen VARCHAR(500) NOT NULL,
    );

CREATE TABLE
    clientes(
        cliente_ID INT PRIMARY KEY AUTO_INCREMENT,
        cliente_celular VARCHAR(50) NOT NULL,
        cliente_company VARCHAR(60) NOT NULL
    );

CREATE TABLE
    empleados(
        empleado_ID INT PRIMARY KEY AUTO_INCREMENT,
        empleado_nombre VARCHAR(60) NOT NULL,
        empleado_celular VARCHAR(50) NOT NULL,
        empleado_direccion VARCHAR(100) NOT NULL,
        empleado_imagen VARCHAR(500) NOT NULL,
    );

CREATE TABLE
    proveedores(
        proveedor_ID INT PRIMARY KEY AUTO_INCREMENT,
        proveedor_nombre VARCHAR(60) NOT NULL,
        proveedor_telefono VARCHAR(50) NOT NULL,
        proveedor_ciudad VARCHAR(60) NOT NULL
    );

CREATE TABLE
    productos(
        producto_ID INT PRIMARY KEY AUTO_INCREMENT,
        categoria_elec VARCHAR(60) NOT NULL,
        precioUnit FLOAT NOT NULL,
        stock INT NOT NULL,
        unidades_pedidas INT NOT NULL,
        nombre_producto VARCHAR(70) NOT NULL,
        descontinuado VARCHAR(2) NOT NULL,
        Foreign Key (categoria_elec) REFERENCES categorias(categoria_nombre)
    );

CREATE TABLE
    facturaDetalle(
        detalle_ID INT PRIMARY KEY AUTO_INCREMENT,
        Foreign Key (factura_ID) REFERENCES facturas(factura_ID),
        Foreign Key () REFERENCES (),
        cantidad INT NOT NULL,
        precio FLOAT NOT NULL,
    );

CREATE TABLE
    facturas(
        factura_ID INT PRIMARY KEY AUTO_INCREMENT,
        fecha_id VARCHAR(50) NOT NULL
);