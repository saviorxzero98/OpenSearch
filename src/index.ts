import * as express from 'express';
import * as ejs from 'ejs';
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'))
app.get('/', (req, res) => {
    let engine = req.query.engine || 'google';
    let title = req.query.title || 'Google';
    res.render('index', { engine: engine, title: title });
});
app.get('*', (req, res) => {
    res.send('Page Not Found');
});
var server = app.listen(3000, () => {
    console.log('Listening on port 3000');
});   