//MODIFICADO DEL TUTOR

import { isUser, isAdmin, soloLogueadosApi, isPremium } from '../controllers/autorizar.controller.js'

export const usersOnly = isUser;
export const adminsOnly = isAdmin;
export const premiumOnly = isPremium;
export const soloLogueados = soloLogueadosApi
/*
import { isUser, isAdmin } from '../controllers/autorizar.controller.js'

export const usersOnly = isUser;
export const adminsOnly = isAdmin;*/