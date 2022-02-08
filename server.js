const express = require('express');
const Business = require('./business');

const api = express();

api.use("/get", async (req, res, next) => {

    const result = await main();

    res.json({
        success : result
    });

});

const main = async () => {
    
    console.log('Process started');
    const business = new Business();

    const ret = await business.method1();
 
    console.log('Process end');

    return ret;
}



api.listen(2121, () => {

    console.log("App started on 2121 port");

});
