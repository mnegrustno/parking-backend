const addingData = async (email, fullname, placetype, parkingPlace, starttime, endtime) => {
    const decryptoEmail = hashData(email);
    const decryptoFullName = hashData(fullname);

    await db.query(
        'INSERT INTO parkingplace(email,fullname,placetype,starttime,endtime) values($1,$2,$3,$4,$5) RETURNING *',
        [decryptoEmail, decryptoFullName, decryptoPlacetype, decryptoStarttime, decryptoEndtime]
    );
}