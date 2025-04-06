import fs from "node:fs/promises"//biblioteca nativa do node
const DATABASE_PATH = new URL("db.json", import.meta.url);//pegando o caminho do banco de dados

export class Database {
  database = {};

  constructor() {//É executado automaticamente quando a classe é distanciada / 'const database = new Database() em routeHandler'
    this.persist()
  }

  persist() {
    fs.writeFile(DATABASE_PATH, JSON.stringify(this.database))//salvando o banco de dados
  }

  //insert PARA INSERIR
  insert(table, data) {
    if (Array.isArray(this.database[table])) {
      this.database[table].push(data);
    } else {
      this.database[table] = [data];
    }
  }
  //select PARA SELECIONAR
  select(table) {
    return this.database[table] 
  }
}
