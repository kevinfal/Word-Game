
const fs = require('fs').promises;
const express = require('express');
const app  = express();//call express as function to create web server
const port = 8080;//port to run server

// This is how we define the routes for the API's in our web server
// where the .get makes references to the http GET method
// and the '/' is the route
// the attached callback function will be called each time we get 
// a GET request to the '/' route
// In the callback the parameteres we get:
// req includes all the request information, eg headers
// res is an object we use to respond the http call!
app.get('/', (req, res) => res.json({Hello: 'World!'}))
// our new API endpoint to read a file from disk
// and send the results over http
app.get('/readFile', async (req, res) => {
    try{
        const fileContent = await fs.readFile('helloworld.txt','utf8');
        res.json({ 
            fileContent,
        error: false });
    }catch (err) {
        // In the catch block we receive the error as an argument
        // set response status to 500, to denote a internal error
        res.status(500);
        res.json({
          fileContent: null,
          error: true,
          errorMsg: err,
        })
      }
  });
  app.listen(
    port, 
    () => console.log(`app listening at http://localhost:${port}`)
  );