// lib/index.ts
import express = require('express');
import { body, validationResult } from 'express-validator';

// Create a new express application instance
const app: express.Application = express();
const embededJavaScriptTemplating = require('ejs');
// app.set( "views", path.join( __dirname, "views" ) );
// app.set( "view engine", "ejs" );
// app.use( express.static( path.join( __dirname, "public" ) ) );
const PORT:number = 3000 || process.env.PORT;

app.use(express.urlencoded({
  extended: true
}))

app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.post('/', (req, res) => {
  
  // You access the value by the "name" attribute of the input tag.
  // Photos
  console.log(`Cover Photo: ${req.body.coverPhoto}`);
  console.log(`Cover Photo: ${req.body.personalPhoto}`);
  console.log(`Cover Photo: ${req.body.comapnyLogo}`);


  // Text
  console.log(`First name: ${req.body.personFirstName}`);
  console.log(`Last name: ${req.body.personLastName}`);
  console.log(`job title : ${req.body.jobTitle}`);
  console.log(`phone number : ${req.body.phoneNumber}`);
  console.log(`email : ${req.body.businessEmail}`);
  console.log(`portfolio website : ${req.body.personalWebsite}`);
  console.log(`facebook profile : ${req.body.facebookProfile}`);
  console.log(`linkedin profile: ${req.body.linkedinProfile}`);
  
  
  
  console.log('new section');
  res.render('index.ejs');
})

app.listen(3000, function () {
  console.log('Server running on port 3000!');
})