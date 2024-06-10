//Подключение к бд
const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'postgres', //имя для входа в бд
    password: 'changeme', //пароль
    host: 'localhost', //имя хоста
    port: 5432, //порт
    database: 'postgres' //имя базы данных
});

module.exports = pool;