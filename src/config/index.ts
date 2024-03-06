import { config } from 'dotenv'
config()

export const apiKey = process.env.DEMO_KEY
export const port = process.env.PORT;