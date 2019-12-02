const express = require('express')
const cors = require('cors')

const app = express()
// app.use(cors)
const videoRouter = require('./routers/video');

app.get('/video',cors(),videoRouter.video);


app.listen(3000)