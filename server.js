const express = require('express');

const app = express();

const PORT = 3000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

app.get('/gabriel', (_, res) => { res.send('Hello Gabriel') });

app.get('/michael', (_, res) => { res.send('Hello Michael') });

app.get('/amanda', (_, res) => { res.send('Hello Amanda') });

app.get('/mike', (_, res) => { res.send('Hello Mike') });

app.get('/mckenna', (_, res) => { res.send('Hello McKenna') });