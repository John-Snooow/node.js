import http from 'node:http';//biblioteca nativa do node, para ultilizar o import eu tenho que adicionar o type module no package.json
import { jsonBodyHandler } from './middlewares/jsonBodyHandler.js';

const server = http.createServer(async(request, response)=>{//criando um servidor
    const { method, url } = request//metodo da requisição destruturado e a url do request

    await jsonBodyHandler(request, response)//chamando o middlewares

    if(method === 'GET' && url === '/products'){//se o metodo for GET e a url for /products
        return response.end('Lista de produtos!')//enviando uma resposta da lista de produtos
    }

    if (method === 'POST' && url === '/products'){//se o metodo for POST e a url for /products

        return response.writeHead(201).end(JSON.stringify(request.body))//enviando uma resposta / quando eu defino o status code ele vai enviar o 201

    }

    return response.writeHead(404).end('Rota não encontrada')//quando não encontrar a rota ele vai enviar o 404  como erro
}) 

server.listen(3333);//porta do servidor