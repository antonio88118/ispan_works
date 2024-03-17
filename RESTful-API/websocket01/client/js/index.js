const chatBox = document.querySelector('#chat-box')
const chatInput = document.querySelector('[name=chatInput]')
const btnSend = document.querySelector('button')
const ws = new WebSocket('ws://localhost:8080')

// 當連線開啟時
ws.addEventListener('open', () => {
    console.log('連接到 WebSocket 伺服器');
})

ws.addEventListener('message', async e => {
    // client等待server廣播出的訊息，收到後轉換成字串
    const msg = await e.data.text();
    // 加入訊息區塊
    chatBox.innerHTML += `<div>${msg}</div>`
})

btnSend.addEventListener('click', () => {
    const msg = chatInput.value
    ws.send(msg)
    chatInput.value = ''
})