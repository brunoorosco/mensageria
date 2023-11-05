import express from 'express'
import { router } from './infra/routes'

const app = express()
app.use(express.json())
app.use(router)
const PORT = process.env.PORT ?? 3001
app.listen(PORT, () => console.log(`Server client is running on PORT ${PORT}`))
