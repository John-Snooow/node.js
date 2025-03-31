import http from 'node:http';//biblioteca nativa do node, para ultilizar o import eu tenho que adicionar o type module no package.json

const server = http.createServer((request, response)=>{//criando um servidor
    const { method } = request//metodo da requisição destruturado

    return response.writeHead(201).end('Criado com sucesso!')//enviando uma resposta/ quando eu não defino o status code ele vai enviar o 200 que é o padrao 
}) 

server.listen(3333);//porta do servidor