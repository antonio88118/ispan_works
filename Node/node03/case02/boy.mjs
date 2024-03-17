// 分別匯出
// export const sayMyName = ()=>{
//     console.log("Kenny");
// }

// export const sayMyCountry = ()=>{
//     console.log("Taiwan");
// }

// 聚合匯出
// const sayMyName = ()=>{
//     console.log("Kenny");
// }

// const sayMyCountry = ()=>{
//     console.log("Taiwan");
// }

// export {sayMyName, sayMyCountry}

// 重新命名匯出
// const aa = ()=>{
//     console.log("Kenny");
// }

// const bb = ()=>{
//     console.log("Taiwan");
// }

// export {aa as sayMyName, bb as sayMyCountry}

// 預設匯出
// const sayMyName = ()=>{
//     console.log("Kenny");
// }

// const sayMyCountry = ()=>{
//     console.log("Taiwan");
// }

// export default {sayMyName, sayMyCountry}

// 混合匯出
const sayMyName = ()=>{
    console.log("Kenny");
}

export const sayMyCountry = ()=>{
    console.log("Taiwan");
}

export default sayMyName;