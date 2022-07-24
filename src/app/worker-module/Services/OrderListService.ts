import { Injectable } from "@angular/core";
import { Item } from "src/api-module/Modules/Item";
import { OrderInfo } from "src/api-module/Modules/OrderInfo";
import { ApiCategories } from "src/api-module/Services/ApiCategories";
import { ApiOrders } from "src/api-module/Services/ApiOrdersService";
import { IAuthService } from "src/app/Services/AuthService";




export abstract class IOrderListService
{
    public abstract GetOrders() : Promise<Array<OrderInfo>>

    public abstract ClearCash() : void;

    public abstract IsHaveCash() : boolean;

    public abstract GetCashedOrders() : Array<OrderInfo>

    public abstract LoadItems() : Promise<void>

    public abstract GetItems() : Array<Item>

    public abstract IsItemsLoaded() : Boolean;
}


@Injectable()
export class OrderListService implements IOrderListService
{

    isHaveCash = false;

    isLoadedItems = false;

    cashedOrders! : Array<OrderInfo>


    loadedItems = new Array<Item>();

    public async GetOrders(): Promise<Array<OrderInfo>> {
     
        
        

        if(!this.authService.IsLoggedIn()) throw new Error("Not authorized");

        let orders = await this.orderService.GetOrders(this.authService.GetToken());

        this.cashedOrders = orders;

        this.isHaveCash = true;

        return orders;
    }


    constructor( private orderService : ApiOrders, private authService : IAuthService, private apicategories : ApiCategories){}
    public ClearCash(): void {
        this.isHaveCash = false;
    }
    public IsItemsLoaded(): Boolean {
        return this.isLoadedItems;
    }
    public async LoadItems(): Promise<void> {

        let categories = await this.apicategories.GetCategories();

        for(let cat of categories)
        {
            let items = await this.apicategories.GetItems(cat.id);

            this.loadedItems = this.loadedItems.concat(items);

            
        }

        this.isLoadedItems = true;

    }
    public GetItems(): Item[] {
        return this.loadedItems;
    }
    public IsHaveCash(): boolean {
        return this.isHaveCash;
    }
    public GetCashedOrders(): OrderInfo[] {
        return this.cashedOrders;
    }
    
}