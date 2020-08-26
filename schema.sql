DROP DATABASE IF EXISTS CMS_db;

CREATE DATABASE CMS_db;

USE CMS_db;

CREATE TABLE department
(
        id INT(65)
        AUTO_INCREMENT NOT NULL,
    deptName VARCHAR
        (30) NOT NULL,
    PRIMARY KEY
        (id)
);
        CREATE TABLE roles
        (
                id INT(65)
                AUTO_INCREMENT NOT NULL,
    title VARCHAR
                (30) NOT NULL,
    salary DECIMAL
                (10 , 4 ) NOT NULL,
    deptId INT
                (30) NOT NULL,
    FOREIGN KEY
                (deptId)
        REFERENCES department
                (id),
    PRIMARY KEY
                (id)
);

                CREATE TABLE employee
                (
                        id INT(65)
                        AUTO_INCREMENT NOT NULL,
    firstName VARCHAR
                        (30) NOT NULL,
    lastName VARCHAR
                        (30) NOT NULL,
    managerId INT,
    FOREIGN KEY
                        (managerId)
        REFERENCES employee
                        (id),
    roleId INT
                        (65),
    FOREIGN KEY
                        (roleId)
        REFERENCES roles
                        (id),
    PRIMARY KEY
                        (id)
);
                        use cms_db;

                        INSERT INTO department
                                (id, deptName)
                        VALUES
                                (1, "sales"),
                                (2, "engineering"),
                                (3, "finance"),
                                (4, "legal");
                        use cms_db;

                        INSERT INTO employee
                                (firstName, lastName)
                        VALUES
                                ("john", "doe"),
                                ("mike", "chan"),
                                ("ashley", "rodriguez"),
                                ("kevin", "tupik"),
                                ("malia", "brown"),
                                ("sarah", "lourd"),
                                ("tom", "allen"),
                                ("christian", "eckenrode");
                        use cms_db;

                        INSERT INTO roles
                                (title, salary, deptId)
                        VALUES
                                ("sales lead", 100000, 1),
                                ("salesperson", 80000, 1),
                                ("lead engineer", 150000, 2),
                                ("software engineer", 120000, 2),
                                ("accountant", 125000, 3),
                                ("leagal team lead", 250000, 4),
                                ("lawyer", 190000, 4),
                                ("lead engineer", 150000, 2);