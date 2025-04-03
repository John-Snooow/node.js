export function extractQueryParams(query) {
  return query
    .slice(1)
    .split("&")
    .reduce((queryParams, param) => {
      const [key, value] = param.split("="); //pegando a chave e o valor do parametro

      queryParams[key] = value;

      return queryParams;
    }, {});
}
