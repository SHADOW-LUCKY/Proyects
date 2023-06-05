-- phpMyAdmin SQL Dump
-- version 5.1.1deb5ubuntu1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 02-06-2023 a las 13:51:08
-- Versión del servidor: 8.0.33-0ubuntu0.22.04.2
-- Versión de PHP: 8.1.2-1ubuntu2.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `supermarket`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `categoria_ID` int NOT NULL,
  `categoria_nombre` varchar(50) NOT NULL,
  `categoria_descripcion` varchar(255) NOT NULL,
  `categoria_imagen` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `categorias` (`categoria_ID`, `categoria_nombre`, `categoria_descripcion`, `categoria_imagen`) VALUES
(1, 'Videojuegos', 'Videojuegos', 'https://cdn-icons-png.flaticon.com/512/2737/2737379.png'),
(2, 'Herramientas', 'Herramientas', 'https://cdn.icon-icons.com/icons2/827/PNG/512/tools_icon-icons.com_66544.png');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `cliente_ID` int NOT NULL,
  `cliente_celular` varchar(50) NOT NULL,
  `cliente_company` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`cliente_ID`, `cliente_celular`, `cliente_company`) VALUES
(1, '4487787898', 'Game Freak'),
(2, '87845456546', 'Square Cnix');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleados`
--

CREATE TABLE `empleados` (
  `empleado_ID` int NOT NULL,
  `empleado_nombre` varchar(60) NOT NULL,
  `empleado_celular` varchar(50) NOT NULL,
  `empleado_direccion` varchar(100) NOT NULL,
  `empleado_imagen` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `empleados`
--

INSERT INTO `empleados` (`empleado_ID`, `empleado_nombre`, `empleado_celular`, `empleado_direccion`, `empleado_imagen`) VALUES
(1, 'nico', '45444545465', 'calle 15', 'https://cdn.icon-icons.com/icons2/931/PNG/512/settings_icon-icons.com_72415.png'),
(2, 'jairo montana', '5461987456', 'calle 14', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoVZitm1SXNKeOi83y0Y1X6K4dBSSaJ5zqAQ&usqp=CAU');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `facturaDetalle`
--

CREATE TABLE `facturaDetalle` (
  `detalle_ID` int NOT NULL,
  `factura_ID` int NOT NULL,
  `producto_vendido` varchar(60) NOT NULL,
  `cantidad` int NOT NULL,
  `precio` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `facturaDetalle`
--

INSERT INTO `facturaDetalle` (`detalle_ID`, `factura_ID`, `producto_vendido`, `cantidad`, `precio`) VALUES
(4, 4, 'nunchakus', 12, 40000),
(5, 5, 'Martillo', 30, 50000);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `facturas`
--

CREATE TABLE `facturas` (
  `factura_ID` int NOT NULL,
  `empleado_ID` int NOT NULL,
  `cliente_ID` int NOT NULL,
  `fecha` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `facturas`
--

INSERT INTO `facturas` (`factura_ID`, `empleado_ID`, `cliente_ID`, `fecha`) VALUES
(4, 1, 2, '2023-05-11'),
(5, 2, 1, '2023-02-19');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `producto_ID` int NOT NULL,
  `categoria_ID` int NOT NULL,
  `proveedor_ID` int NOT NULL,
  `precioUnit` float NOT NULL,
  `stock` int NOT NULL,
  `unidades_pedidas` int NOT NULL,
  `nombre_producto` varchar(70) NOT NULL,
  `descontinuado` varchar(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`producto_ID`, `categoria_ID`, `proveedor_ID`, `precioUnit`, `stock`, `unidades_pedidas`, `nombre_producto`, `descontinuado`) VALUES
(1, 2, 2, 5000, 50, 2000, 'Martillo', 'no'),
(2, 1, 1, 40000, 2, 15, 'nunchakus', 'no');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proveedores`
--

CREATE TABLE `proveedores` (
  `proveedor_ID` int NOT NULL,
  `proveedor_nombre` varchar(60) NOT NULL,
  `proveedor_telefono` varchar(50) NOT NULL,
  `proveedor_ciudad` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `proveedores`
--

INSERT INTO `proveedores` (`proveedor_ID`, `proveedor_nombre`, `proveedor_telefono`, `proveedor_ciudad`) VALUES
(1, 'lock', '6545463214', 'Bogota'),
(2, 'andres', '6848549', 'Bucaramanga');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `user_ID` int NOT NULL,
  `user_nombre` varchar(50) NOT NULL,
  `user_email` varchar(50) NOT NULL,
  `user_password` varchar(50) NOT NULL,
  `user_empleado` int NOT NULL,
  `user_role` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`user_ID`, `user_nombre`, `user_email`, `user_password`, `user_empleado`, `user_role`) VALUES
(1, 'one ', 'alo@gmail.com', '202cb962ac59075b964b07152d234b70', 2, 237455),
(2, 'nock', 'one@gmail.com', '99c5e07b4d5de9d18c350cdf64c5aa3d', 1, 436777);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`categoria_ID`);

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`cliente_ID`);

--
-- Indices de la tabla `empleados`
--
ALTER TABLE `empleados`
  ADD PRIMARY KEY (`empleado_ID`);

--
-- Indices de la tabla `facturaDetalle`
--
ALTER TABLE `facturaDetalle`
  ADD PRIMARY KEY (`detalle_ID`),
  ADD KEY `factura_ID` (`factura_ID`);

--
-- Indices de la tabla `facturas`
--
ALTER TABLE `facturas`
  ADD PRIMARY KEY (`factura_ID`),
  ADD KEY `empleado_ID` (`empleado_ID`),
  ADD KEY `cliente_ID` (`cliente_ID`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`producto_ID`),
  ADD KEY `categoria_ID` (`categoria_ID`),
  ADD KEY `proveedor_ID` (`proveedor_ID`);

--
-- Indices de la tabla `proveedores`
--
ALTER TABLE `proveedores`
  ADD PRIMARY KEY (`proveedor_ID`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_ID`),
  ADD KEY `user_empleado` (`user_empleado`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categorias`
--
ALTER TABLE `categorias`
  MODIFY `categoria_ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `clientes`
--
ALTER TABLE `clientes`
  MODIFY `cliente_ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `empleados`
--
ALTER TABLE `empleados`
  MODIFY `empleado_ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `facturaDetalle`
--
ALTER TABLE `facturaDetalle`
  MODIFY `detalle_ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `facturas`
--
ALTER TABLE `facturas`
  MODIFY `factura_ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `producto_ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `proveedores`
--
ALTER TABLE `proveedores`
  MODIFY `proveedor_ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `user_ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `facturaDetalle`
--
ALTER TABLE `facturaDetalle`
  ADD CONSTRAINT `facturaDetalle_ibfk_1` FOREIGN KEY (`factura_ID`) REFERENCES `facturas` (`factura_ID`);

--
-- Filtros para la tabla `facturas`
--
ALTER TABLE `facturas`
  ADD CONSTRAINT `facturas_ibfk_1` FOREIGN KEY (`empleado_ID`) REFERENCES `empleados` (`empleado_ID`),
  ADD CONSTRAINT `facturas_ibfk_2` FOREIGN KEY (`cliente_ID`) REFERENCES `clientes` (`cliente_ID`);

--
-- Filtros para la tabla `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `productos_ibfk_1` FOREIGN KEY (`categoria_ID`) REFERENCES `categorias` (`categoria_ID`),
  ADD CONSTRAINT `productos_ibfk_2` FOREIGN KEY (`proveedor_ID`) REFERENCES `proveedores` (`proveedor_ID`);

--
-- Filtros para la tabla `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`user_empleado`) REFERENCES `empleados` (`empleado_ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
