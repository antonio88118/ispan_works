import { readFileSync, writeFileSync } from "fs";

let data = readFileSync("../video/movie.mp4");
// 複製一份檔案，取名movie2
writeFileSync("../video/movie2.mp4", data);