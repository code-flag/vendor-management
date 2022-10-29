const express = require("express");
const { updateVendorFile } = require("../models/storage.manager");
const router = express.Router();

router.put("/", async (req, res) => {
    let incomingData = JSON.parse(JSON.stringify(req.body));
    console.log('new data', incomingData);
    let newData = incomingData.data;
    let fileName = incomingData.file_name;
    // check if parameters is not null or undefined
    if (!fileName && !newData) {
        res.status(400).json({data: incomingData, message: "Error: invalid parameter value or null value", status: 'error'})
    }
    else {
        try {
            updateVendorFile(newData, fileName);
      
            res.status(200).json({data: {}, message: "Updating vendor data completed", status: 'success'});
        } catch (error) {
            res.status(400).json({data: error, message: "Something went wrong could not update file", status: 'error'})
           
        }  
    }

   
});

module.exports = router;