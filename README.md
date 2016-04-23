# week-12-bamazon

### Customer View Demo

See working demo here:

[![bamazon video](http://img.youtube.com/vi/0xUu9UHmkOE/0.jpg)](https://youtu.be/0xUu9UHmkOE)

To use bamazonCustomer, first create your own `bamazon database` as below:

```
+---------+--------------+-----------+---------------+------+
| item_id | product_name | dept_name | product_price | qty  |
+---------+--------------+-----------+---------------+------+
|       1 | carrot       | roots     |          3.00 |   50 |
|       2 | potato       | roots     |          6.00 |   24 |
|       3 | celery       | greens    |          2.75 |   99 |
|       4 | lettuce      | greens    |          1.00 |    4 |
|       5 | scallion     | greens    |          3.50 |   25 |
|       6 | flour        | grains    |          2.25 |   74 |
|       7 | wheat        | grains    |          4.35 |  418 |
|       8 | blackberry   | fruits    |          3.50 |   89 |
|       9 | blueberry    | fruits    |          7.00 |   36 |
|      10 | strawberry   | fruits    |          5.00 |  235 |
+---------+--------------+-----------+---------------+------+
```

You will also need a `connection.js` file to connect to your database:

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

Install npm packages from `package.json` file and run:

```
node bamazonCustomer.js
```