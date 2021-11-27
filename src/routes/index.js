//const userController = require('../controller/userController');
const productController = require('../controller/productController');

const routes = require("express").Router();

//Criando os produtos
routes.post("/product", productController.createProduct);

//Busca ou listar pro 1 Produto específico
routes.get("/product/:id", productController.getProduct);

//Busca ou listar por todos os Pordutos
routes.get("/products", productController.getProducts);

//Busca ou listar por todos os Pordutos
routes.put("/product/:id", productController.updateProduct);

//Exlcuir produto
routes.delete("/product/:id", productController.deleteProduct);


module.exports = routes;
