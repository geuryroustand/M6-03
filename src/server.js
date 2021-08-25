import express from 'express'
import cors from 'cors'

const port = process.env.PORT
const server = express()


server.use(express.json())
server.use(cors())


server.listen(port, () => {
  console.log(' ✔ Server running');
})

server.on('error', (error) =>
  console.log(' 🎇 Server is crashe due to ', error)
)