export class Database {
  database = {};

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
