class Business
{
    constructor(){

    }

     async method1(){

        return new Promise(async (resolve, reject) => {

            try {

                await this.method4();
                await this.method2();

                const resp = await new Promise(resolve => {
                    resolve(this.method3());
                })
                
                resolve(resp);
                
                
            } catch (error) {

                reject(error);
                
            }
            

        });

        
    }

    async method2(callback){

        setTimeout(() => {
            console.log('method2 finished');
           
        }, 5000);
        // callback();
        console.log('method2 second process');
    }

    async method3(){

        setTimeout(() => {
            console.log('method3 finished');
            return "test";
        }, 1000);
       // callback();
       console.log('method3 second process');
    }

    async method4(callback){

        setTimeout(() => {
            console.log('method4 finished');
         
        }, 10000);
       // callback();
       console.log('method4 second process');
    }



}

module.exports = Business;