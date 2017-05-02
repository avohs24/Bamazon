USE bamazon_db;

CREATE DATABASE bamazon_db;
CREATE TABLE products(
item_id INT auto_increment NOT NULL,
product_name VARCHAR(30) NOT NULL,
department_name VARCHAR(30) NOT NULL,
price INT NOT NULL,
stock_quantity INT NOT NULL,
PRIMARY KEY (item_id)
);

SELECT * FROM products;

USE bamazon_db;
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Amazon Echo", "Electronics", 50, 10);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Mattress", "Home", 500, 8);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("iPhone", "Electronics", 100, 5);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Chair", "Furniture", 40, 6);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Trash Can", "Home", 30, 7);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Beer", "Beverages", 10, 100);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Couch", "Furniture", 700, 3);
