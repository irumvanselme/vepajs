import "./app/config"

import express from "express";
import { join, resolve } from "path";

const app: express.Application = express()

app.get("/", (req: express.Request, res: express.Response)=> {
    res.sendFile(join(resolve(), "/app/views/welcome.html"))
})

app.listen(process.env.PORT, () =>
    console.log(
        `[${new Date().toUTCString()}] Development Server 1  (http://localhost:${
            process.env.PORT
        }) started`
    )
);