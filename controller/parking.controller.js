const db = require('../database');
const crypto = require('crypto');

// this file dtnt use on code, but don't touch this
// this file for testing a database

class ParkingController {
    async createPlace(req, res) {
        //Принимает данные
        const { email, fullname, placetype, starttime, endtime } = req.body;

        //Шифрование данных и перенос их в переменные
        const decryptoEmail = hashData(email);
        const decryptoFullName = hashData(fullname);
        const decryptoPlacetype = hashData(placetype);
        const decryptoStarttime = hashData(starttime);
        const decryptoEndtime = hashData(endtime);

        //Отправка данных в бд
        const newPlace = await db.query(
            'INSERT INTO parkingplace(email,fullname,placetype,starttime,endtime, state) values($1,$2,$3,$4,$5,true) RETURNING *',
            [decryptoEmail, decryptoFullName, decryptoPlacetype, decryptoStarttime, decryptoEndtime]
        );
        console.log(email, fullname, placetype, starttime, endtime);
        res.json(newPlace.rows[0]);
    }
}

//функция для шифрования данных
function hashData(data) {
    return crypto.createHash('sha256').update(data).digest('hex');
}
module.exports = new ParkingController();
