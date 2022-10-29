const express = require("express");
const { saveData, getData } = require("../models/database/in-memory/in-memory-db");
const storageKey = require("../models/database/in-memory/storage-keys");
const { initData } = require("./mediator.controller");
const router = express.Router();

router.get("/", async (req, res) => {
    const data = await initData();
    res.render('order-form', {vendorsData: JSON.stringify(data)});
});

router.post("/", async (req, res) => {
    let incomingData = JSON.parse(JSON.stringify(req.body));
    console.log('data', incomingData);
    storageData = getData(storageKey);
    if (!storageData) {
        storageData = [];
        storageData.push(incomingData);
         // save data to in-memory cache 
         console.log('data', incomingData);
         let response = saveData(storageKey, storageData);
        if (response) {
            res.status(200).json({data: {}, message: "Order processing comppleted", status: 'success'});
        }
        else {
            res.status(400).json({data: incomingData, message: "Something went wrong. Try again", status: 'error'});
        }
    }
    else {
        storageData.push(incomingData);
         // save data to in-memory cache 
         let response = saveData(storageKey, storageData);
        if (response) {
            res.status(200).json({data: {}, message: "Order processing comppleted", status: 'success'});
        }
        else {
            res.status(400).json({data: incomingData, message: "Something went wrong. Try again", status: 'error'});
        }
    }
   
    
});

module.exports = router;