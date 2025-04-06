import fs from "node:fs/promises"//biblioteca nativa do node
import { console } from "node:inspector";
const DATABASE_PATH = new URL("db.json", import.meta.url);//pegando o caminho do banco de dados

export class Database {
  database = {};

  constructor() {//É executado automaticamente quando a classe é distanciada / 'const database = new Database() em routeHandler'
    fs.readFile(DATABASE_PATH, "utf-8")//lendo o banco de dados
      .then((data) => {
        this.database = JSON.parse(data)//convertendo o banco de dados para JSON
    })
    .catch(() => this.persist())
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

    this.persist()
  }
  //select PARA SELECIONAR
  select(table) {
    return this.database[table] 
  }
}
