import http from 'node:http';//biblioteca nativa do node, para ultilizar o import eu tenho que adicionar o type module no package.json

const server = http.createServer((request, response)=>{//criando um servidor
    return response.end('John Frank')//enviando uma resposta
}) 

server.listen(3333);//porta do servidor