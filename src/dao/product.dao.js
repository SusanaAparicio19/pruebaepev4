//MODIFICADO DEL TUTOR

import { ProductsModel } from '../models/products.model.js';

class ProductDao {
    async getAllProducts() {
        return await ProductsModel.find().lean();
    }

    async getTotalProducts(query) {
        try {
            let findQuery = {};

            if (query) {
                // Implementa la lógica de búsqueda si es necesario
                findQuery = { category: query.category };
            }

            const totalProducts = await ProductsModel.countDocuments(findQuery);
            return totalProducts;
        } catch (error) {
            throw new Error(`Error al obtener el número total de productos: ${error.message}`);
        }
    }
    
    async getProductById(productId) {
        try {
            const productById = await ProductsModel.findById(productId).lean();

            if (!productById) {
                throw new Error('El producto buscado no existe');
            }

            return productById;
        } catch (error) {
            throw new Error(`Error al obtener el producto`);
        }
    }

    async addProduct(productData) {
        try {
            const newProduct = await ProductsModel.create(productData);
            return newProduct;
        } catch (error) {
            throw new Error(`Error al crear un nuevo producto`);
        }
    }

    async updateProduct(productId, updatedProductData) {
        try {
            const updatedProduct = await ProductsModel.findByIdAndUpdate(
                productId,
                { $set: updatedProductData },
                { new: true }
            );

            if (!updatedProduct) {
                throw new Error(`No se encontró el producto`);
            }

            return updProducto;
        } catch (error) {
            throw new Error(`Error al actualizar el producto`);
        }
    }

    async deleteProduct(productId) {
        try {
            const deletedProducto = await ProductsModel.findByIdAndDelete(productId);

            if (!deletedProducto) {
                throw new Error(`No se encontró el producto`);
            }

            return deletedProducto;
        } catch (error) {
            throw new Error(`Error al eliminar el producto`);
        }
    }
}

export const productDao = new ProductDao()

/*
import { productsModel } from '../models/products.model.js';

class ProductDao {
    async getAllProducts() {
        return await productsModel.find().lean();
    }
    
    async getProductById(productId) {
        try {
            const productById = await productsModel.findById(productId).lean();

            if (!productById) {
                throw new Error('El producto buscado no existe');
            }

            return productById;
        } catch (error) {
            throw new Error(`Error al obtener el producto`);
        }
    }

    async addProduct(productData) {
        try {
            const newProduct = await productsModel.create(productData);
            return newProduct;
        } catch (error) {
            throw new Error(`Error al crear un nuevo producto`);
        }
    }

    async updateProduct(productId, updatedProductData) {
        try {
            const updatedProduct = await productsModel.findByIdAndUpdate(
                productId,
                { $set: updatedProductData },
                { new: true }
            );

            if (!updatedProduct) {
                throw new Error(`No se encontró el producto`);
            }

            return updProducto;
        } catch (error) {
            throw new Error(`Error al actualizar el producto`);
        }
    }

    async deleteProduct(productId) {
        try {
            const deletedProducto = await productsModel.findByIdAndDelete(productId);

            if (!deletedProducto) {
                throw new Error(`No se encontró el producto`);
            }

            return deletedProducto;
        } catch (error) {
            throw new Error(`Error al eliminar el producto`);
        }
    }
}

export const productDao = new ProductDao()*/