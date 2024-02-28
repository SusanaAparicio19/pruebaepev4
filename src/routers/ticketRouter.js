//modificado con tutor

import { Router } from 'express';
import { createTicketPost, findAllTicketsGet, findTicketByIdGet, updateTicketPut, deleteTicketById } from '../controllers/ticketRouter.controller.js'

const ticketRouter = Router();

ticketRouter.get("/", findAllTicketsGet);
ticketRouter.get("/:id", findTicketByIdGet);
ticketRouter.post("/", createTicketPost);
ticketRouter.put("/:id", updateTicketPut);
ticketRouter.delete("/:id", deleteTicketById);

/*


ticketsRouter.post('/generate', TicketController.createTicket);
*/
export default ticketRouter;

/*
import { Router } from 'express';
import { ticketController } from '../controllers/ticketRouter.controller.js'

const ticketsRouter = Router();

ticketsRouter.post('/generate', ticketController.createTicket);

export default ticketsRouter;
*/