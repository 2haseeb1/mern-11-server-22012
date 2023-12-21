console.log("hello")

const express = require("express")
const app=express()
const cors = require("cors")
const port = process.env.PORT || 5005
require('dotenv').config();
app.use(cors())
app.use(express.json())
app.get("/", (req, res) => {
    res.send("server is running")
})

//mongodb


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.pgelwxf.mongodb.net/?retryWrites=true&w=majority`;


const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
 
    await client.connect();
   
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
   
  }
}
run().catch(console.dir);














//

app.listen(port, () => {
   console.log(`server is running on :${port}`)
})
