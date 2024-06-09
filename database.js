//Подключение к бд
const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'username', //имя для входа в бд
    password: 'password', //пароль
    host: 'hostname', //имя хоста
    port: 5432, //порт
    database: 'databsename' //имя базы данных
});

module.exports = pool;
