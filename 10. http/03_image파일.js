const http = require('http');
const fs = require('fs');

/* 최초의 대문 index.html은 이렇게 html으로 보내도 되는데 */
/* 그 이후의 view들은 js로 바꿔서 보냄(01_server기본.js)처럼 */
let server = http.createServer((req, res) => {
    /* 파일을 비동기로 읽는다. */
    fs.readFile('media/Elvis.png', /* 'utf8' 사진(바이너리) 데이터니까 utf8이 오면 안됨 */(error, image/* 데이터 읽기. 원래같았으면 data */) => {
        res.writeHead(200, { 'Content-type': 'image/png'/* 여기를 바꿔주지 않으면 바이너리 파일을 텍스트로 읽지를 못 함 */ });


        /* 제일 마지막에 나와야 함. 순서 중요 */
        res.end(image) /* html이라는 변수를 읽자. */
    })
});

server.listen(3000);