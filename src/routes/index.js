const UserRoute = require('./UserRouter');
const ProductRoute = require('./ProductRouter');
const OrderRoute = require('./OrderRouter');
const PaymentRouter = require('./PaymentRouter');
const CategoryRouter = require('./CategoryRouter');

const routes = (app) => {
    app.use('/api/user', UserRoute);
    app.use('/api/product', ProductRoute);
    app.use('/api/order', OrderRoute);
    app.use('/api/payment', PaymentRouter);
    app.use('/api/category', CategoryRouter);
};

module.exports = routes;
