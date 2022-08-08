const knex = require('knex')({
    client: 'mysql2',
    connection: {
        host: process.env.HOST_DB,
        user: process.env.USER_NAME_DB,
        password: process.env.PASSWORD_DB,
        database: process.env.DATA_BASE
    }
})
const add = async (nameService = 'CRON', inProcess = 'N') => {

    console.log('inserting logs...')

    const response = await knex('logs').insert({ SERVICE: nameService, IN_PROCESS: inProcess })

    console.log('end inserting logs...')

    return response

}

module.exports = {

    add
}