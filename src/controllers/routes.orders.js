const express = require("express");
const { getData } = require("../models/database/in-memory/in-memory-db");
const storageKey = require("../models/database/in-memory/storage-keys");
const router = express.Router();

router.get("/", async (req, res) => {
    // get stored orders
    storageData = getData(storageKey);
    res.render('stat', {data: {orders: storageData, total: storageData?.length}, helpers: {
        resVal(val) { return JSON.parse(val); }
    }});
    
});

module.exports = router;