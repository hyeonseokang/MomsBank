const express = require('express');
const path = require('path');
const morgan = require('morgan');
const {sequelize} = require('./models');

const {Account} = require('./models');

const app = express();
app.set('port', process.env.PORT || 8000);

sequelize.sync({force: false})
    .then(()=> {
        console.log('DataBase 연결 성공!');
    })
    .catch((err) => {
        console.error(err);
    });

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/test', (req, res) => {
    Account.create({
        name: '강현서',
        bank_name: '우리',
        account_number: '1231231231223',
    });

    res.send("hi");
});

app.listen(app.get('port'), ()=>{
    console.log(app.get('port'), '번 포트에서 대기 중');
});