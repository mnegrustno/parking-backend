const crypto = require('crypto');
const pool = require("./database");

const addingData = async (email, fullname, placetype, parkingplace, starttime, endtime) => {
    // const decryptoEmail = SHA256(email);
    const cryptoEmail = crypto.createHash('sha256').update(email).digest('hex'); 
    const cryptoFullName = crypto.createHash('sha256').update(fullname).digest('hex'); 

    await pool.query(
        'INSERT INTO parkingplace(email,fullname,place_type,parking_place,start_time,end_time,state) values($1,$2,$3,$4,$5,$6,true) RETURNING *',
        [cryptoEmail, cryptoFullName, placetype, parkingplace, starttime, endtime]
    );
}

module.exports = addingData;