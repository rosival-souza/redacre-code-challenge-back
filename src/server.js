const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 4000
const { version } = require('../package.json')
const db = require('./mysql2.config')

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (_, res) => {

    res.send({
        success: true,
        message: `Server is running at https://localhost:${PORT}`,
        dateTime: new Date(),
        version: version,

    })
})

app.get('/history/:dateIni/:dateEnd/:type', async (req, res) => {

    try {

        const data = await db.getData(req.params)
        res.send({
            success: true,
            data: data,
            message: '/history',
            dateTime: new Date(),
            version: version,

        })

    } catch (error) {

        console.log(error)

        res.status(400).send({
            success: false,
            message: '/history',
            dateTime: new Date(),
            version: version,
    
        })
    }

})
app.post('/history', async (req, res) => {

    try {
        await db.addData(req.body)
        res.send({
            success: true,
            body: req.body,
            message: '/history',
            dateTime: new Date(),
            version: version,

        })
    } catch (error) {

        console.log(error)

        res.status(400).send({
            success: false,
            body: req.body,
            message: '/history',
            dateTime: new Date(),
            version: version,

        })

    }

})
app.listen(PORT, () => {

    console.log(`️Server is running at https://localhost:${PORT}`)

})