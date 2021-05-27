import express from "express"

const app: express.Application = express()

app.listen(2000, () => {
    console.log("[VEPA]");
})