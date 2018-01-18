"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.get('/', (req, res) => {
    res.render('index', {});
});
app.get('*', (req, res) => {
    res.send('Page Not Found');
});
var server = app.listen(3000, () => {
    console.log('Listening on port 3000');
});
//# sourceMappingURL=index.js.map