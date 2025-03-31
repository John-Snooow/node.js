import http from 'node:http';//biblioteca nativa do node, para ultilizar o import eu tenho que adicionar o type module no package.json

const server = http.createServer((request, response)=>{//criando um servidor
    return response.end('Metodo:' + request)//enviando uma resposta do metodo da requisição "se é GET ou POST etc..."
}) 

server.listen(3333);//porta do servidor