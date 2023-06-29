const Product = require('../models/ProductModel');
const bcrypt = require('bcrypt');

const createProduct = (newProduct) => {
    return new Promise(async (resolve, reject) => {
        const {
            name,
            image,
            type,
            author,
            sold,
            price,
            pricesale,
            countInStock,
            rating,
            description,
            discount,
            chapter,
        } = newProduct;
        try {
            const checkProduct = await Product.findOne({
                name: name,
            });
            if (checkProduct !== null) {
                resolve({
                    status: 'ERR',
                    message: 'The name of product is already',
                });
            }
            const newProduct = await Product.create({
                name,
                image,
                type,
                author,
                sold,
                pricesale,
                countInStock,
                price,
                rating,
                description,
                discount,
                chapter,
            });
            if (newProduct) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newProduct,
                });
            }
        } catch (e) {
            reject(e);
        }
    });
};
const updateProduct = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkProduct = await Product.findOne({
                _id: id,
            });
            if (checkProduct === null) {
                resolve({
                    status: 'ERR',
                    message: 'The user is not defined',
                });
            }
            const updatedProduct = await Product.findByIdAndUpdate(id, data, { new: true });
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedProduct,
            });
        } catch (e) {
            reject(e);
        }
    });
};

const deleteProduct = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkProduct = await Product.findOne({
                _id: id,
            });
            if (checkProduct === null) {
                resolve({
                    status: 'ERR',
                    message: 'The user is not defined',
                });
            }
            await Product.findByIdAndDelete(id);
            resolve({
                status: 'OK',
                message: 'Delete SUCCESS',
            });
        } catch (e) {
            reject(e);
        }
    });
};

const getDetailProduct = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const product = await Product.findOne({
                _id: id,
            });
            if (product === null) {
                resolve({
                    status: 'ERR',
                    message: 'The product is not defined',
                });
            }
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: product,
            });
        } catch (e) {
            reject(e);
        }
    });
};
const getAllProduct = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalProduct = await Product.count();
            if (filter) {
                const label = filter[0];
                const allProductFilter = await Product.find({
                    [label]: { $regex: filter[1] },
                });
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allProductFilter,
                    total: totalProduct,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalProduct / limit),
                });
            }
            if (sort) {
                const objectSort = {};
                objectSort[sort[1]] = sort[0];
                const allProductSort = await Product.find()
                    .limit(limit)
                    .skip(page * limit)
                    .sort(objectSort);
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allProductSort,
                    total: totalProduct,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalProduct / limit),
                });
            }

            const getAllProduct = await Product.find()
                .limit(limit)
                .skip(page * limit)
                .sort({
                    name: sort,
                });
            resolve({
                status: 'OK',
                message: 'Delete SUCCESS',
                data: getAllProduct,
                total: totalProduct,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalProduct / limit),
            });
        } catch (e) {
            reject(e);
        }
    });
};
module.exports = {
    createProduct,
    updateProduct,
    getDetailProduct,
    deleteProduct,
    getAllProduct,
};