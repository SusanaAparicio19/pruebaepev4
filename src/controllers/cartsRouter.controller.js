//MODIFICADO CON TUTOR

import { CartsService } from "../service/carts.service.js";
import { CartsDao } from "../dao/carts.dao.js";

export const findAllCarts = async (req, res) => {
  try {
    const carts = await CartsService.findAllCarts();
    res.json(carts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const findCartById = async (req, res) => {
  try {
    const cartById = await CartsService.findCartById(req.params.cid);
    res.json(cartById);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createCart = async (req, res) => {
  try {
    const createCart = await CartsDao.createCart(req.body);
    res.status(201).json(createCart);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};


export const updateQuantityProdToCart = async (req, res) => {
  try {
    const { cid, pid } = req.params;
    const { newQuantity } = req.body;
    const quantity = parseInt(newQuantity);
    if (isNaN(quantity) || quantity < 0) {
      return res.status(400).json({ message: 'No es un número valido' });
    }

    const updatedProduct = await CartsService.updateQuantityProdToCart(cid, pid, quantity);
    res.status(201).json({ message: 'Producto Actualizado en el Carrito', info: updatedProduct });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addProductToCart = async (req, res) => {
  try {
    const product = await CartsService.addProductToCart(req.params.cid, req.params.pid);
    res.status(201).json({ message: 'Producto Agregado', info: product });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteCartById = async (req, res) => {
  try {
    const deleteCart = await CartsService.deleteCartById(req.params.cid);
    res.status(201).json({ message: 'Carrito Eliminado', info: deleteCart });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export const deleteProductFromCart = async (req, res) => {
  try {
    const deleteProdFromCart = await CartsService.deleteProductFromCart(req.params.cid, req.params.pid);
    res.status(201).json({ message: 'Producto Eliminado del carrito', info: deleteProdFromCart });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export const purchaseCart = async (req, res) => {
  try {
    const cartId = req.params.cid;
    const result = await CartsService.purchaseCart(cartId);
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};



/*import { cartsService } from "../service/carts.service";
import { CartsDao } from "../dao/carts.dao";

export const findAllCarts = async (req, res) => {
    try {
      const carts = await cartsService.findAllCarts();
      res.json(carts);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
export const findCartById = async (req, res) => {
    try {
      const cartById = await cartsService.findCartById(req.params.cid);
      res.json(cartById);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
 
export const createCart = async (req, res) => {
    try {
      const createCart = await CartsDao.createCart(req.body);
      res.status(201).json(createCart);
    } catch (error) {
      res.status(401).json({ message: error.message });
    }
  };
  
  
export const updateQuantityProdToCart = async (req, res) => {
    try {
          const { cid, pid } = req.params;
          const { newQuantity } = req.body;
          const quantity = parseInt(newQuantity);
          if (isNaN(quantity) || quantity < 0) {
            return res.status(400).json({ message: 'No es un número valido' });
          }
      
                const updatedProduct = await cartsService.updateQuantityProdToCart(cid, pid, quantity);
          res.status(201).json({ message: 'Producto Actualizado en el Carrito', info: updatedProduct });
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
  };
  
export const addProductToCart = async (req, res) => {
    try {
      const product = await cartsService.addProductToCart(req.params.cid, req.params.pid);
      res.status(201).json({ message: 'Producto Agregado', info: product });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
export const deleteCartById = async (req, res) => {
    try {
      const deleteCart = await cartsService.deleteCartById(req.params.cid);
      res.status(201).json({ message: 'Carrito Eliminado', info: deleteCart });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  
export const deleteProductFromCart = async (req, res) => {
    try {
      const deleteProdFromCart = await cartsService.deleteProductFromCart(req.params.cid, req.params.pid);
      res.status(201).json({ message: 'Producto Eliminado del carrito', info: deleteProdFromCart });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  
export const purchaseCart = async (req, res) => {
    try {
      const cartId = req.params.cid;
      const result = await cartsService.purchaseCart(cartId);
      res.status(200).json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  */
