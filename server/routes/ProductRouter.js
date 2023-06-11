const express = require("express");
const router = express.Router();
const {
    getAllProducts,
    productDetails,
} = require("../controller/ProductController");

router.get("/all-products", getAllProducts);
router.get("/product/:id", productDetails);

module.exports = router;
