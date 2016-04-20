// Display items available for sale
// This initial display, should include the ids, names, and prices of products for sale

// Prompt user
// Ask for ID of desired product
// Ask for quantity
// Ask if confirm order or add more
// Repeat until confirm

// Check if product is in stock
// If no, respond: "Insufficient quantity" and prevent the order from going through
// If yes, show total cost of purchase

// Prompt user to confirm
// If no, reset
// If yes, deduct from database and reset

// Require mysql npm package
var mysql = require('mysql');

// Creates connection 
var connection = require("./connection.js");

// Initiate connection
connection.myConnection.connect(

  function(err){

  if (err) {
    console.error('Error connecting: ' + 
      err.stack);
    return;
  }

  console.log('Connected!');

});

connection.myConnection.query(

  'SELECT * FROM products', 

  function(err, res){

    if (err) throw err;

    console.log(res);

});