const express = require('express');
const exphbs = require('express-handlebars');
const { router, static } = require('./controllers/burgers_controller');
const db = require('./models/index');

const app = express();
const PORT = process.env.PORT || 3000;

//* Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//* Routes
app.use('/', router);
app.use(static);

db.sequelize.sync().then(() => {
    app.listen(PORT, () => console.log(`App running on port ${PORT}`));
});
