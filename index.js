'use strict'

const express = require('express');
const humanInterval = require('human-interval');
const fs = require('fs');

const props = JSON.parse(fs.readFileSync(`${__dirname}/properties.json`).toString());

const app = express();

let requests = 0;
setInterval(() => {
    requests = 0;
}, humanInterval(props.timeWindow));

const makeServerSlow = (req, res, next) => {
    if (requests++ > props.maxRequests) {
        setTimeout(next, humanInterval(props.slowTime));
    } else {
        next();
    }
};
app.use(makeServerSlow);

app.get('/users/:userId', (req, res, next) => {
    res.json({
        userId: req.params.userId,
        name: `Mr. User number ${req.params.userId}`
    });
});
app.listen(props.listenPort, () => {
    console.info(`Server listening port ${props.listenPort}`)
});
