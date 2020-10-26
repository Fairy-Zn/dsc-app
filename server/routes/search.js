const express = require("express");
const router = express.Router();
const SearchController = require("../controller/searchController")
router.get("/", SearchController.SearchList)
module.exports = router