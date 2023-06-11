const express = require("express");
require("dotenv").config();
const cors = require("cors");
//routes import
const ProductRouter = require("./routes/ProductRouter");

const app = express();
//Port
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());

//routes
app.use("/api", ProductRouter);

app.listen(PORT, () => {
    console.log(`server running in ${PORT}`);
});
