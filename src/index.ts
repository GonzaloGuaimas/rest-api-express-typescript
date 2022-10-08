import express from 'express'

const app = express()
app.use(express.json())

const PORT = 3000

app.get('/ping', (_req, res)=>{
    console.log('Some is pinged here UWU')
    res.send('ping')
})

app.listen(PORT, () => {
    console.log('Server is running on port 3000')
})