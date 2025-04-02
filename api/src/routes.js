// litas com rotas 
export const routes =[
    {// primeira rota
        method: 'GET',
        path: '/products',
        cotroller:(request, response) => {
            return response.end('Lista de produtos!')
        },
    },
    {// segunda rota
        method: 'POST',
        path: '/products',
        cotroller:(request, response) => {
            return response.writeHead(201).end(JSON.stringify(request.body))
        },
    },
    
]