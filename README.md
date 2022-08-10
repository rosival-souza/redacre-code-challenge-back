=========================================================================
# Build a REST API with Node.js, Express, Docker and MySQL
=========================================================================
## 1 - Getting Starting

Install on your docker application machine and docker compose

## 2 - Build application and database with Docker Compose


```bash
docker-compose -f docker-compose.yml up --build
```

## 3 - Create table History

Open your SGBD and execute instruction below

```bash
CREATE TABLE `database`.`history` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `currency_from` VARCHAR(20) NOT NULL,
  `amount` INT NOT NULL,
  `currency_to` VARCHAR(20) NOT NULL,
  `total` FLOAT NOT NULL,
  `date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`));
```

## 4 - Open you application in localhost

Access your Web server: http://localhost:4000/history
