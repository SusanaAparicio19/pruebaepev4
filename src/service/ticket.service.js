import { ticketRepository } from '../repository/ticket.repository.js'
import { cartService } from './carts.service.js';

class TicketService {
    async createTicket(user) {
      try {
        const cartId = user.cart;
        const cart = await cartService.findCartById(cartId);
        if (!cart) throw new Error("Cart not found");
  
        const totalAmount = cart.product.reduce((total, product) => {
          return total + product.pid.price * product.quantity;
        }, 0);
  
        const ticket = await TicketsModel.createTicket({
          amount: totalAmount,
          purchaser: user.email,
        });
  
        return ticket;
      } catch (error) {
        throw new Error("Error creating ticket in service");
      }
    }
    
    async findAllTickets() {
      try {
        return await ticketRepository.find();
      } catch (error) {
        throw new Error("Error getting all tickets in service");
      }
    }
  
    async findTicketById(ticketId) {
        try {
            return await ticketRepository.findById(ticketId);
      } catch (error) {
        throw new Error("Error getting ticket in service");
      }
    }
 
    async updateTicket(ticketId, updatedTicket) {
        try {
            return await ticketRepository.findByIdAndUpdate(ticketId, updatedTicket);
        } catch (error) {
            throw new Error("Error updating ticket in service");  
        }
    }    

    async deleteTicketById(ticketId) {
        try {
            return await ticketRepository.findByIdAndDelete(ticketId);
      } catch (error) {
        throw new Error("Error deleting ticket in service");
      }
    }
  
  }
  
  export const ticketService = new TicketService();

/*

class TicketService {
    static async createTicket(purchaser, products) {
        try {
            const amount = await ProductService.calculateTotal(products);

            const ticketData = { code: generateUniqueTicketCode(), purchase_datetime: new Date(), amount, purchaser, products };
            const ticket = await ticketDao.createTicket(ticketData);

            return ticket;
        } catch (error) {
            throw error;
        }
    }
}
export const ticketService = new TicketService();*/