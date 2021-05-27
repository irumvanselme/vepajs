import express from "express"

const app: express.Application = express()

app.listen(2000, () => {
    console.log("Something is working 1 h ubuntu");
})