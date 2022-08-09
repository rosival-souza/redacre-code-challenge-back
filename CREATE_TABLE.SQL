CREATE TABLE `database`.`history` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `currency_from` VARCHAR(20) NOT NULL,
  `amount` INT NOT NULL,
  `currency_to` VARCHAR(20) NOT NULL,
  `total` FLOAT NOT NULL,
  `date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`));