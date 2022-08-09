/*
CREATE TABLE `database`.`history` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `currency_from` VARCHAR(20) NOT NULL,
  `amount` INT NOT NULL,
  `currency_to` VARCHAR(20) NOT NULL,
  `total` FLOAT NOT NULL,
  `date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`));
*/

const knex = require('knex')({
    client: 'mysql2',
    connection: {
        host: process.env.MYSQL_HOST || '127.0.0.1',
        user: process.env.MYSQL_USER || 'developer',
        password: process.env.MYSQL_PASSWORD || 'developer',
        database: process.env.MYSQL_DATABASE || 'database',
        port: process.env.MYSQL_PORT || 3306
    }
})
const addData = async (data) => {

    console.log('inserting data...')

    const response = await knex('history')
        .insert({
            CURRENCY_FROM: data.currencyFrom,
            AMOUNT: data.amount,
            CURRENCY_TO: data.currencyTo,
            TOTAL: data.total,
        })

    console.log('end inserting data...', response)

    return response

}
const getData = async () => {

    console.log('Init getData...')
    const data = await knex.raw(
        `
        SELECT 
            id,
            currency_from,
            amount,
            currency_to,
            total,
            DATE_FORMAT(DATE, '%Y-%m-%d') AS date
        FROM history`
    )
    console.log('End getData...')
    return data[0]
}

module.exports = {

    addData,
    getData
}