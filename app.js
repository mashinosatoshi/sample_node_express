const express = require('express')
const cookieParser = require('cookie-parser')

const app = express();

app.use(cookieParser())
app.get('/', (req, res) => {
    console.log('get access.');
    console.log('--------body--------');
    console.log(req.body);
    console.log('--------cookies--------');
    console.log(req.cookies);
    console.log('--------headers--------');
    console.log(req.headers);
    console.log('--------headers.cookie--------');
    console.log(req.headers.cookie);
    res.send('Hello World!');
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));