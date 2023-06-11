const Products = require("../data/dummy.json");

const getAllProducts = async (req, res) => {
    try {
        console.loog(Products);
        return res.status(200).json(Products);
    } catch (error) {
        res.status(400).json({
            message: error,
        });
    }
};

const productDetails = async (req, res) => {
    try {
        console.log(Products, "==prod");
        return res.status(200).json({ message: "successfully added task" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllProducts,
    productDetails,
};
