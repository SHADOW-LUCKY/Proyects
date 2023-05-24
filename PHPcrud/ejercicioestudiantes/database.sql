/* crear base de datos */
CREATE DATABASE campusV
/* crear la tabla */
CREATE TABLE campers2(
    id INT primary key AUTO_INCREMENT,
    nombres VARCHAR(50) NOT NULL,
    direccion VARCHAR(50) NOT NULL,
    logros VARCHAR(60),
    especialidad VARCHAR(50) NOT NULL,
    notaIngles FLOAT(4) NOT NULL,
    notSer FLOAT(4) NOT NULL,
    notaSkills FLOAT(4) NOT NULL,
    notaReview FLOAT(4) NOT NULL
);