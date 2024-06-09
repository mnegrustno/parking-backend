# PARKING BACKEND
## Описание проекта
Веб-приложение которое принимает данные и шифрует их, после чего записывает в базу данных.
А также является дополнение стороннего проекта 
## Файловая структура
* database.js - подключение к базе данных
* parking-controller.js - обработка и шифрование данных
* rutes.js - маршрут для запросов
* parking-backend.js - сервер
* database.sql - скрипт для создания таблицы
  
## Настройка и запуск проекта
* В файле database.js меняете данные
```js
user:"username",//имя для входа в бд
password:"password",//пароль
host:"hostname",//имя хоста
port:5432,//порт
database:"databsename"//имя базы данных
```
* В posgresql создаете таблицу с помощью скрипта из database.sql
```sql
create table parkingplace(
placeid SERIAL PRIMARY KEY,
	email VARCHAR(255) NOT NULL,
	fullname VARCHAR(255) NOT NULL,
	placetype VARCHAR(255) NOT NULL,
	starttime VARCHAR(255) NOT NULL,
	endtime VARCHAR(255) NOT NULL
	
);
```
* Запуск сервера


```
npm i
```

```
npm run dev
```

## URL для запроса
```
http://localhost:8080/api/createplace
```

