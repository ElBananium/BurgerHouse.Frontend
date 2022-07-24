import { Injectable } from "@angular/core";
import { OrderedItem } from "../Modules/OrderedItem";
import { OrderInfo } from "../Modules/OrderInfo";







@Injectable()
export class ApiOrdersZatichka implements ApiOrders
{
    public async GetOrders(token: string): Promise<OrderInfo[]> {
        await new Promise(r => setTimeout(r, 2000));

        
        return [
            await (await this.GetOrder(1,"sa")),
            await this.GetOrder(2,"ы"),
            await this.GetOrder(3,"sis"),
            await this.GetOrder(4,"sis"),
            await this.GetOrder(5,"sis"),
            await this.GetOrder(6,"sis"),
            await this.GetOrder(7,"sis"),
            await this.GetOrder(8,"sis")
        ]
    }
    public async SendOrder(restrauntId : number, items : Array<OrderedItem>, token : string): Promise<number> {
        await new Promise(r => setTimeout(r, 2000));


        return 5;
    }
    public async GetOrder(orderId: number, token : string): Promise<OrderInfo> {
        
        await new Promise(r => setTimeout(r, 100));

        var orderreditem = new Array<OrderedItem>();
        orderreditem.push(new OrderedItem(101,2));
        orderreditem.push(new OrderedItem(201,3));
        
        orderreditem.push(new OrderedItem(103,4));

        return new OrderInfo(orderId, 1,1,orderreditem, 1000*orderId );
    }
}











@Injectable(
    {
        providedIn : "root",
        useClass : ApiOrdersZatichka
    }
)


export abstract class ApiOrders
{
    public abstract SendOrder(restrauntId : number, items : Array<OrderedItem>, token : string) :Promise<number>


    public abstract GetOrder(orderId : number, token : string) : Promise<OrderInfo>

    public abstract GetOrders(token : string) : Promise<Array<OrderInfo>>
    

}