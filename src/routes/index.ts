

import Home from "~/pages/Home";
import Ticket from "~/pages/Ticket/Ticket";
import TicketCheck from "~/pages/TicketCheck/TicketCheck";
import Setting from "~/pages/Setting/Setting";

const publicRoutes : any =[
    {
        path : '/', component : Home 
    },
    {
        path : '/ticket', component : Ticket 
    },
    {
        path : '/ticketcheck', component : TicketCheck 
    },
    {   
        path : '/setting', component : Setting 
    },
]
const privateRoutes : any=[

]
export {publicRoutes,privateRoutes};