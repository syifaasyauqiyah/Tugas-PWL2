import { Sequelize } from "sequelize";

const db = new Sequelize ('tugas2pwl', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

export default db;