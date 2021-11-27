const userService = require("../services/userService");

const userController = {
    async getProducts(req, res) {

        let user = await userService.getProducts();

        return res.json(user);
    }
}

module.exports = userController;