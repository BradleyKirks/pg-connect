// import tools from pg library 
import pg from 'pg'
const { Client } = pg 
// import connection string from credentials/secrets files
import { connectionURI } from './creds.js'

// create client connection to database 
const client = new Client({
    connectionString: connectionURI,
})

await client.connect()

//open connection 
const time = await client.query('SELECT NOW()')
console.log(time)
//run query 




//close connection
client.end
