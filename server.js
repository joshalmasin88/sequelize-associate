const express = require('express');
const db = require('./models');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// import routes
const userRoutes = require('./routes/user');
const postRoute = require('./routes/post');

app.use('/api/users' , userRoutes);
app.use('/api/post' , postRoute);

db.sequelize.sync().then(() => {
    app.listen(3000, () => {
        console.log('Server running on port 30000');
    })
});