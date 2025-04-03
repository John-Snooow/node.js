
import { routes } from '../routes.js';
export function routeHandler(request, response) {//criando o middlewares de rota
    const route = routes.find((route) => {
        return route.method === request.method && route.path.test(request.url)
    })//buscando a rota na lista de rotas

    if (route) {//verificando se a rota foi encontrada
        const routeParams = request.url.match(route.path)
        console.log(routeParams)//mostrando os parâmetros da rota
        const { ...params} = routeParams.groups
        
        request.params = params
        
        return route.cotroller(request, response)//chamando a rota
    }

    return response.writeHead(404).end('Rota não encontrada')//quando não encontrar a rota ele vai enviar o 404  como erro
}