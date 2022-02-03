const express = require('express');
const Business = require('./business');

const api = express();

api.use("/get", (req, res, next) => {

    main();

    res.json({
        success : true
    });

});

const main = async () => {
    console.log('Process started');
    const business = new Business();



    const res = await business.method1().catch(reject => console.log(reject));
    console.log(res);


    await business.method2();

    await business.method3();

    //const ret = await business.method4();
    //console.log(ret);


    console.log('Process end');
}



api.listen(2121, () => {

    console.log("App started on 2121 port");

});