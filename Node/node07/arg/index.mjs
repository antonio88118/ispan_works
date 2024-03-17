let isLog = process.argv[2].toLowerCase();
//  [0] 'C:\\Program Files\\nodejs\\node.exe',
//  [1] 'C:\\Users\\student\\Desktop\\Node.js\\node07\\arg\\index.mjs',
//  [2] 'true'
// console.log(process.argv);

let clg = content => {
    if (isLog === 'true') {
        console.log(content);
    }
}

clg(1 + 1);
clg("TEST");