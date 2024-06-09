const express = require('express');
const bodyParser = require('body-parser');
const placeRouter = require('./routes/routes');
const PORT = process.env.PORT || 8080;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('src'));

app.get('/', (req, res) => {
    res.redirect('/main.html');
});

app.post('/form.html', (req, res) => {
    const { email, fullname, placetype, parkingPlace, starttime, endtime } = req.body;
    console.log(email, fullname, placetype, parkingPlace, starttime, endtime);
    res.redirect('/successfully.html');
});

// Роуты для API
app.use('/api', placeRouter);

// Запуск сервера
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
