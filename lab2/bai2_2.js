const promise1 = new Promise ((resolve, reject) => {
    setTimeout(() => {
        reject("loi promise 1");
    }, 2000);
});

const promise2 = new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve("hoan thanh promise 2");
    }, 3000);
});

const promise3 = new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve("hoan thanh promise 3");
    }, 4000);
});

Promise.allSettled([promise1, promise2, promise3]).then((results) =>{
    console.log("tat ca cac promise da hoan thanh");
    results.forEach((results) => {
        if(results.status === "fulfilled") {
            console.log("promise hoan thanh: ", results.value);
        } else{
            console.log("promise that bai: ", results.reason);
        }
    });
});