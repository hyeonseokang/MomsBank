const express = require('express');
const path = require('path');
const morgan = require('morgan');
const dotenv = require('dotenv');
dotenv.config();

const deposit = require('./routes/deposit');
const transfer = require('./routes/transfer');
const account = require('./routes/account');
const getAll = require('./routes/getAll');
const react_router = require('./routes/react_router');

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
    
if (process.env.NODE_ENV === 'production') {
    app.use(margan('combined'));
}
else {
    app.use(morgan('dev'));
}

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/deposit', deposit);
app.use('/transfer', transfer);
app.use('/getall', getAll);
app.use(process.env.ACCOUNT_ROUTE, account);
app.use('/', react_router);

app.listen(app.get('port'), ()=>{
    console.log(app.get('port'), '번 포트에서 대기 중');
});