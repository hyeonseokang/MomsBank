const express = require('express');
const path = require('path');
const morgan = require('morgan');
const deposit = require('./routes/deposit');
const transfer = require('./routes/transfer');

const {sequelize} = require('./models');


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

app.use('/deposit', deposit);
app.use('/transfer', transfer);

app.listen(app.get('port'), ()=>{
    console.log(app.get('port'), '번 포트에서 대기 중');
});