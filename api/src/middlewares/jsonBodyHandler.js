export async function jsonBodyHandler(request, response) {
    //adicionar cada chunck
    const buffers = []//criando um buffer para armazenar os dados da requisição

    //coleta os  chunks de dados da requisição
    for await (const chunk of request) {//enquanto houver dados na requisição
        buffers.push(chunk)//adicionando os dados da requisição ao buffer
    }

    try{
        //Concatena os chunk e converte para string em seguid converte a string para JSON
        request.body = JSON.parse(Buffer.concat(buffers).toString())
    }catch(error){
        request.body = null
    }

    //definindo o header de resposta como JSON
    response.setHeader('Content-Type', 'application/json')
}