/* crear base de datos */
CREATE DATABASE campus
/* crear la tabla */
CREATE TABLE campers(
    id INT primary key AUTO_INCREMENT,
    nombres VARCHAR(50) NOT NULL,
    direcion VARCHAR(50) NOT NULL,
    logros VARCHAR(60),
    ingles INT(30),
    ser INT(30),
    skills INT(30),
    review INT(30)
);