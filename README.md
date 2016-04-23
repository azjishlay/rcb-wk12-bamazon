# week-12-bamazon

### Customer View Demo

See working demo here:

[![bamazon video](http://img.youtube.com/vi/yiCq5Y4aNAs/0.jpg)](https://youtu.be/yiCq5Y4aNAs)

To use bamazonCustomer, first create your own `bamazon database` and `connection.js` file as below:

```
var mysql = require('mysql');

exports.myConnection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: '<user>',
  password: '<password>',
  database: 'bamazon'
});
```

To run bamazonCustomer:

```
node bamazonCustomer.js
```