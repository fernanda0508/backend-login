const productService = require("../services/productService")

const productController = {

    async createProduct(req, res){

     const { name, preco, preco_desc,prod_qt_estoque, cate_id } = req.body;
     if( name && preco){
       let product = await productService.createProduct( name, preco,  preco_desc,prod_qt_estoque, cate_id);
       
       if(!product){
        return res.status(400).json({
            error: 'Parâmetros invalidos'
        });

            }
        return res.json(product);

        
        }
        return res.status(400).json({
            error: 'Parâmetros incompletos'
        });
    },

    // Atualizar um produto
    async updateProduct(req, res) {
        const id = req.params.id;
        const { name, preco, preco_desc, prod_qt_estoque, cate_id, new_name, new_preco, new_preco_desc, new_prod_qt_estoque, new_cate_id } = req.body;


        let product = await productService.updadeProduct(id, name, preco, preco_desc, prod_qt_estoque, cate_id, new_name, new_preco, new_preco_desc, new_prod_qt_estoque, new_cate_id);
            if(!product){
                return res.status(401).json({
                    error:'Acesso Negado!'
                })
            }
    
        return res.json(product);
    },
    //deletando um Produto
    async deleteProduct(req, res) {
        const id = req.params.id;

        let product = await productService.deleteProduct(id);
            if(!product){
                return res.status(404).json({
                    error:'Usuário não encontrado!'
                });
            }
    
        return res.json({
            message: 'Usuário Excluído'

        });
    },
   
    // listar um produto especifico
    async getProduct(req, res) {
        const id = req.params.id;

        let product = await productService.getProduct(id);

        if(!product){

            res.status(404).json({
                error: 'falha no servidor ao fazer a busca'
            });
    
           }
          
        return res.json(product);
    },
    //vários produtos
    async getProducts(req, res){
        const id = req.params.id;

       let products = await productService.getProducts(id);
            if(products.length == 0){
                return res.status(404).json({
                    error: 'Nenhum dado encontrado'
                });

            }

        return res.json(products);
    }

}

module.exports = productController;