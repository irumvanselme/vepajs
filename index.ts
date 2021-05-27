import { config } from "dotenv"
config()

import express from "express"

const app: express.Application = express()

app.listen(process.env.PORT, () =>
    console.log(
        `[${new Date().toUTCString()}] Development Server 1  (http://localhost:${
            process.env.PORT
        }) started`
    )
);