const express = require("express");
const { initData } = require("./mediator.controller");
const router = express.Router();

router.get("/", async (req, res) => {
    // const data = await initData();
    res.render('home', {vendorsData: ''});
});

module.exports = router;