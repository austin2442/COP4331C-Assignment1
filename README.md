# COP4331C-Assignment1



# Description of Application
This application allows a user to create an account and login. Once they are logged in they are able to either add a color to their account, or search for a color they already have added to their account.

# Technologies Used

This application has its frontend built with HTML, CSS, and JavaScript. It uses PHP as its backend language and MySQL as its database. The applicaiton is intended to be hosted on a Linux server.

# Setup Instructions

## Database Setup

Use `mysql -u root -p` to open the MySQL CLI

Run: `create database DB`
Run `use DB` to select the database;

Run the following command to create the tables:

```SQL
CREATE TABLE `COP4331`.`Users`
(
  `ID` INT NOT NULL AUTO_INCREMENT ,
  `FirstName` VARCHAR(50) NOT NULL DEFAULT '' ,
  `LastName` VARCHAR(50) NOT NULL DEFAULT '' ,
  `Login` VARCHAR(50) NOT NULL DEFAULT '' ,
  `Password` VARCHAR(50) NOT NULL DEFAULT '' ,
  PRIMARY KEY (`ID`)
) ENGINE = InnoDB;
```
```SQL
CREATE TABLE `COP4331`.`Colors`
(
  `ID` INT NOT NULL AUTO_INCREMENT ,
  `Name` VARCHAR(50) NOT NULL DEFAULT '' ,
  `UserID` INT NOT NULL DEFAULT '0' ,
  PRIMARY KEY (`ID`)
) ENGINE = InnoDB;
```

Run this command to create the user for the DB
create user 'username' identified by 'password'

Run this command to give the user privileges
grant all privileges on DB.* to 'username'@'%';

## Setup API

Go into each API file and update the connection likes that start with `$conn` to include your specific database login information.

## Access Web APP

Assuming your project is in a directory where Apache is looking for it (Default is /var/www/html) then you will be able to access the application by typing your servers IP into a web browser. 


