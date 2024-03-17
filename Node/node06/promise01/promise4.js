let t1 = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("t1 執行結束");
            // 設定Pormise的解決回傳值
            resolve(55688);
        }, 2000);
    });
};

let t2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("t2 執行結束");
            // 會回報錯誤，並終止程式
            reject();
        }, 4000);
    });
};

let t3 = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("t3 執行結束");
            resolve();
        }, 1000);
    });
};

// 函數末端加上() => 立即執行函數
// (function(){})();
// 讓原本非線性的程式以線性執行
(async ()=>{
    let a1 = await t1();
    console.log(a1);
    // t1~3都是promise物件
    await t2().catch(() => {console.log("error");});
    await t3();
})();

// async function dodo(){
//     await t1();
//     await t2();
//     await t3();
// }

// dodo();