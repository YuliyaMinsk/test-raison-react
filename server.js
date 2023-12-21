import express from 'express'
import cors from 'cors'

const sleep = (time = 0) => new Promise((resolve) => setTimeout(resolve, time))
const port = 4040

const app = express()

const corsOptions = {
    origin: 'http://localhost:5173',
}

app.use(cors(corsOptions))
app.use(express.json())

app.get('/', (_, res) => {
    res.write('This is mock server')
    res.end()
})

app.post('/endpoint', async (req, res) => {
    await sleep(3000)
    if (typeof req.body.email === 'string') {
        return res.status(200).json({ ok: true })
    } else {
        return res.status(400).json({ ok: false, message: `Expected email, got: ${req.body.email}` })
    }
})

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
})
