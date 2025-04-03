export function parseRoutePath(path) {
    const routeParametersRegex = /:([a-zA-Z]+)/g

    const params = path.replaceAll(routeParametersRegex, '(?<$1>[a-z0-9]+)')//pegando o grupo nomeado da Regex

    const pathRegex = new RegExp(params)

    return pathRegex
}