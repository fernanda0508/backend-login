const db = require("../../database/models");
const userModel = db.User;



const userService = {

    async getProducts() {
        try {
            let user = await userProduto.findAll({

            });

            return user;

        } catch (error) {
            console.log(error);
            return undefined;
        }

    }

}
module.exports = userService;