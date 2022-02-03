class Business
{
    constructor(){

    }

     async method1(callback){

        return new Promise(async (resolve, reject) => {

            try {

                await new Promise(resolve => {

                    setTimeout(() => {
                        
                        reject('abooo'); //
                        //throw Error('errrorrr') //
                        console.log('method1 first process');
                        resolve();
                    }, 10000);

                });
                
                
                console.log('method1 second process');
                resolve("XXX");
                
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

    async method3(callback){

        setTimeout(() => {
            console.log('method3 finished');
         
        }, 1000);
       // callback();
       console.log('method3 second process');
    }

    method4(){
        return new Promise((resolve,reject) => {

            setTimeout(() => {
            
                resolve('xxx');
             
            }, 2000);

        });
        
    }



}

module.exports = Business;