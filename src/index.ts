import express from 'express'
import diaryRouter from './routes/diaries'

const app = express()
app.use(express.json())

const PORT = 3000

app.get('/ping', (_req, res) => {
  console.log('Some is pinged here UWU')
  res.send('ping')
})

app.use('/api/diaries', diaryRouter)

app.listen(PORT, () => {
  console.log('Server is running on port 3000')
})
