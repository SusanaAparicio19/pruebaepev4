//modificado del tutor
import { CartsDao } from '../dao/carts.dao.js';

class CartsRepository {
    async createCart(newcartData) {
        return await CartsDao.createCart(newcartData);
    }

    async findCartById(cartId) {
        return await CartsDao.findCartById(cartId);
    }

    async findAllCarts() {
        return await CartsDao.findAllCarts();
    }

    async updateQuantityProdToCart(cartId, productId, newQuantity) {
        return await CartsDao.updateQuantityProdToCart(cartId, productId, newQuantity);
    }

    async addProductToCart(cartId, productId) {
        return await CartsDao.addProductToCart(cartId, productId);
    }

    async deleteCartById(cartId) {
        return await CartsDao.deleteCartById(cartId);
    }

    async deleteProductFromCart(cartId, productId) {
        return await CartsDao.deleteProductFromCart(cartId, productId);
    }
}

export const cartsRepository = new CartsRepository()


/*
import { CartsDao } from '../dao/carts.dao.js';

class CartsRepository {
    async createCart(newcartData) {
        return await CartsDao.createCart(newcartData);
    }

    async findCartById(cartId) {
        return await CartsDao.findCartById(cartId);
    }

    async findAllCarts() {
        return await CartsDao.findAllCarts();
    }

    async updateQuantityProdToCart(cartId, productId, newQuantity) {
        return await CartsDao.updateQuantityProdToCart(cartId, productId, newQuantity);
    }

    async addProductToCart(cartId, productId) {
        return await CartsDao.addProductToCart(cartId, productId);
    }

    async deleteCartById(cartId) {
        return await CartsDao.deleteCartById(cartId);
    }

    async deleteProductFromCart(cartId, productId) {
        return await CartsDao.deleteProductFromCart(cartId, productId);
    }
}

export const cartsRepository = new CartsRepository()*/