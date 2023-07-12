const UserRoute = require('./UserRouter');
const ProductRoute = require('./ProductRouter');
const OrderRoute = require('./OrderRouter');

const routes = (app) => {
    app.use('/api/user', UserRoute);
    app.use('/api/product', ProductRoute);
    app.use('/api/order', OrderRoute);
};

module.exports = routes;
