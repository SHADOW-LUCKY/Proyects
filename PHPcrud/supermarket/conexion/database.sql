

CREATE DATABASE supermarket;
USE supermarket;
CREATE TABLE categorias(
        categoria_ID INT PRIMARY KEY AUTO_INCREMENT,
        categoria_nombre VARCHAR(50) NOT NULL,
        categoria_descripcion VARCHAR(255) NOT NULL,
        categoria_imagen VARCHAR(500) NOT NULL
    );

CREATE TABLE clientes(
        cliente_ID INT PRIMARY KEY AUTO_INCREMENT,
        cliente_celular VARCHAR(50) NOT NULL,
        cliente_company VARCHAR(60) NOT NULL
    );

CREATE TABLE empleados(
        empleado_ID INT PRIMARY KEY AUTO_INCREMENT,
        empleado_nombre VARCHAR(60) NOT NULL,
        empleado_celular VARCHAR(50) NOT NULL,
        empleado_direccion VARCHAR(100) NOT NULL,
        empleado_imagen VARCHAR(500) NOT NULL
    );

CREATE TABLE proveedores(
        proveedor_ID INT PRIMARY KEY AUTO_INCREMENT,
        proveedor_nombre VARCHAR(60) NOT NULL,
        proveedor_telefono VARCHAR(50) NOT NULL,
        proveedor_ciudad VARCHAR(60) NOT NULL
    );

CREATE TABLE productos(
        producto_ID INT PRIMARY KEY AUTO_INCREMENT,
        categoria_ID INT NOT NULL,
        proveedor_ID INT NOT NULL,
        precioUnit FLOAT NOT NULL,
        stock INT NOT NULL,
        unidades_pedidas INT NOT NULL,
        nombre_producto VARCHAR(70) NOT NULL,
        descontinuado VARCHAR(2) NOT NULL,
        FOREIGN KEY (categoria_ID) REFERENCES categorias(categoria_ID),
        FOREIGN KEY (proveedor_ID) REFERENCES proveedores(proveedor_ID)
    );

CREATE TABLE facturaDetalle(
        detalle_ID INT PRIMARY KEY AUTO_INCREMENT,
        factura_ID INT NOT NULL,
        producto_vendido VARCHAR(60) NOT NULL,
        cantidad INT NOT NULL,
        precio FLOAT NOT NULL,
        Foreign Key (factura_ID) REFERENCES facturas(factura_ID)
    );

CREATE TABLE facturas(
        factura_ID INT PRIMARY KEY AUTO_INCREMENT,
        empleado_ID INT NOT NULL,
        cliente_ID INT NOT NULL,
        fecha VARCHAR(50) NOT NULL,
        Foreign Key (empleado_ID) REFERENCES empleados(empleado_ID),
        Foreign Key (cliente_ID) REFERENCES clientes(cliente_ID)
    );

DROP DATABASE supermarket;
