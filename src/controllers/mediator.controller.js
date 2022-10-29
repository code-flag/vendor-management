const { getVendors } = require("../models/storage.manager");

const initData = async () => {
    vendorList = await getVendors();
    // console.log('vendors list', vendorList);
    return vendorList;
}

module.exports = {initData};