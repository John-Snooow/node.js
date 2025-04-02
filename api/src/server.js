import http from 'node:http';//biblioteca nativa do node, para ultilizar o import eu tenho que adicionar o type module no package.json

const server = http.createServer(async(request, response)=>{//criando um servidor
    const { method, url } = request//metodo da requisição destruturado e a url do request

    if(method === 'GET' && url === '/products'){//se o metodo for GET e a url for /products
        return response.end('Lista de produtos!')//enviando uma resposta da lista de produtos
    }

    if (method === 'POST' && url === '/products'){//se o metodo for POST e a url for /products
        const buffers = []//criando um buffer para armazenar os dados da requisição

        for await (const chunk of request) {//enquanto houver dados na requisição
            buffers.push(chunk)//adicionando os dados da requisição ao buffer
        }

        console.log(Buffer.concat(buffers).toString())//imprimindo o buffer que veio em padaços do emsomnia e montou no terminal / ultilizo o Buffer para transformar os dados em uma string ja montados no terminal

        return response.writeHead(201).end('Prodduto cadastrado!')//enviando uma resposta / quando eu defino o status code ele vai enviar o 201

    }

    return response.writeHead(404).end('Rota não encontrada')//quando não encontrar a rota ele vai enviar o 404  como erro
}) 

server.listen(3333);//porta do servidor