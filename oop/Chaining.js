class QueryBuilder {
  constructor() {
    this.query = "";
  }

  select(fields) {
    this.query += `SELECT ${fields} `;
    return this;
  }

  from(table) {
    this.query += `FROM ${table} `;
    return this;
  }

  where(condition) {
    this.query += `WHERE ${condition} `;
    return this;
  }

  build() {
    return this.query.trim();
  }
}

const query = new QueryBuilder()
  .select("*")
  .from("users")
  .where("age > 30")
  .build();

console.log(query);
