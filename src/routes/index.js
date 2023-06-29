const UserRoute = require('./UserRouter');
const ProductRoute = require('./ProductRouter');

const routes = (app) => {
    app.use('/api/user', UserRoute);
    app.use('/api/product', ProductRoute);
};

module.exports = routes;