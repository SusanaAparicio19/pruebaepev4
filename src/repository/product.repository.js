import { productDao } from '../dao/product.dao.js';

class ProductRepository {
    /*async getAllProducts() {
        return await productDao .getAllProducts();
    }*/
    
    async getAllProducts({ limit = 10, skip = 0, sort, query }) {
        let findQuery = {};
    
        if (query) {
            // Implementar lógica de búsqueda aquí
            // Por ejemplo, búsqueda por categoría o disponibilidad
            findQuery = { category: query };
        }
    
        const sortQuery = sort ? { price: sort === 'asc' ? 1 : -1 } : {};
    
        return await ProductsModel.find(findQuery)
                                   .sort(sortQuery)
                                   .skip(skip)
                                   .limit(limit)
                                   .lean();
    }

    // Método para obtener el total de productos (para la paginación)
    async getTotalProducts(query) {
        let findQuery = {};
    
        if (query) {
            // Implementar lógica de búsqueda aquí
            findQuery = { category: query };
        }
    
        return await ProductsModel.countDocuments(findQuery);
    }

    async getProductById(productId) {
        return await productDao .getProductById(productId);
    }

    async addProduct(productData) {
        return await productDao .addProduct(productData);
    }

    async updateProduct(productId, updatedProductData) {
        return await productDao .updateProduct(productId, updatedProductData);
    }

    async deleteProduct(productId) {
        return await productDao .deleteProduct(productId);
    }
}

export const productRepository = new ProductRepository()
