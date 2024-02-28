import { ticketDao } from '../dao/ticket.dao.js';

class TicketRepository {
    async createTicket(ticketData) {
        try {
        return await ticketDao.createTicket(ticketData);
        } catch (error) {
        throw new Error("Error creating ticket in repository");
        }
    }

    async findAllTickets() {    
        try {   
            return await ticketDao.find();
        } catch (error) {
            throw new Error("Error reading ticket in Repository");
        }
    }

    async findTicketById(ticketId) {
        try {
            return await ticketDao.findById(ticketId);
        } catch (error) {
            throw new Error("Error reading ticket in Repository"); 
        }
    }

    async updateTicket(ticketId, updatedTicket) {
        try {
            return await ticketDao.findByIdAndUpdate(ticketId, updatedTicket);
        } catch (error) {
            throw new Error("Error updating ticket in Repository");  
        }
    }

    async deleteTicketById(ticketId) {
        try {
            return await ticketDao.findByIdAndDelete(ticketId);
        } catch (error) {
            throw new Error("Error deleting ticket in Repository");     
        }
    }
}

export const ticketRepository = new TicketRepository();