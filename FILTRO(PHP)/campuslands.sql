-- phpMyAdmin SQL Dump
-- version 5.1.1deb5ubuntu1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jun 28, 2023 at 10:47 AM
-- Server version: 8.0.33-0ubuntu0.22.04.2
-- PHP Version: 8.1.2-1ubuntu2.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `campuslands`
--

-- --------------------------------------------------------

--
-- Table structure for table `campers`
--

CREATE TABLE `campers` (
  `idCamper` varchar(20) NOT NULL,
  `nombreCamper` varchar(50) NOT NULL,
  `apellidoCamper` varchar(50) NOT NULL,
  `fechaNac` date NOT NULL,
  `idReg` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `campers`
--

INSERT INTO `campers` (`idCamper`, `nombreCamper`, `apellidoCamper`, `fechaNac`, `idReg`) VALUES
('testtesttesttesttest', 'Nicolas', 'Ordoñez', '2023-06-01', 2);

-- --------------------------------------------------------

--
-- Table structure for table `departamento`
--

CREATE TABLE `departamento` (
  `idDep` int NOT NULL,
  `nombreDep` varchar(50) NOT NULL,
  `idPais` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `departamento`
--

INSERT INTO `departamento` (`idDep`, `nombreDep`, `idPais`) VALUES
(1, 'Santander', 1),
(2, 'Giron', 1),
(5, 'OHIO', 2);

-- --------------------------------------------------------

--
-- Table structure for table `pais`
--

CREATE TABLE `pais` (
  `idPais` int NOT NULL,
  `nombrePais` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `pais`
--

INSERT INTO `pais` (`idPais`, `nombrePais`) VALUES
(1, 'Colombia'),
(2, 'USA'),
(3, 'mexico');

-- --------------------------------------------------------

--
-- Table structure for table `region`
--

CREATE TABLE `region` (
  `idReg` int NOT NULL,
  `nombreReg` varchar(50) NOT NULL,
  `idDep` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `region`
--

INSERT INTO `region` (`idReg`, `nombreReg`, `idDep`) VALUES
(1, 'Bucaramanga', 1),
(2, 'Canelles', 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `campers`
--
ALTER TABLE `campers`
  ADD PRIMARY KEY (`idCamper`),
  ADD KEY `idReg` (`idReg`);

--
-- Indexes for table `departamento`
--
ALTER TABLE `departamento`
  ADD PRIMARY KEY (`idDep`),
  ADD KEY `idPais` (`idPais`);

--
-- Indexes for table `pais`
--
ALTER TABLE `pais`
  ADD PRIMARY KEY (`idPais`);

--
-- Indexes for table `region`
--
ALTER TABLE `region`
  ADD PRIMARY KEY (`idReg`),
  ADD KEY `idDep` (`idDep`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `departamento`
--
ALTER TABLE `departamento`
  MODIFY `idDep` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `pais`
--
ALTER TABLE `pais`
  MODIFY `idPais` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `region`
--
ALTER TABLE `region`
  MODIFY `idReg` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `campers`
--
ALTER TABLE `campers`
  ADD CONSTRAINT `campers_ibfk_1` FOREIGN KEY (`idReg`) REFERENCES `region` (`idReg`);

--
-- Constraints for table `departamento`
--
ALTER TABLE `departamento`
  ADD CONSTRAINT `departamento_ibfk_1` FOREIGN KEY (`idPais`) REFERENCES `pais` (`idPais`);

--
-- Constraints for table `region`
--
ALTER TABLE `region`
  ADD CONSTRAINT `region_ibfk_1` FOREIGN KEY (`idDep`) REFERENCES `departamento` (`idDep`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
