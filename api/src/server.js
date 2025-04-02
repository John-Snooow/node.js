import http from 'node:http';//biblioteca nativa do node, para ultilizar o import eu tenho que adicionar o type module no package.json
import { jsonBodyHandler } from './middlewares/jsonBodyHandler.js';
import { routeHandler } from './middlewares/routeHandler.js';

const server = http.createServer(async(request, response)=>{//criando um servidor
    await jsonBodyHandler(request, response)//chamando o middlewares
    routeHandler(request, response)//chamando o middlewares de rota

}) 

server.listen(3333);//porta do servidor