import WebSocket, { WebSocketServer } from "ws";
const wss = new WebSocketServer({ port: 8080 });

const clients = {};
// 房間列表
const rooms = {};

wss.on("connection", (connection) => {
  console.log("新使用者已建立連線");

  // 當連線物件收到客戶端傳入的訊息
  connection.on("message", (message) => {
    // 解析訊息
    const msgObj = JSON.parse(message);

    // 當使用者第一次建立連線（註冊）
    if (msgObj.type === "register") {
      const userID = msgObj.userID;
      connection.userID = userID;
      // 物件[屬性]：為物件新增該屬性
      // connection是物件，目前結構為clients{ userID: connection{}}
      clients[userID] = connection;
      // 將記錄所有用戶的 clients 物件的 KEY 值轉成陣列，放在變數 otherClients
      const otherClients = Object.keys(clients);
      let allRooms = [];
      for (let [key, value] of Object.entries(rooms)) {
        allRooms.push({ id: key, name: value.name });
      }

      wss.clients.forEach((client) => {
        // 檢查是否處於連線狀態
        if (client.readyState === WebSocket.OPEN) {
          // 回傳register屬性值的物件，裡面還包括連線者名單
          client.send(
            JSON.stringify({
              type: "register",
              otherClients,
              allRooms,
            })
          );
        }
      });
    }
    // 傳送訊息
    if (msgObj.type === "message") {
      const targetUserID = msgObj.targetUserID;
      const fromID = msgObj.userID;
      const roomID = msgObj.roomID;
      if (roomID) {
        // 小房間內公開聊天
        if (!targetUserID) {
          let clientList = rooms[roomID].userList;
          clientList.forEach((client) => {
            let targetClient = clients[client];
            if (targetClient && targetClient.readyState === WebSocket.OPEN) {
              targetClient.send(
                JSON.stringify({
                  type: "message",
                  message: msgObj.message,
                  roomID,
                  fromID,
                })
              );
            }
          });
        } else {
          // 小房間內悄悄話
          const targetClient = clients[targetUserID];
          if (targetClient && targetClient.readyState === WebSocket.OPEN) {
            targetClient.send(
              JSON.stringify({
                type: "message",
                message: msgObj.message,
                fromID,
                private: true,
              })
            );
          }
        }
        return false;
      }
      // 大廳聊天
      // 只有公開聊天，因為無使用者名稱
      wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(
            JSON.stringify({
              type: "message",
              message: msgObj.message,
              fromID,
            })
          );
        }
      });
    }
    // 建立房間
    if (msgObj.type === "createRoom") {
      const { roomID, roomName, userID: fromID } = msgObj;
      rooms[roomID] = {
        id: roomID,
        name: roomName,
        userList: [fromID],
      };
      let allRooms = [];
      for (let [key, value] of Object.entries(rooms)) {
        allRooms.push({ id: key, name: value.name });
      }
      wss.clients.forEach((client) => {
        // 是否處於連線狀態
        if (client.readyState === WebSocket.OPEN) {
          // 回傳新的聊天室名單
          client.send(
            JSON.stringify({
              type: "newRoom",
              allRooms,
            })
          );
        }
      });
    }
    // 加入房間
    if (msgObj.type === "joinRoom") {
      const roomID = msgObj.roomID;
      const fromID = msgObj.userID;
      // 在目前聊天室的成員名單末，增加新成員
      rooms[roomID].userList.push(fromID);
      // 使用變數儲存成員名單
      let clientList = rooms[roomID].userList;
      clientList.forEach((client) => {
        let targetClient = clients[client];
        if (targetClient && targetClient.readyState === WebSocket.OPEN) {
          targetClient.send(
            JSON.stringify({
              type: "joinRoom",
              roomID,
              fromID,
              clientList
            })
          );
        }
      });
    }

    // 離開房間 + 關閉房間
    if (msgObj.type === "leaveRoom") {
      const roomID = msgObj.roomID;
      const fromID = msgObj.userID;
      rooms[roomID].userList = arrayRemove(rooms[roomID].userList, fromID);
      // 僅對聊天室剩下的成員廣播
      let clientList = rooms[roomID].userList;
      clientList.forEach((client) => {
        let targetClient = clients[client];
        if (targetClient && targetClient.readyState === WebSocket.OPEN) {
          targetClient.send(
            JSON.stringify({
              type: "leaveRoom",
              roomID,
              fromID,
              clientList,
            })
          );
        }
      });
      // 當最後一位成員離開房間，刪除房間，同時對所有人發出newRoom通知
      if (rooms[roomID].userList.length === 0) {
        delete rooms[roomID];
      }
      let allRooms = [];
      for (let [key, value] of Object.entries(rooms)) {
        allRooms.push({ id: key, name: value.name });
      }
      wss.clients.forEach((client) => {
        // 是否處於連線狀態
        if (client.readyState === WebSocket.OPEN) {
          // 回傳新的聊天室名單
          client.send(
            JSON.stringify({
              type: "newRoom",
              allRooms,
            })
          );
        }
      });
    }
  });

  connection.on("close", () => {
    const dsID = connection.userID;
    if (dsID) {
      delete clients[dsID];
    }
    const otherClients = Object.keys(clients);
    console.log(otherClients);
    wss.clients.forEach((client) => {
      // 是否處於連線狀態
      if (client.readyState === WebSocket.OPEN) {
        client.send(
          JSON.stringify({
            type: "disconnected",
            otherClients,
            disconnectedID: dsID,
          })
        );
      }
    });
  });
});

function arrayRemove(arr, value) {
  return arr.filter((item) => {
    return item != value;
  });
}

// 預計訊息規劃
// {
//     type: "register",
//     userID: 120127983747234 (建立時間)
// }

// {
//     type: "message",
//     userID: 120127983747234,
//     targetUserID? ,
//     message: "你好",
//     private?
// }

// {
//     type: "createRoom",
//     roomID,
//     roomName
// }

// {
//     type: "joinRoom",
//     roomID,
//     userID,
//     clientList
// }
