//modificado por tutor
import { cartsRepository } from '../repository/carts.repository.js';
import { TicketsModel } from '../models/ticket.model.js';

export class CartsService {
  async createCart(newcartData) {
    const createdCart = await cartsRepository.createCart(newcartData);
    return createdCart.toPOJO();
  }

  async findCartById(cartId) {
    const cartById = await cartsRepository.findCartById(cartId);
    return cartById.toPOJO();
  }


  async findAllCarts() {
    const allCarts = await cartsRepository.findAllCarts();
    return allCarts.map(cart => cart.toPOJO());
  }

  async updateQuantityProdToCart(cartId, productId, newQuantity) {
    try {
      const quantity = parseInt(newQuantity);
      if (isNaN(quantity) || quantity < 0) {
        throw new Error('La nueva cantidad debe ser un número válido');
      }

      const cart = await cartsRepository.findCartById(cartId);
      const productInCart = cart.cart.find(item => item._id.toString() === productId);
      if (!productInCart) {
        throw new Error('El producto no existe.');
      }

      return await cartsRepository.updateQuantityProdToCart(cartId, productId, newQuantity);
    } catch (error) {
      console.error(`Error en el servicio `);
      throw new Error('Error al actualizar.');
    }
  }

  async purchaseCart(cartId) {
    try {
      const cartPurchase = await cartDao.findCartById(cartId);
      const failedProductIds = [];
      const _id = cart.user;

      const userFound = await usersDao.findOneUser({ _id });
      const email = user.email;

      const ticket = await this.createTicket(cart);

      await this.processProducts(cart, failedProductIds);

      await this.updateCartAfterPurchase(cart, failedProductIds);
/*/ email----------------------------------
      await emailService.send(
        user.email,
        '46Soles Agradece Su Compra!',
        `Nro ticket: ${ticket.code}`
      );*/

      return { ticket, failedProductIds };
    } catch (error) {
      console.error(`Error en el servicio`);
      throw new Error('Error al realizar la compra.');
    }
  }

  async updateCartAfterPurchase(cart, failedProductIds) {
    try {
      const failedProducts = cart.cart.filter((cartProduct) =>
        failedProductIds.includes(cartProduct.productID)
      );

      cart.cart = failedProducts;
      await cartDao.saveCart(cart);
    } catch (error) {
      console.error(`Error en el servicio`);
      throw new Error('Error al actualizar el carrito.');
    }
  }

  async addProductToCart(cartId, productId) {
    const addProdToCart = await cartsRepository.addProductToCart(cartId, productId);
    return addProdToCart(cartId, productId).toPOJO();
  }

  async deleteCartById(cartId) {
    const deletedCart = await cartsRepository.deleteCartById(cartId);
    return deletedCart.toPOJO();
  }

  async deleteProductFromCart(cartId, productId) {
    return await cartsRepository.deleteProductFromCart(cartId, productId);
  }
}
export const cartService = new CartsService();


/*
import { cartsRepository } from '../repositories/CartsRepository.js';

class CartsService {
    async createCart(newcartData) {
        const createdCart = await cartsRepository.createCart(newcartData);
        return createdCart.toPOJO(); 
    }

    async findCartById(cartId) {
        const cartById = await cartsRepository.findCartById(cartId);
        return cartById.toPOJO(); 
    }
    
    
    async findAllCarts() {
        const allCarts = await cartsRepository.findAllCarts();
        return allCarts.map(cart => cart.toPOJO()); 
    }

    async updateQuantityProdToCart(cartId, productId, newQuantity) {
        try {
          const quantity = parseInt(newQuantity);
          if (isNaN(quantity) || quantity < 0) {
            throw new Error('La nueva cantidad debe ser un número válido');
          }
    
          const cart = await cartsRepository.findCartById(cartId);
          const productInCart = cart.cart.find(item => item._id.toString() === productId);
          if (!productInCart) {
            throw new Error('El producto no existe.');
          }
    
          return await cartsRepository.updateQuantityProdToCart(cartId, productId, newQuantity);
        } catch (error) {
          console.error(`Error en el servicio `);
          throw new Error('Error al actualizar.');
        }
      }

async purchaseCart(cartId) {
    try {
      const cartPurchase = await cartDao.findCartById(cartId);
      const failedProductIds = [];
      const _id = cart.user;

      const user = await usersDao.findOne({ _id });
      const email = user.email;

      const ticket = await this.createTicket(cart);

      await this.processProducts(cart, failedProductIds);

      await this.updateCartAfterPurchase(cart, failedProductIds);

      await emailService.send(
        user.email,
        '46Soles Agradece su compra',
        'Fue Exitosa!',
        `Nro ticket: ${ticket.code}`
      );

      return { ticket, failedProductIds };
    } catch (error) {
      console.error(`Error en el servicio`);
      throw new Error('Error al realizar la compra.');
    }
  }

  async updateCartAfterPurchase(cart, failedProductIds) {
    try {
      const failedProducts = cart.cart.filter((cartProduct) =>
        failedProductIds.includes(cartProduct.productID)
      );

      cart.cart = failedProducts;
      await cartDao.saveCart(cart);
    } catch (error) {
      console.error(`Error en el servicio`);
      throw new Error('Error al actualizar el carrito.');
    }
  }

    async addProductToCart(cartId, productId) {
        const addProdToCart = await cartsRepository.addProductToCart(cartId, productId);
        return addProdToCart(cartId, productId).toPOJO(); 
    }

    async deleteCartById(cartId) {
        const deletedCart = await cartsRepository.deleteCartById(cartId);
        return deletedCart.toPOJO(); 
    }

    async deleteProductFromCart(cartId, productId) {
        return await cartsRepository.deleteProductFromCart(cartId, productId);
    }
}
export const cartService = new CartsService();*/
