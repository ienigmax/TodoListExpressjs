import express from 'express';
const app = express();

app.use((req, res, next) => {
    console.info('Request: ', req);
    console.info('Response: ', res);
    next();
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(4000, () => {
    console.log('Listening on port 4000')
});