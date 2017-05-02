var mysql = require('mysql');
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: "root",
    database: "bamazon_db"
});

function start() {
  inquirer.prompt([{
    type: "checkbox",
    name: "to_do",
    message: "Hello Manager! What would you like to do?",
    choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product"]
  }]).then(function(answer){
    switch(answer.to_do){
      case "View Products for Sale":
        seeAll();
      break;

      case "View Low Inventory" :
        LowInventory();
      break;

      case "Add to Inventory":
        AddInventory();
      break;

      case "Add New Product" :
        AddNew();
      break;
    }
  })
}

function seeAll(){
  connection.query("SELECT * FROM products", function(err, res) {
      if (err) throw err;
      for (var i = 0; i < res.length; i++) {
          console.log(res[i].item_id + ' | ' + res[i].product_name + ' | ' + res[i].price + ' | ' + res[i].stock_quantity);
      }
  start();
  })
};

function LowInventory(){
  connection.query("SELECT item_id, product_name, price FROM products WHERE ?", {stock_quantity: 5}, function(err, res){
    for(var i=0; i < res.length; i++){
      console.log("Item ID:" + res[i].item_id + "Product Name:" + res[i].product_name + "Price:" + res[i].price);
    }
  })
  start();
};

start();
