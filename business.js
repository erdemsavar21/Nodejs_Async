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

       const res = await this.method2_1();

        console.log('method2 second process');

        return res;


    }

    async method3(res, callback) {



        setTimeout(() => {
            console.log('method3 finished');
            callback(res);
        }, 2000);
        // callback();
        console.log('method3 second process');


    }

    async method2_1() {

        return new Promise(async (resolve, reject) => {

            setTimeout(() => {
                console.log('method2 first process');
                resolve("testtt");
            }, 5000);

        });

    }



}

module.exports = Business;