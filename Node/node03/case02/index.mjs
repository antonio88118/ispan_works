// import {sayMyName, sayMyCountry} from "./boy.mjs";

// 適用: 直接命名匯出、聚合匯出、重新命名匯出
// sayMyName();
// sayMyCountry();

// 預設匯出的匯入方式
// import boy from "./boy.mjs";
// boy.sayMyName();
// boy.sayMyCountry();

// 混合匯出的匯入方式
import sayMyName, { sayMyCountry } from "./boy.mjs";
sayMyName();
sayMyCountry();