-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 01-04-2024 a las 05:37:35
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `miproyecto`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `idclientes` int(11) NOT NULL,
  `estatus` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`idclientes`, `estatus`) VALUES
(1, 1),
(2, 0),
(3, 1),
(4, 1),
(5, 0),
(6, 0),
(7, 1),
(8, 1),
(9, 1),
(10, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cobros`
--

CREATE TABLE `cobros` (
  `idcobros` int(11) NOT NULL,
  `tipo_moneda` varchar(45) DEFAULT NULL,
  `monto` float DEFAULT NULL,
  `Ref_Pago` varchar(45) DEFAULT NULL,
  `autoRef_Pago` varchar(45) NOT NULL,
  `ventas_boletos_idventas_boletos` int(11) NOT NULL,
  `tipos_cobros_idtipos_cobros` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `cobros`
--

INSERT INTO `cobros` (`idcobros`, `tipo_moneda`, `monto`, `Ref_Pago`, `autoRef_Pago`, `ventas_boletos_idventas_boletos`, `tipos_cobros_idtipos_cobros`) VALUES
(1, 'Divisa', NULL, NULL, '', 0, 0),
(5, 'undefined', NULL, NULL, '', 0, 0),
(6, 'undefined', NULL, NULL, '', 0, 0),
(7, 'undefined', NULL, NULL, '', 0, 0),
(8, 'Bolivares', NULL, NULL, '', 0, 0),
(9, 'undefined', NULL, NULL, '', 0, 0),
(10, 'undefined', NULL, NULL, '', 0, 0),
(11, 'undefined', NULL, NULL, '', 0, 0),
(12, 'undefined', NULL, NULL, '', 0, 0),
(13, 'undefined', NULL, NULL, '', 0, 0),
(14, 'undefined', NULL, NULL, '', 0, 0),
(15, 'Divisa', NULL, NULL, '', 0, 0),
(16, 'Bolivares', NULL, NULL, '', 0, 0),
(17, 'undefined', NULL, NULL, '', 0, 0),
(18, 'Bolivares', NULL, NULL, '', 0, 0),
(19, 'undefined', NULL, NULL, '', 0, 0),
(20, 'undefined', NULL, NULL, '', 0, 0),
(21, 'undefined', NULL, NULL, '', 0, 0),
(22, '$', 0, 'undefined', 'undefined', 0, 0),
(23, '$', 40, 'undefined', 'undefined', 0, 0),
(24, '$', 40, 'undefined', 'undefined', 0, 0),
(25, '$', 0, 'undefined', 'undefined', 0, 0),
(26, '€', 80, 'undefined', 'undefined', 0, 0),
(27, '€', 0, 'undefined', 'undefined', 0, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `devoluciones _x_ventas`
--

CREATE TABLE `devoluciones _x_ventas` (
  `iddevoluciones _x_ventas` int(11) NOT NULL,
  `devoluciones_iddevoluciones` int(11) NOT NULL,
  `ventas_boleto_idventas_boletos` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleados`
--

CREATE TABLE `empleados` (
  `idempleados` int(11) NOT NULL,
  `cargo` varchar(45) NOT NULL,
  `estatus` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `empleados`
--

INSERT INTO `empleados` (`idempleados`, `cargo`, `estatus`) VALUES
(1, 'vendedora', 0),
(2, 'vendedora', 1),
(3, 'PUBLICISTA', 1),
(4, 'Marketing', 0),
(5, 'marketing', 1),
(6, 'administradora', 0),
(7, 'vendedora', 1),
(8, 'vendedora', 0),
(9, 'vendedora', 0),
(10, 'vendedora', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `paquetes_turisticos`
--

CREATE TABLE `paquetes_turisticos` (
  `idpt` int(11) NOT NULL,
  `nombre_pt` varchar(100) NOT NULL,
  `destino` varchar(100) NOT NULL,
  `duracion` varchar(45) NOT NULL,
  `fecha_inicio` datetime NOT NULL,
  `fecha_fin` datetime NOT NULL,
  `montopt` decimal(10,0) NOT NULL,
  `tipo_moneda` varchar(20) DEFAULT NULL,
  `cant_max_puesto` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `paquetes_turisticos`
--

INSERT INTO `paquetes_turisticos` (`idpt`, `nombre_pt`, `destino`, `duracion`, `fecha_inicio`, `fecha_fin`, `montopt`, `tipo_moneda`, `cant_max_puesto`) VALUES
(1, 'cayo sal', 'morrocoy', '2 dias', '2024-03-08 00:20:11', '2024-03-10 00:20:11', 10, '$', 10),
(2, 'cayo sombrero', 'morrocoy', '2 dias', '2024-03-08 00:20:11', '2024-03-10 00:20:11', 10, '$', 10),
(3, 'Medanos de coro', 'Falcon', '2 dias', '2024-03-08 00:20:11', '2024-03-10 00:20:11', 10, '$', 10),
(4, 'cayo azul', 'morrocoy', '1 dia', '2024-04-01 23:17:33', '2024-04-02 23:17:33', 40, '$', 10),
(5, 'pico bolivar', 'merida', '1 dia', '2024-04-01 23:19:28', '2024-04-02 23:19:28', 80, '$', 10),
(6, 'cayo varadero', 'morrocoy', '1 dia', '2024-04-01 23:19:57', '2024-04-02 23:19:57', 15, '$', 10),
(7, 'caracas', 'caracas', '1 dia', '2024-04-01 23:20:27', '2024-04-01 23:20:27', 5, '$', 10),
(8, 'cueva del guacharo', 'muy lejano', '1 dia', '2024-04-02 23:21:01', '2024-04-03 23:21:01', 50, '$', 10),
(9, 'isla la tortuga', 'algun lugar', '1 dia', '2024-04-01 23:21:32', '2024-04-02 23:21:32', 12, '$', 10),
(10, 'mi corazon', 'geraldine', '1 dia', '2024-04-01 23:22:11', '2024-04-02 23:22:11', 0, '$', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `permisos_viaje`
--

CREATE TABLE `permisos_viaje` (
  `idpermisos_viaje` int(11) NOT NULL,
  `permiso_viaje` longblob DEFAULT NULL,
  `personas_idpersonas` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personas`
--

CREATE TABLE `personas` (
  `idpersonas` int(11) NOT NULL,
  `tipo_de_persona` text NOT NULL,
  `menor_edad` tinyint(4) DEFAULT NULL,
  `rol` varchar(45) NOT NULL,
  `nombres` varchar(100) NOT NULL,
  `apellidos` varchar(100) NOT NULL,
  `cedula` int(11) NOT NULL,
  `telefono` varchar(15) NOT NULL,
  `correo` varchar(100) NOT NULL,
  `direccion` varchar(300) NOT NULL,
  `fecha_nac` date NOT NULL,
  `clientes_idclientes` int(11) NOT NULL,
  `empleados_idempleados` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `personas`
--

INSERT INTO `personas` (`idpersonas`, `tipo_de_persona`, `menor_edad`, `rol`, `nombres`, `apellidos`, `cedula`, `telefono`, `correo`, `direccion`, `fecha_nac`, `clientes_idclientes`, `empleados_idempleados`) VALUES
(1, 'V-', NULL, 'empleado', 'Hello Kitty', 'Kitty', 27793495, '+584242510324', 'hellokitty@gmail.com', 'hellok@gmail.com', '2001-01-28', 0, 1),
(2, 'E-', NULL, 'empleado', 'Kuromi', 'solo', 27793496, '+584242510323', 'kuromi@gmail.com', 'en tu casa', '0000-00-00', 0, 2),
(3, 'J-', NULL, 'cliente', 'Spiderman', 'Parker', 27793497, '+584242510325', 'spidy@gmail.com', 'en mi corazon', '2001-01-27', 1, 0),
(4, 'V-', NULL, 'cliente', 'Geraldine', 'Rizo', 27793498, '+584242510323', 'helo@gmail.com', 'catia', '2001-01-28', 2, 0),
(6, 'E-', NULL, 'cliente', 'HOLA', 'MUNDO', 27793499, '+584242510323 ', 'holaa@gmail.com', 'blabla', '2001-05-20', 3, 0),
(7, 'V-', NULL, 'empleado', 'Laptop', 'hola', 28893495, '+584242510324', 'geral@gmail.com', 'huij', '2024-03-01', 0, 3),
(8, 'V-', NULL, 'empleado', 'KSM', 'MK', 28793496, '+584242510323', 'NOCORRE@GMAIL.COM', 'JIJO', '2000-01-28', 0, 4),
(9, 'Venezolana', 0, 'cliente', 'Guaci', 'Co', 1458978, '+584242510323', 'huihj@gmail.com', 'por alli', '2001-05-15', 0, 9),
(11, 'Venezolana', 0, 'cliente', 'Guacu', 'Co', 1459978, '+584242510323', 'huihj@gmail.com', 'por alli', '2001-05-15', 0, 10),
(12, 'Extranjero', 1, 'cliente', 'nino', 'lindo', 7793495, '+584242510324', 'ninguno@gmail.com', 'por alli', '2024-03-01', 12, 0),
(14, 'Extranjero', 1, 'cliente', 'nino', 'lindo', 7793475, '+584242510324', 'ninguno@gmail.com', 'por alli', '2024-03-01', 0, 12);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipos_cobros`
--

CREATE TABLE `tipos_cobros` (
  `idtipos_cobros` int(11) NOT NULL,
  `tipo_cobro` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `tipos_cobros`
--

INSERT INTO `tipos_cobros` (`idtipos_cobros`, `tipo_cobro`) VALUES
(1, 'debito'),
(2, 'credito'),
(3, 'pago movil'),
(4, 'efectivo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipos_devoluciones`
--

CREATE TABLE `tipos_devoluciones` (
  `idtipos_devoluciones` int(11) NOT NULL,
  `tipos_devoluciones` tinyint(4) NOT NULL,
  `fecha` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `tipos_devoluciones`
--

INSERT INTO `tipos_devoluciones` (`idtipos_devoluciones`, `tipos_devoluciones`, `fecha`) VALUES
(1, 1, '2024-03-01'),
(2, 0, '2024-03-01'),
(3, 0, '2024-03-01'),
(4, 0, '2024-03-01');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ventas_boletos`
--

CREATE TABLE `ventas_boletos` (
  `idventas_boletos` int(11) NOT NULL,
  `cedula` int(11) NOT NULL,
  `tipo_persona` text NOT NULL,
  `tipo_transporte` varchar(45) DEFAULT NULL,
  `fecha_venta` date NOT NULL,
  `tipo_venta` varchar(65) NOT NULL,
  `numero_puesto` int(11) NOT NULL,
  `empleados_idempleados` int(11) NOT NULL,
  `empleados_personas_idpersonas` int(11) NOT NULL,
  `paquetes_turisticos_idpaquete_turistico` int(11) NOT NULL,
  `permisos_viaje_idpermisos_viaje` int(11) NOT NULL,
  `clientes_idclientes` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `ventas_boletos`
--

INSERT INTO `ventas_boletos` (`idventas_boletos`, `cedula`, `tipo_persona`, `tipo_transporte`, `fecha_venta`, `tipo_venta`, `numero_puesto`, `empleados_idempleados`, `empleados_personas_idpersonas`, `paquetes_turisticos_idpaquete_turistico`, `permisos_viaje_idpermisos_viaje`, `clientes_idclientes`) VALUES
(1, 0, 'undefined', NULL, '0000-00-00', '', 0, 0, 0, 0, 0, 0);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`idclientes`);

--
-- Indices de la tabla `cobros`
--
ALTER TABLE `cobros`
  ADD PRIMARY KEY (`idcobros`);

--
-- Indices de la tabla `devoluciones _x_ventas`
--
ALTER TABLE `devoluciones _x_ventas`
  ADD PRIMARY KEY (`iddevoluciones _x_ventas`);

--
-- Indices de la tabla `empleados`
--
ALTER TABLE `empleados`
  ADD PRIMARY KEY (`idempleados`);

--
-- Indices de la tabla `paquetes_turisticos`
--
ALTER TABLE `paquetes_turisticos`
  ADD PRIMARY KEY (`idpt`);

--
-- Indices de la tabla `permisos_viaje`
--
ALTER TABLE `permisos_viaje`
  ADD PRIMARY KEY (`idpermisos_viaje`),
  ADD KEY `personas_idpersonas` (`personas_idpersonas`);

--
-- Indices de la tabla `personas`
--
ALTER TABLE `personas`
  ADD PRIMARY KEY (`idpersonas`),
  ADD UNIQUE KEY `cedula_UNIQUE` (`cedula`);

--
-- Indices de la tabla `tipos_cobros`
--
ALTER TABLE `tipos_cobros`
  ADD PRIMARY KEY (`idtipos_cobros`);

--
-- Indices de la tabla `tipos_devoluciones`
--
ALTER TABLE `tipos_devoluciones`
  ADD PRIMARY KEY (`idtipos_devoluciones`);

--
-- Indices de la tabla `ventas_boletos`
--
ALTER TABLE `ventas_boletos`
  ADD PRIMARY KEY (`idventas_boletos`),
  ADD UNIQUE KEY `cedula_UNIQUE` (`cedula`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `clientes`
--
ALTER TABLE `clientes`
  MODIFY `idclientes` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `cobros`
--
ALTER TABLE `cobros`
  MODIFY `idcobros` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT de la tabla `devoluciones _x_ventas`
--
ALTER TABLE `devoluciones _x_ventas`
  MODIFY `iddevoluciones _x_ventas` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `empleados`
--
ALTER TABLE `empleados`
  MODIFY `idempleados` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `paquetes_turisticos`
--
ALTER TABLE `paquetes_turisticos`
  MODIFY `idpt` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `permisos_viaje`
--
ALTER TABLE `permisos_viaje`
  MODIFY `idpermisos_viaje` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `personas`
--
ALTER TABLE `personas`
  MODIFY `idpersonas` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `tipos_cobros`
--
ALTER TABLE `tipos_cobros`
  MODIFY `idtipos_cobros` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `tipos_devoluciones`
--
ALTER TABLE `tipos_devoluciones`
  MODIFY `idtipos_devoluciones` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `ventas_boletos`
--
ALTER TABLE `ventas_boletos`
  MODIFY `idventas_boletos` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `permisos_viaje`
--
ALTER TABLE `permisos_viaje`
  ADD CONSTRAINT `permisos_viaje_ibfk_1` FOREIGN KEY (`personas_idpersonas`) REFERENCES `personas` (`idpersonas`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
