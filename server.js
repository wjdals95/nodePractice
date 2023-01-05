//server.js
const express = require('express'); //서버기능 구현을 위한 cors 모듈 express 호출
const path = require('path'); // 경로기능 구현하기 위한 모듈 호출
const cors = require('cors'); // 다른 서버와 연동 호출
const app = express(); //실행해라

const server = require('http').createServer(app);

app.use(cors()); // cors 미들웨어를 삽입합니다. 다른 도메인에서 너한테 요청오면 응답해라

app.get('/', (req,res) => { // 요청패스에 대한 콜백함수를 넣어줍니다. get, post, use
  res.send({message:'hello'});
});

server.listen(8080, ()=>{
  console.log('server is running on 8080')
})