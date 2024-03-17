import WebSocket, {WebSocketServer} from "ws";
const wss = new WebSocketServer({port: 8080});

const clients = {};

wss.on('connection', connection => {
    console.log('新使用者已建立連線');

    // 當連線物件收到客戶端傳入的訊息
    connection.on('message', message => {
        // 解析訊息
        const msgObj = JSON.parse(message);

        // 當使用者第一次建立連線（註冊）
        if(msgObj.type === "register") {
            const userID = msgObj.userID;
            connection.userID = userID;
            // 物件[屬性]：為物件新增該屬性
            // connection是物件，目前結構為clients{ userID: connection{}}
            clients[userID] = connection;
            // 將記錄所有用戶的 clients 物件的 KEY 值轉成陣列，放在變數 otherClients
            const otherClients = Object.keys(clients);
            console.log(otherClients);

            wss.clients.forEach(client => {
                // 檢查是否處於連線狀態
                if(client.readyState === WebSocket.OPEN) {
                    // 回傳register屬性值的物件，裡面還包括連線者名單
                    client.send(JSON.stringify({
                        type: "register",
                        otherClients
                    }));
                }
            })
        }
    });

    connection.on('close', () => {
        const dsID = connection.userID;
        if(dsID){
            delete clients[dsID];
        }
        const otherClients = Object.keys(clients);
            console.log(otherClients);
            wss.clients.forEach(client => {
                // 是否處於連線狀態
                if(client.readyState === WebSocket.OPEN) {
                    client.send(JSON.stringify({
                        type: "disconnected",
                        otherClients,
                        disconnectedID: dsID
                    }));
                }
            })
    });

})

// 預計訊息規劃
// {
//     type: "register",
//     userID: 120127983747234 (建立時間)
// }

// {
//     type: "message",
//     userID: 120127983747234,
//     message: "你好"
// }