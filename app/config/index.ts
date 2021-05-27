import dotenv from "dotenv";
dotenv.config()

import { connectToDb } from "./database";

connectToDb().then();