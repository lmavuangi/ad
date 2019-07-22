'use strict'

const Products = use('App/Models/Prod')

class ProdController {

    async home({view})
    {
        const product = new Products;
        product.name = 'chips';
        product.img = 'candy6.jpg';
        product.desc = 'plastic chips 9.75oz';
        product.sell = true;
        product.price = 1.45;

        await product.save();

        const products = await product.all();

        return {products:products.toJSON()};
    }
}

module.exports = ProdController
