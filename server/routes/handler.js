const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const str = [{
        "name": "Iguana"
    }];

    res.end(JSON.stringify(str));
});

router.post('/', (req, res) => {
    res.end('NA');
});