-- Create and Use Database --
CREATE DATABASE burgers_db;
USE burgers_db;

-- Create Table --
CREATE TABLE burgers(
    id INT AUTO_INCREMENT,
    name VARCHAR(100),
    devoured TINYINT DEFAULT(0),
    PRIMARY KEY (id)
);