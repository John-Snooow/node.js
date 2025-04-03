export function parseRoutePath(path) {
    const routeParametersRegex = /:([a-zA-Z]+)/g

    const params = path.replaceAll(routeParametersRegex, '(?<$1>[a-z0-9]+)')//pegando o grupo nomeado da Regex

    const pathRegex = new RegExp(`${params}(?<query>\\?(.*))?$`)

    return pathRegex
}

// /products?page=3&category=computer => apareceu o "?" é um parametro nomeado dele pra frente