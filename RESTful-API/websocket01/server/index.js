import WebSocket,{WebSocketServer} from 'ws'
const wss = new WebSocketServer({port: 8080})

wss.on('connection', connection => {
  console.log('新使用者已建立連線');

  connection.on('message', message => {
    console.log(`收到訊息 => ${message}`);

    // server廣播給所有使用者，新的使用者會註冊進clients陣列
    wss.clients.forEach(client => {
      // 若使用者處於連線中、可接收訊息的狀態
      if(client.readyState === WebSocket.OPEN) {
        // 送出訊息
        client.send(message)
      }
    })
  })

  // 關閉連線
  connection.on('close', () => {
    console.log('使用者已離開連線');
  })
})