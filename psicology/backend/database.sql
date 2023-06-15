CREATE DATABASE PSYCHOLOGY;

USE PSYCHOLOGY;

CREATE TABLE
    Pacientes(
        PacienteID PRIMARY KEY INT NOT NULL AUTO_INCREMENT,
        Edad INT NOT NULL,
        Direccion VARCHAR(100) NOT NULL,
        Proyeccion_laboral VARCHAR(500) NOT NULL,
        Estado_civil VARCHAR(100) NOT NULL,
        Hobbys VARCHAR(100) NOT NULL,
        GrupoID INT NOT NULL,
        PersonaID INT NOT NULL,
        HistorialID INT NOT NULL,
        FOREIGN KEY (GrupoID) REFERENCES Grupos(GrupoID),
        FOREIGN KEY (PersonaID) REFERENCES Personas(PersonaID),
        FOREIGN KEY (HistorialID) REFERENCES Historial(HistorialID)
    );

CREATE TABLE
    Personas(
        PersonaID PRIMARY KEY INT NOT NULL AUTO_INCREMENT,
        Nombre VARCHAR(100) NOT NULL,
        Telefono VARCHAR(100) NOT NULL,
        Email VARCHAR(100) NOT NULL,
        Foto VARCHAR(500) NOT NULL,
        Documento VARCHAR(100) NOT NULL,
        Tipo_Doc VARCHAR(100) NOT NULL,
        Tipo_persona VARCHAR(100) NOT NULL,
    );

CREATE TABLE
    Familiar(
        FamiliarID PRIMARY KEY INT NOT NULL AUTO_INCREMENT,
        Cargo_Actual VARCHAR(100) NOT NULL,
        PersonaID INT NOT NULL,
        FOREIGN KEY (PersonaID) REFERENCES Personas(PersonaID)
    );

CREATE TABLE
    Familiar_Paciente(
        FamiliarID INT NOT NULL,
        PacienteID INT NOT NULL,
        FOREIGN KEY (FamiliarID) REFERENCES Familiar(FamiliarID),
        FOREIGN KEY (PacienteID) REFERENCES Pacientes(PacienteID)
    );

CREATE TABLE
    Grupo(
        GrupoID PRIMARY KEY INT NOT NULL AUTO_INCREMENT,
        Codigo_Grupo VARCHAR(20) NOT NULL,
        Hora_inicio TIME NOT NULL,
        Hora_fin TIME NOT NULL,
    );

CREATE TABLE
    Psicologo(
        PsicologoID PRIMARY KEY INT NOT NULL AUTO_INCREMENT,
        especialidad VARCHAR(100) NOT NULL,
        PersonaID INT NOT NULL,
        FOREIGN KEY (PersonaID) REFERENCES Personas(PersonaID)
    );

CREATE TABLE
    Entrevista(
        EntrevistaID PRIMARY KEY INT NOT NULL AUTO_INCREMENT,
        Fecha DATE NOT NULL,
        Hora TIME NOT NULL,
        Duracion TIME NOT NULL,
        PacienteID INT NOT NULL,
        PsicologoID INT NOT NULL,
        FOREIGN KEY (PacienteID) REFERENCES Pacientes(PacienteID),
        FOREIGN KEY (PsicologoID) REFERENCES Psicologo(PsicologoID)
    );

CREATE TABLE 