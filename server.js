const express = require('express')
const app = express()
const PORT = 4000
const { version } = require('./package.json')

app.use(express.json())

app.get('/', (_, res) =>{

    res.send({
        success: true,
        message: `Server is running at https://localhost:${PORT}`,
        dateTime: new Date(),
        version: version,

      })
})
app.listen(PORT, () => {

    console.log(`️Server is running at https://localhost:${PORT}`)

})