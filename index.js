const express = require('express');
const path = require('path')
const socketIO = require('socket.io')
const app = express()

app.use('/', express.static(path.join(__dirname,'public')))

const server = app.listen(3000,()=>{
    console.log('Server Run!')
})

const messages = []

const io = socketIO(server)

io.on('connection',(socket)=>{

    socket.on('new_message', (data)=>{
        messages.push(data.msg)

        io.emit('update_message', messages)

    })
})