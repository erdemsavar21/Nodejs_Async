class Business {
    constructor() {

    }

    async method1() {

        return new Promise(async (resolve, reject) => {

            try {

                const res = await this.method2();
                
                await this.method3(res, resolve);



            } catch (error) {

                reject(error);

            }


        });


    }

    async method2() {


        return new Promise(async (resolve, reject) => {

            try {


                setTimeout(() => {
                    console.log('method2 finished');
                    resolve("testtt")
                }, 5000);
                // callback();
                console.log('method2 second process');

            } catch (error) {

                reject(error);

            }


        });

    }

    async method3(res, callback) {



        setTimeout(() => {
            console.log('method3 finished');
            callback(res);
        }, 2000);
        // callback();
        console.log('method3 second process');


    }

    async method4() {

        setTimeout(() => {
            console.log('method4 finished');
            callback();
        }, 10000);
        // callback();
        console.log('method4 second process');
    }



}

module.exports = Business;