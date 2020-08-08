const express = require('express');
const bodyParser = require('body-parser');
var fs = require('fs');




const router = express.Router();

//talesApi.use(bodyParser.json());

router.get('/talesApi/:id', (req, res, next) => {

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    fs.readFile('data.txt', 'utf-8', function (err, data) {

        if (!err) {
            var arr = data.split(' ');
            var map = arr.reduce(function (p, c) {
                p[c] = (p[c] || 0) + 1;
                return p;
            }, {});

            var newArr = Object.keys(map).sort(function (a, b) {
                return map[b] - map[a];
            });


            var final = newArr.splice(1, req.params.id)


            return res.end(JSON.stringify(final));


        }
        else
            throw err;
    });

})


module.exports = router;