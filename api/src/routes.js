import { parseRoutePath } from "./utils/parseRoutePath.js"

export const routes =[// litas com rotas 
    {// primeira rota
        method: 'GET',
        path: '/products',
        cotroller:(request, response) => {          
            return response.end(JSON.stringify(request.query))
        },
    },
    {// segunda rota
        method: 'POST',
        path: '/products',
        cotroller:(request, response) => {
            return response.writeHead(201).end(JSON.stringify(request.body))
        },
    },
    {// terceira rota
        method: 'DELETE',
        path: '/products/:id',
        cotroller:(request, response) => {
            return response.end("Produto removido com ID: " + request.params.id)
        },
    },
    
].map((route) =>({//mapeando as rotas
    ...route,
    path: parseRoutePath(route.path),//pegando o caminho da rota / para que não seja necessário colocar o parseRoutePath em todas as rotas
}))