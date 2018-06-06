-- CREATE DATABASE glpk;
-- CREATE USER glpk@localhost IDENTIFIED 'gnu';
-- GRANT ALL PRIVILEGES ON glpk.* TO glpk@localhost;
USE glpkdb;

# Lecturers table

-- DROP TABLE Lecturers;
/*CREATE TABLE IF NOT EXISTS Lecturers (
	idLecturer int NOT NULL AUTO_INCREMENT, 
	Name text (127),
	PRIMARY KEY ( idLecturer )
);*/
INSERT INTO Lecturers (idLecturer, Name) VALUES ( 1, 'John' );
INSERT INTO Lecturers (idLecturer, Name) VALUES ( 2, 'David' );
INSERT INTO Lecturers (idLecturer, Name) VALUES ( 3, 'Robert' );
INSERT INTO Lecturers (idLecturer, Name) VALUES ( 4, 'Maria' );
INSERT INTO Lecturers (idLecturer, Name) VALUES ( 5, 'Thomas' );
INSERT INTO Lecturers (idLecturer, Name) VALUES ( 6, 'Ana' );
/*INSERT INTO Lecturers (idLecturer, Name) VALUES ( 7, 'Victoria' );
INSERT INTO Lecturers (idLecturer, Name) VALUES ( 8, 'Elizabeth' );
INSERT INTO Lecturers (idLecturer, Name) VALUES ( 9, 'Peter' );
INSERT INTO Lecturers (idLecturer, Name) VALUES ( 10, 'Carlos' );
INSERT INTO Lecturers (idLecturer, Name) VALUES ( 11, 'Jaime' );
INSERT INTO Lecturers (idLecturer, Name) VALUES ( 12, 'Alexander' );
INSERT INTO Lecturers (idLecturer, Name) VALUES ( 13, 'Paula' );
INSERT INTO Lecturers (idLecturer, Name) VALUES ( 14, 'Isabel' );
INSERT INTO Lecturers (idLecturer, Name) VALUES ( 15, 'Jose' );*/

# Rooms table 

-- DROP TABLE Rooms;
/*CREATE TABLE IF NOT EXISTS Rooms (
	idRoom int NOT NULL AUTO_INCREMENT, 
	Name text (127),
	Capacity int (100),
	PRIMARY KEY ( idRoom )
);*/
INSERT INTO Rooms (idRoom, Name, Capacity) VALUES ( 1, 'R001', 80 );
INSERT INTO Rooms (idRoom, Name, Capacity) VALUES ( 2, 'R002', 60 );
INSERT INTO Rooms (idRoom, Name, Capacity) VALUES ( 3, 'R003', 90 );
INSERT INTO Rooms (idRoom, Name, Capacity) VALUES ( 4, 'R004', 100 );
INSERT INTO Rooms (idRoom, Name, Capacity) VALUES ( 5, 'R005', 120 );
INSERT INTO Rooms (idRoom, Name, Capacity) VALUES ( 6, 'R006', 90 );
INSERT INTO Rooms (idRoom, Name, Capacity) VALUES ( 7, 'R007', 50 );
INSERT INTO Rooms (idRoom, Name, Capacity) VALUES ( 8, 'R008', 60 );
/*INSERT INTO Rooms (idRoom, Name, Capacity) VALUES ( 9, 'R009', 150 );
INSERT INTO Rooms (idRoom, Name, Capacity) VALUES ( 10, 'R0010', 120 );
INSERT INTO Rooms (idRoom, Name, Capacity) VALUES ( 11, 'R0011', 70 );
INSERT INTO Rooms (idRoom, Name, Capacity) VALUES ( 12, 'R0012', 90 );
INSERT INTO Rooms (idRoom, Name, Capacity) VALUES ( 13, 'R0013', 80 );
INSERT INTO Rooms (idRoom, Name, Capacity) VALUES ( 14, 'R0014', 60 );*/

# Classes table

-- DROP TABLE Classes;
/*CREATE TABLE IF NOT EXISTS Classes (
	idClass int NOT NULL AUTO_INCREMENT, 
	Name text (127),
	Credit int (60),
	Demand int (100),
	PRIMARY KEY ( idClass )
);*/
INSERT INTO Classes (idClass, Name, Credit, Demand) VALUES ( 1, 'MAT001', 2, 60 );
INSERT INTO Classes (idClass, Name, Credit, Demand) VALUES ( 2, 'MAT002', 1, 50 );
INSERT INTO Classes (idClass, Name, Credit, Demand) VALUES ( 3, 'MAT003', 2, 70 );
INSERT INTO Classes (idClass, Name, Credit, Demand) VALUES ( 4, 'INT001', 2, 60 );
INSERT INTO Classes (idClass, Name, Credit, Demand) VALUES ( 5, 'INT002', 3, 90 );
INSERT INTO Classes (idClass, Name, Credit, Demand) VALUES ( 6, 'INT003', 1, 100 );
INSERT INTO Classes (idClass, Name, Credit, Demand) VALUES ( 7, 'ELT001', 2, 60 );
INSERT INTO Classes (idClass, Name, Credit, Demand) VALUES ( 8, 'ELT002', 3, 30 );
INSERT INTO Classes (idClass, Name, Credit, Demand) VALUES ( 9, 'ELT003', 1, 70 );
INSERT INTO Classes (idClass, Name, Credit, Demand) VALUES ( 10, 'PHY001', 4, 60 );
INSERT INTO Classes (idClass, Name, Credit, Demand) VALUES ( 11, 'PHY002', 5, 80 );
INSERT INTO Classes (idClass, Name, Credit, Demand) VALUES ( 12, 'PHY003', 2, 70 );
/*INSERT INTO Classes (idClass, Name, Credit, Demand) VALUES ( 13, 'FLF001', 2, 65 );
INSERT INTO Classes (idClass, Name, Credit, Demand) VALUES ( 14, 'FLF002', 1, 50 );
INSERT INTO Classes (idClass, Name, Credit, Demand) VALUES ( 15, 'FLF003', 2, 70 );
INSERT INTO Classes (idClass, Name, Credit, Demand) VALUES ( 16, 'EMA001', 4, 120 );
INSERT INTO Classes (idClass, Name, Credit, Demand) VALUES ( 17, 'EMA002', 1, 50 );
INSERT INTO Classes (idClass, Name, Credit, Demand) VALUES ( 18, 'EMA003', 3, 70 );
INSERT INTO Classes (idClass, Name, Credit, Demand) VALUES ( 19, 'EPN001', 2, 90 );
INSERT INTO Classes (idClass, Name, Credit, Demand) VALUES ( 20, 'EPN002', 1, 150 );
INSERT INTO Classes (idClass, Name, Credit, Demand) VALUES ( 21, 'EPN003', 2, 70 );*/

INSERT INTO Lecturer_Classes (idLecturer, idClass, Value) VALUES ( 1, 1, 1);
INSERT INTO Lecturer_Classes (idLecturer, idClass, Value) VALUES ( 1, 2, 1 );
INSERT INTO Lecturer_Classes (idLecturer, idClass, Value) VALUES ( 1, 3, 1 );
INSERT INTO Lecturer_Classes (idLecturer, idClass, Value) VALUES ( 1, 4, 0);
INSERT INTO Lecturer_Classes (idLecturer, idClass, Value) VALUES ( 1, 5, 0 );
INSERT INTO Lecturer_Classes (idLecturer, idClass, Value) VALUES ( 1, 6, 0 );
INSERT INTO Lecturer_Classes (idLecturer, idClass, Value) VALUES ( 1, 7, 1);
INSERT INTO Lecturer_Classes (idLecturer, idClass, Value) VALUES ( 1, 8, 1 );
INSERT INTO Lecturer_Classes (idLecturer, idClass, Value) VALUES ( 1, 9, 1 );
INSERT INTO Lecturer_Classes (idLecturer, idClass, Value) VALUES ( 1, 10, 1);
INSERT INTO Lecturer_Classes (idLecturer, idClass, Value) VALUES ( 1, 11, 1 );
INSERT INTO Lecturer_Classes (idLecturer, idClass, Value) VALUES ( 1, 12, 1 );

INSERT INTO Lecturer_Classes (idLecturer, idClass, Value) VALUES ( 2, 1, 0);
INSERT INTO Lecturer_Classes (idLecturer, idClass, Value) VALUES ( 2, 2, 1 );
INSERT INTO Lecturer_Classes (idLecturer, idClass, Value) VALUES ( 2, 3, 1 );
INSERT INTO Lecturer_Classes (idLecturer, idClass, Value) VALUES ( 2, 4, 1);
INSERT INTO Lecturer_Classes (idLecturer, idClass, Value) VALUES ( 2, 5, 1 );
INSERT INTO Lecturer_Classes (idLecturer, idClass, Value) VALUES ( 2, 6, 1 );
INSERT INTO Lecturer_Classes (idLecturer, idClass, Value) VALUES ( 2, 7, 1);
INSERT INTO Lecturer_Classes (idLecturer, idClass, Value) VALUES ( 2, 8, 1 );
INSERT INTO Lecturer_Classes (idLecturer, idClass, Value) VALUES ( 2, 9, 1 );
INSERT INTO Lecturer_Classes (idLecturer, idClass, Value) VALUES ( 2, 10, 1);
INSERT INTO Lecturer_Classes (idLecturer, idClass, Value) VALUES ( 2, 11, 1 );
INSERT INTO Lecturer_Classes (idLecturer, idClass, Value) VALUES ( 2, 12, 1 );

INSERT INTO Lecturer_Classes (idLecturer, idClass, Value) VALUES ( 3, 1, 1);
INSERT INTO Lecturer_Classes (idLecturer, idClass, Value) VALUES ( 3, 2, 1 );
INSERT INTO Lecturer_Classes (idLecturer, idClass, Value) VALUES ( 3, 3, 1 );
INSERT INTO Lecturer_Classes (idLecturer, idClass, Value) VALUES ( 3, 4, 1);
INSERT INTO Lecturer_Classes (idLecturer, idClass, Value) VALUES ( 3, 5, 1 );
INSERT INTO Lecturer_Classes (idLecturer, idClass, Value) VALUES ( 3, 6, 1 );
INSERT INTO Lecturer_Classes (idLecturer, idClass, Value) VALUES ( 3, 7, 0);
INSERT INTO Lecturer_Classes (idLecturer, idClass, Value) VALUES ( 3, 8, 0 );
INSERT INTO Lecturer_Classes (idLecturer, idClass, Value) VALUES ( 3, 9, 0 );
INSERT INTO Lecturer_Classes (idLecturer, idClass, Value) VALUES ( 3, 10, 1);
INSERT INTO Lecturer_Classes (idLecturer, idClass, Value) VALUES ( 3, 11, 1 );
INSERT INTO Lecturer_Classes (idLecturer, idClass, Value) VALUES ( 3, 12, 1 );

INSERT INTO Lecturer_Classes (idLecturer, idClass, Value) VALUES ( 4, 1, 1);
INSERT INTO Lecturer_Classes (idLecturer, idClass, Value) VALUES ( 4, 2, 1 );
INSERT INTO Lecturer_Classes (idLecturer, idClass, Value) VALUES ( 4, 3, 1 );
INSERT INTO Lecturer_Classes (idLecturer, idClass, Value) VALUES ( 4, 4, 1);
INSERT INTO Lecturer_Classes (idLecturer, idClass, Value) VALUES ( 4, 5, 1 );
INSERT INTO Lecturer_Classes (idLecturer, idClass, Value) VALUES ( 4, 6, 1 );
INSERT INTO Lecturer_Classes (idLecturer, idClass, Value) VALUES ( 4, 7, 1);
INSERT INTO Lecturer_Classes (idLecturer, idClass, Value) VALUES ( 4, 8, 1 );
INSERT INTO Lecturer_Classes (idLecturer, idClass, Value) VALUES ( 4, 9, 1 );
INSERT INTO Lecturer_Classes (idLecturer, idClass, Value) VALUES ( 4, 10, 1);
INSERT INTO Lecturer_Classes (idLecturer, idClass, Value) VALUES ( 4, 11, 1 );
INSERT INTO Lecturer_Classes (idLecturer, idClass, Value) VALUES ( 4, 12, 1 );

INSERT INTO Lecturer_Classes (idLecturer, idClass, Value) VALUES ( 5, 1, 1);
INSERT INTO Lecturer_Classes (idLecturer, idClass, Value) VALUES ( 5, 2, 1 );
INSERT INTO Lecturer_Classes (idLecturer, idClass, Value) VALUES ( 5, 3, 1 );
INSERT INTO Lecturer_Classes (idLecturer, idClass, Value) VALUES ( 5, 4, 1);
INSERT INTO Lecturer_Classes (idLecturer, idClass, Value) VALUES ( 5, 5, 1 );
INSERT INTO Lecturer_Classes (idLecturer, idClass, Value) VALUES ( 5, 6, 1 );
INSERT INTO Lecturer_Classes (idLecturer, idClass, Value) VALUES ( 5, 7, 1);
INSERT INTO Lecturer_Classes (idLecturer, idClass, Value) VALUES ( 5, 8, 1 );
INSERT INTO Lecturer_Classes (idLecturer, idClass, Value) VALUES ( 5, 9, 1 );
INSERT INTO Lecturer_Classes (idLecturer, idClass, Value) VALUES ( 5, 10, 1);
INSERT INTO Lecturer_Classes (idLecturer, idClass, Value) VALUES ( 5, 11, 1 );
INSERT INTO Lecturer_Classes (idLecturer, idClass, Value) VALUES ( 5, 12, 1 );

INSERT INTO Lecturer_Classes (idLecturer, idClass, Value) VALUES ( 6, 1, 1);
INSERT INTO Lecturer_Classes (idLecturer, idClass, Value) VALUES ( 6, 2, 1 );
INSERT INTO Lecturer_Classes (idLecturer, idClass, Value) VALUES ( 6, 3, 1 );
INSERT INTO Lecturer_Classes (idLecturer, idClass, Value) VALUES ( 6, 4, 1);
INSERT INTO Lecturer_Classes (idLecturer, idClass, Value) VALUES ( 6, 5, 1 );
INSERT INTO Lecturer_Classes (idLecturer, idClass, Value) VALUES ( 6, 6, 1 );
INSERT INTO Lecturer_Classes (idLecturer, idClass, Value) VALUES ( 6, 7, 1);
INSERT INTO Lecturer_Classes (idLecturer, idClass, Value) VALUES ( 6, 8, 1 );
INSERT INTO Lecturer_Classes (idLecturer, idClass, Value) VALUES ( 6, 9, 1 );
INSERT INTO Lecturer_Classes (idLecturer, idClass, Value) VALUES ( 6, 10, 0);
INSERT INTO Lecturer_Classes (idLecturer, idClass, Value) VALUES ( 6, 11, 0 );
INSERT INTO Lecturer_Classes (idLecturer, idClass, Value) VALUES ( 6, 12, 0 );

-- lecturer-slot

INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 1, 1, 0 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 1, 2, 0 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 1, 3, 0 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 1, 4, 1 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 1, 5, 1 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 1, 6, 1 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 1, 7, 1 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 1, 8, 1 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 1, 9, 1 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 1, 10, 0 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 1, 11, 0 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 1, 12, 0 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 1, 13, 1 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 1, 14, 1 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 1, 15, 1 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 1, 16, 1 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 1, 17, 1 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 1, 18, 0 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 1, 19, 0 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 1, 20, 1 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 1, 21, 1 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 1, 22, 1 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 1, 23, 1 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 1, 24, 1 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 1, 25, 1 );

INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 2, 1, 0 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 2, 2, 0 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 2, 3, 0 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 2, 4, 1 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 2, 5, 1 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 2, 6, 0 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 2, 7, 0 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 2, 8, 0 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 2, 9, 0 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 2, 10,0 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 2, 11, 0 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 2, 12, 0 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 2, 13, 1 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 2, 14, 1 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 2, 15, 1 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 2, 16, 1 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 2, 17, 1 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 2, 18, 0 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 2, 19, 0 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 2, 20, 0 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 2, 21, 1 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 2, 22, 1 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 2, 23, 1 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 2, 24, 1 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 2, 25, 1 );

INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 3, 1, 0 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 3, 2, 1 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 3, 3, 1 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 3, 4, 1 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 3, 5, 1 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 3, 6, 1 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 3, 7, 1 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 3, 8, 0 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 3, 9, 1 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 3, 10, 1 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 3, 11, 1 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 3, 12, 1 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 3, 13, 1 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 3, 14, 1 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 3, 15, 1 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 3, 16, 0 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 3, 17, 0 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 3, 18, 0 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 3, 19, 0 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 3, 20, 0 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 3, 21, 1 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 3, 22, 1 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 3, 23, 1 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 3, 24, 1 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 3, 25, 1 );

INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 4, 1, 0 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 4, 2, 0 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 4, 3, 1 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 4, 4, 1 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 4, 5, 1 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 4, 6, 1 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 4, 7, 1 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 4, 8, 1 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 4, 9, 1 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 4, 10, 0 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 4, 11, 0 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 4, 12, 0 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 4, 13, 1 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 4, 14, 1 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 4, 15, 1 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 4, 16, 1 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 4, 17, 1 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 4, 18, 1 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 4, 19, 1 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 4, 20, 0 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 4, 21, 0 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 4, 22, 1 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 4, 23, 1 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 4, 24, 1 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 4, 25, 1 );

INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 5, 1, 0 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 5, 2, 0 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 5, 3, 0 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 5, 4, 1 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 5, 5, 1 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 5, 6, 1 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 5, 7, 1 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 5, 8, 1 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 5, 9, 1 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 5, 10, 1 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 5, 11, 1 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 5, 12, 1 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 5, 13, 1 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 5, 14, 1 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 5, 15, 1 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 5, 16, 1 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 5, 17, 0 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 5, 18, 0 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 5, 19, 0 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 5, 20, 1 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 5, 21, 1 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 5, 22, 1 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 5, 23, 1 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 5, 24, 1 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 5, 25, 1 );

INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 6, 1, 1 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 6, 2, 1 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 6, 3, 1 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 6, 4, 1 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 6, 5, 1 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 6, 6, 1 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 6, 7, 1 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 6, 8, 1 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 6, 9, 1 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 6, 10, 0 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 6, 11, 0 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 6, 12, 0 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 6, 13, 0 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 6, 14, 0 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 6, 15, 0 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 6, 16, 0 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 6, 17, 1 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 6, 18, 1 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 6, 19, 1 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 6, 20, 1 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 6, 21, 1 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 6, 22, 1 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 6, 23, 1 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 6, 24, 1 );
INSERT INTO Lecturer_Slots (idLecturer, idSlot, Value) VALUES ( 6, 25, 1 );

-- Room-Class

INSERT INTO Room_Classes (idRoom, idClass, Value) VALUES ( 1, 1, 0 );
INSERT INTO Room_Classes (idRoom, idClass, Value) VALUES ( 1, 2, 1 );
INSERT INTO Room_Classes (idRoom, idClass, Value) VALUES ( 1, 3, 0 );
INSERT INTO Room_Classes (idRoom, idClass, Value) VALUES ( 1, 4, 1 );
INSERT INTO Room_Classes (idRoom, idClass, Value) VALUES ( 1, 5, 1 );
INSERT INTO Room_Classes (idRoom, idClass, Value) VALUES ( 1, 6, 1 );
INSERT INTO Room_Classes (idRoom, idClass, Value) VALUES ( 1, 7, 1 );
INSERT INTO Room_Classes (idRoom, idClass, Value) VALUES ( 1, 8, 0 );
INSERT INTO Room_Classes (idRoom, idClass, Value) VALUES ( 1, 9, 1 );
INSERT INTO Room_Classes (idRoom, idClass, Value) VALUES ( 1, 10, 1 );
INSERT INTO Room_Classes (idRoom, idClass, Value) VALUES ( 1, 11, 1 );
INSERT INTO Room_Classes (idRoom, idClass, Value) VALUES ( 1, 12, 1 );

INSERT INTO Room_Classes (idRoom, idClass, Value) VALUES ( 2, 1, 1 );
INSERT INTO Room_Classes (idRoom, idClass, Value) VALUES ( 2, 2, 1 );
INSERT INTO Room_Classes (idRoom, idClass, Value) VALUES ( 2, 3, 1 );
INSERT INTO Room_Classes (idRoom, idClass, Value) VALUES ( 2, 4, 0 );
INSERT INTO Room_Classes (idRoom, idClass, Value) VALUES ( 2, 5, 0 );
INSERT INTO Room_Classes (idRoom, idClass, Value) VALUES ( 2, 6, 0 );
INSERT INTO Room_Classes (idRoom, idClass, Value) VALUES ( 2, 7, 1 );
INSERT INTO Room_Classes (idRoom, idClass, Value) VALUES ( 2, 8, 1 );
INSERT INTO Room_Classes (idRoom, idClass, Value) VALUES ( 2, 9, 1 );
INSERT INTO Room_Classes (idRoom, idClass, Value) VALUES ( 2, 10, 0 );
INSERT INTO Room_Classes (idRoom, idClass, Value) VALUES ( 2, 11, 0 );
INSERT INTO Room_Classes (idRoom, idClass, Value) VALUES ( 2, 12, 0 );

INSERT INTO Room_Classes (idRoom, idClass, Value) VALUES ( 3, 1, 1 );
INSERT INTO Room_Classes (idRoom, idClass, Value) VALUES ( 3, 2, 0 );
INSERT INTO Room_Classes (idRoom, idClass, Value) VALUES ( 3, 3, 0 );
INSERT INTO Room_Classes (idRoom, idClass, Value) VALUES ( 3, 4, 0 );
INSERT INTO Room_Classes (idRoom, idClass, Value) VALUES ( 3, 5, 1 );
INSERT INTO Room_Classes (idRoom, idClass, Value) VALUES ( 3, 6, 1 );
INSERT INTO Room_Classes (idRoom, idClass, Value) VALUES ( 3, 7, 1 );
INSERT INTO Room_Classes (idRoom, idClass, Value) VALUES ( 3, 8, 1 );
INSERT INTO Room_Classes (idRoom, idClass, Value) VALUES ( 3, 9, 1 );
INSERT INTO Room_Classes (idRoom, idClass, Value) VALUES ( 3, 10, 1 );
INSERT INTO Room_Classes (idRoom, idClass, Value) VALUES ( 3, 11, 0 );
INSERT INTO Room_Classes (idRoom, idClass, Value) VALUES ( 3, 12, 0 );

INSERT INTO Room_Classes (idRoom, idClass, Value) VALUES ( 4, 1, 1 );
INSERT INTO Room_Classes (idRoom, idClass, Value) VALUES ( 4, 2, 0 );
INSERT INTO Room_Classes (idRoom, idClass, Value) VALUES ( 4, 3, 1 );
INSERT INTO Room_Classes (idRoom, idClass, Value) VALUES ( 4, 4, 1 );
INSERT INTO Room_Classes (idRoom, idClass, Value) VALUES ( 4, 5, 1 );
INSERT INTO Room_Classes (idRoom, idClass, Value) VALUES ( 4, 6, 1 );
INSERT INTO Room_Classes (idRoom, idClass, Value) VALUES ( 4, 7, 1 );
INSERT INTO Room_Classes (idRoom, idClass, Value) VALUES ( 4, 8, 1 );
INSERT INTO Room_Classes (idRoom, idClass, Value) VALUES ( 4, 9, 1 );
INSERT INTO Room_Classes (idRoom, idClass, Value) VALUES ( 4, 10, 1 );
INSERT INTO Room_Classes (idRoom, idClass, Value) VALUES ( 4, 11, 1 );
INSERT INTO Room_Classes (idRoom, idClass, Value) VALUES ( 4, 12, 1 );

INSERT INTO Room_Classes (idRoom, idClass, Value) VALUES ( 5, 1, 1 );
INSERT INTO Room_Classes (idRoom, idClass, Value) VALUES ( 5, 2, 1 );
INSERT INTO Room_Classes (idRoom, idClass, Value) VALUES ( 5, 3, 1 );
INSERT INTO Room_Classes (idRoom, idClass, Value) VALUES ( 5, 4, 0 );
INSERT INTO Room_Classes (idRoom, idClass, Value) VALUES ( 5, 5, 0 );
INSERT INTO Room_Classes (idRoom, idClass, Value) VALUES ( 5, 6, 0 );
INSERT INTO Room_Classes (idRoom, idClass, Value) VALUES ( 5, 7, 0 );
INSERT INTO Room_Classes (idRoom, idClass, Value) VALUES ( 5, 8, 1 );
INSERT INTO Room_Classes (idRoom, idClass, Value) VALUES ( 5, 9, 1 );
INSERT INTO Room_Classes (idRoom, idClass, Value) VALUES ( 5, 10, 1 );
INSERT INTO Room_Classes (idRoom, idClass, Value) VALUES ( 5, 11, 1 );
INSERT INTO Room_Classes (idRoom, idClass, Value) VALUES ( 5, 12, 1 );

INSERT INTO Room_Classes (idRoom, idClass, Value) VALUES ( 6, 1, 1 );
INSERT INTO Room_Classes (idRoom, idClass, Value) VALUES ( 6, 2, 1 );
INSERT INTO Room_Classes (idRoom, idClass, Value) VALUES ( 6, 3, 1 );
INSERT INTO Room_Classes (idRoom, idClass, Value) VALUES ( 6, 4, 1 );
INSERT INTO Room_Classes (idRoom, idClass, Value) VALUES ( 6, 5, 1 );
INSERT INTO Room_Classes (idRoom, idClass, Value) VALUES ( 6, 6, 1 );
INSERT INTO Room_Classes (idRoom, idClass, Value) VALUES ( 6, 7, 0 );
INSERT INTO Room_Classes (idRoom, idClass, Value) VALUES ( 6, 8, 0 );
INSERT INTO Room_Classes (idRoom, idClass, Value) VALUES ( 6, 9, 0 );
INSERT INTO Room_Classes (idRoom, idClass, Value) VALUES ( 6, 10, 1 );
INSERT INTO Room_Classes (idRoom, idClass, Value) VALUES ( 6, 11, 1 );
INSERT INTO Room_Classes (idRoom, idClass, Value) VALUES ( 6, 12, 1 );

INSERT INTO Room_Classes (idRoom, idClass, Value) VALUES ( 7, 1, 1 );
INSERT INTO Room_Classes (idRoom, idClass, Value) VALUES ( 7, 2, 1 );
INSERT INTO Room_Classes (idRoom, idClass, Value) VALUES ( 7, 3, 1 );
INSERT INTO Room_Classes (idRoom, idClass, Value) VALUES ( 7, 4, 1 );
INSERT INTO Room_Classes (idRoom, idClass, Value) VALUES ( 7, 5, 1 );
INSERT INTO Room_Classes (idRoom, idClass, Value) VALUES ( 7, 6, 1 );
INSERT INTO Room_Classes (idRoom, idClass, Value) VALUES ( 7, 7, 1 );
INSERT INTO Room_Classes (idRoom, idClass, Value) VALUES ( 7, 8, 1 );
INSERT INTO Room_Classes (idRoom, idClass, Value) VALUES ( 7, 9, 1 );
INSERT INTO Room_Classes (idRoom, idClass, Value) VALUES ( 7, 10, 0 );
INSERT INTO Room_Classes (idRoom, idClass, Value) VALUES ( 7, 11, 0 );
INSERT INTO Room_Classes (idRoom, idClass, Value) VALUES ( 7, 12, 1 );

INSERT INTO Room_Classes (idRoom, idClass, Value) VALUES ( 8, 1, 1 );
INSERT INTO Room_Classes (idRoom, idClass, Value) VALUES ( 8, 2, 1 );
INSERT INTO Room_Classes (idRoom, idClass, Value) VALUES ( 8, 3, 0 );
INSERT INTO Room_Classes (idRoom, idClass, Value) VALUES ( 8, 4, 0 );
INSERT INTO Room_Classes (idRoom, idClass, Value) VALUES ( 8, 5, 1 );
INSERT INTO Room_Classes (idRoom, idClass, Value) VALUES ( 8, 6, 1 );
INSERT INTO Room_Classes (idRoom, idClass, Value) VALUES ( 8, 7, 1 );
INSERT INTO Room_Classes (idRoom, idClass, Value) VALUES ( 8, 8, 1 );
INSERT INTO Room_Classes (idRoom, idClass, Value) VALUES ( 8, 9, 1 );
INSERT INTO Room_Classes (idRoom, idClass, Value) VALUES ( 8, 10, 0 );
INSERT INTO Room_Classes (idRoom, idClass, Value) VALUES ( 8, 11, 0 );
INSERT INTO Room_Classes (idRoom, idClass, Value) VALUES ( 8, 12, 0 );