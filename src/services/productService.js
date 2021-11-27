const db = require("../../database/models");

const productModel = db.Product;

const productService = {

    //Criando o produto
  
    async createProduct(name, preco, preco_desc,prod_qt_estoque, cate_id){
      try {
        let product = await productModel.create({
         name, preco,  preco_desc,prod_qt_estoque, cate_id
        });
        return product;

        } catch (error) {

        return undefined;
    
      }
    
    },
    //atualizar produtos
    async updadeProduct(id, name, preco, preco_desc, prod_qt_estoque, cate_id, new_name, new_preco, new_preco_desc, new_prod_qt_estoque, new_cate_id) {
      try {

          let ProductExist = await productModel.findOne({
              where: {
                  id: id,
                  name: name,
                  preco: preco,
                  preco_desc: preco_desc,
                  prod_qt_estoque: prod_qt_estoque,
                  cate_id: cate_id,

              }
          });

          if (!ProductExist) {
              console.log("Produto Não Existe");

          }
          ProductExist.name = new_name;
          ProductExist.preco = new_preco;
          ProductExist.preco_desc = new_preco_desc;
          ProductExist.prod_qt_estoque = new_prod_qt_estoque;
          ProductExist.cate_id = new_cate_id;

          await ProductExist.save();

          return ProductExist;

      } catch (error) {
          console.error(error);
          return undefined
      }
      
      },
    //delentando produtos
      async deleteProduct(id) {
  

            try {
              let Product = await productModel.destroy({
                where: {
                  id: id,
                }
  
              });
              return Product;
            } catch (error) {
              console.log(error);

              return undefined;
              
            }

        
        },
        
// Lista todos os produtos
   async getProducts(){
        try {
            let products = productModel.findAll();
            return products;
            
        } catch (error) {

            return undefined
            
        }
         
   },
   // listar um produto especifico
   async getProduct(id) {
    try {

        let Product = await productModel.findOne({
            where: {

                id,
            }
        });

        return Product;

    } catch (error) {
        console.error(error);
        return undefined

    }

  }
}

module.exports = productService;