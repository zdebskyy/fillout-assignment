import express from 'express';
import fillOutRouter from './routes/fillout.route'
import { port } from './config'


const app = express();

app.use('/api/fillOut', fillOutRouter)


app.listen(port, () => console.log(`Server is running on port ${port}`))