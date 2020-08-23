DROP DATABASE IF EXISTS CMS_db;

CREATE DATABASE CMS_db;

USE CMS_db;

create table department
(
    dept_Id INT (65)
    AUTO_INCREMENT,
 dept_Name VARCHAR
    (30) NOT NULL,
primary key
    (id)
);
    create table `role`
    (
role_Id INT
    (65) AUTO_INCREMENT NOT NULL,
title VARCHAR
    (30) NOT NULL,
salary DECIMAL
    (10,4) NOT NULL,
dept_Id VARCHAR
    (30) NOT NULL,
);

    create table employee
    (
        id INT (4)
        AUTO_INCREMENT NOT NULL
first_Name VARCHAR
        (30) NOT NULL,
lastName INT
        (30) NOT NULL,
manager_id INT 
role_Id INT
        (65) NOT NULL,
primary key
        (id)
);
