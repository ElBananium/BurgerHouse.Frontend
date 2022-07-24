import { Injectable } from "@angular/core";
import { OrderedItem } from "src/api-module/Modules/OrderedItem";
import { OrderInfo } from "src/api-module/Modules/OrderInfo";
import { ApiOrders } from "src/api-module/Services/ApiOrdersService";
import { IAuthService } from "./AuthService";
import { BasketItem } from "./BasketStateService";

export abstract class IOrdersService

{
    public abstract GetOrder(orderId : number) : Promise<OrderInfo>;


    public abstract SendOrder(items : Array<BasketItem>) : Promise<number>;


    public abstract GetStatusInfo(madePercent : number) : OrderStatus

    public abstract GetStatuses() : Array<OrderStatus>


}

@Injectable()

export class OrdersSender implements IOrdersService
{


    
    public SendOrder(items: BasketItem[]): Promise<number> {
        
        if(!this.apiAuth.IsLoggedIn()) throw new Error("Not authorized");


        let ids = Array.from(items, x => new OrderedItem(x.item.Id, x.count));

         return this.orderApi.SendOrder(1,ids,this.apiAuth.GetToken());
    }

    constructor(private orderApi : ApiOrders, private apiAuth : IAuthService) 
    {
        
    }
    public GetStatusInfo(madePercent: number): OrderStatus {
        
        let laststatus = new OrderStatus("Заказ не принят",0,0);

        for(let status of statusList)
        {
            if(madePercent >= status.breakPoint) laststatus = status;
        }

        return laststatus;
    }



    public GetStatuses(): OrderStatus[] {
        return statusList;
    }



    public GetOrder(orderId: number) {
        if(!this.apiAuth.IsLoggedIn()) throw new Error("Not authorized");

       return this.orderApi.GetOrder(orderId,this.apiAuth.GetToken());
       
    }
    
}
export class OrderStatus
{
    constructor(public statusString : string, public breakPoint : number, public weight : number){}
}


const statusList = 
[
    new OrderStatus("Заказ отменён",-1,0),
    new OrderStatus("Заказ принят",1,2),
    new OrderStatus("Готовится",20,3),
    new OrderStatus("Готов к выдаче",95,40),
    new OrderStatus("Выдано",100,41),

    

]


