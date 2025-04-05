
import { routes } from '../routes.js';
import { extractQueryParams } from '../utils/extract-query-parms.js';
import { Database } from '../database.js';

const database = new Database()

export function routeHandler(request, response) {//criando o middlewares de rota
    const route = routes.find((route) => {
        return route.method === request.method && route.path.test(request.url)
    })//buscando a rota na lista de rotas

    if (route) {//verificando se a rota foi encontrada
        const routeParams = request.url.match(route.path)

        const { query, ...params} = routeParams.groups
        
        request.params = params
        request.query = query ? extractQueryParams(query) : {}
        
        return route.cotroller({request, response, database})//chamando a rota
    }

    return response.writeHead(404).end('Rota não encontrada')//quando não encontrar a rota ele vai enviar o 404  como erro
}