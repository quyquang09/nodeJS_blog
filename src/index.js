const path = require('path');
const express = require('express');
// const morgan = require('morgan')
const exphbs = require('express-handlebars');
const router = require('./routes');

const app = express();
const port = 3000;
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.engine('hbs', exphbs.engine({ defaultLayout: 'main', extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

router(app);

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
