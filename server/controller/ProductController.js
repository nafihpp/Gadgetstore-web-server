const Products = require("../data/dummy.json");

const getAllProducts = (req, res) => {
    return res.status(200).json(Products);
};

const productDetails = (req, res) => {
    const { id } = req.params;
    console.log(id);
    const CurrentProduct = Products.find((product) => product.id == id);
    if (CurrentProduct) {
        return res.status(200).json(CurrentProduct);
    }
    return res.status(404).json({ message: "product Not Found" });
};

module.exports = {
    getAllProducts,
    productDetails,
};
