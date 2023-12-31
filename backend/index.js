const express = require('express');
const { MongoClient } = require('mongodb');
const cors=require('cors')
const app = express();
require('dotenv').config()



const client = new MongoClient(process.env.dbString);

app.use(express.json());
app.use(cors())
app.post('/data', async (req, res) => {
  try {
    await client.connect();
    
    const result = await client.db("startupData").collection("Startups").find().toArray();
console.log(result)
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    await client.close();
  }
});

app.post('/insert', async(req,res)=>{
 
 const data = req.body
  
try{
  await client.connect();x
  const result= await client.db('startupData').collection("Startups").insertOne({
    Date: data.Date,
    StartUpName: data.StartUpName,
    IndustryVertical:data.IndustryVertical,
    SubVertical: data.SubVertical,
    CityLocation: data.CityLocation,
    InvestorsName:data.InvestorsName,
    InvestmentType: data.InvestmentType,
    AmountInUSD: data.AmountInUSD,
  })
  console.log(result)
  res.json(result)
}  catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    } finally {
      await client.close();
    }

})
const port=process.env.port
app.listen(port, () => console.log("Server is running at port "+port));

module.exports = app;