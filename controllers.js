const { query } = require("express");
const Product = require("./product_schema")

const all_products = async(req, res) => {
    try {
        const products = await Product.find();

        res.json({ nbr: products.length, products })
    } catch (err) {
        res.send(err)
    }

}
const create_product = (req, res) => {
    console.log(req.body)
    const product = new Product(req.body)
    product.save().then(() => {
        res.status(200).redirect('/api/v1/store')

    }).catch((err) => {
        res.status(500).json({ msg: "there is error" })
    })


}
const get_products = async(req, res) => {


    try {
        const { featured, company, name, limit } = req.query;

        const queryObj = {}

        if (featured !== undefined) {
            queryObj.featured = featured === 'true' ? true : false;
        }

        if (company) queryObj.company = company;
        if (name) queryObj.name = new RegExp(name, 'im')
        if (limit) queryObj.limit = Number(limit)



        const products = await Product.find(queryObj)
        res.status(200).json({ nbr: products.length, products })





    } catch (err) {
        res.status(500).json({ msg: 'there is an error' })
    }
}



const delete_product = (req, res) => {
    const product_id = req.params.id;

    Product.findByIdAndDelete({ _id: product_id })
        .then((result) => {
            if (!result) res.status(404).send(`<h1>no product with this id ${product_id}`)
            else res.status(200).redirect('/api/v1/store')

        }).catch((err) => {
            res.status(500).send(`<h1>oops there is problem `)
        })
}

const get_product_by_id = (req, res) => {

    const product_id = req.params.id;
    console.log(req.params)
    Product.find({ _id: product_id })
        .then((result) => {
            res.status(200).json({ result })



        }).catch((err) => {
            res.send(500).send(err)


        })



}

const get_ = (req, res) => {
    console.log("hhhh")
    res.redirect('/api/v1/store/' + req.params.id)
}





module.exports = { all_products, create_product, get_products, delete_product, get_product_by_id, get_ }