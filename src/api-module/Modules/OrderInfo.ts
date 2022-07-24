import { OrderedItem } from "./OrderedItem";

export class OrderInfo
{
    

    constructor(public id : number, public madePercent : number, public restrauntId : number,
        public orderedItems: Array<OrderedItem>, public price : number
    ){}
  }