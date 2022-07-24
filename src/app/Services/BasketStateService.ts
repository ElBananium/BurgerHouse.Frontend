import { Item } from "src/api-module/Modules/Item";

export abstract class IBasketStateService
{
    public abstract AddItem(item : Item) : void;

    public abstract RemoveItem(item : Item) : void;

    public abstract GetItems() : Array<BasketItem>;

    public abstract IsItemInBasket(id : number) : boolean;

    public abstract GetItem(id : number) : BasketItem;

    public abstract DeleteItem(id : number) : void;

    public abstract DropBasket() : void;
}


export class BasketItem
{
    constructor(public item : Item, public count : number){}
}

export class BasketStateService implements IBasketStateService
{
    items! : Array<BasketItem>;

    public AddItem(item: Item): void {
        
        if(this.items.filter(x => x.item.Id == item.Id).length > 0)
        {
            this.items.filter(x => x.item.Id == item.Id)[0].count+=1;
            window.localStorage.setItem("basket",JSON.stringify(this.items) );
            return;
        }

        this.items.push(new BasketItem(item,1));
        window.localStorage.setItem("basket",JSON.stringify(this.items) );

    }
    public RemoveItem(item: Item): void {
        let itemf = this.items.filter(x => x.item.Id == item.Id)[0];

        if(itemf.count == 1)
        {
            this.items = this.items.filter(x => x.item.Id != item.Id);
        }
        itemf.count -=1;

        
        window.localStorage.setItem("basket",JSON.stringify(this.items) );
    }
    public GetItems(): BasketItem[] {
        return this.items;
    }

    constructor()
    {
        let basketstring = window.localStorage.getItem("basket");
        
        if(basketstring != null){
            this.items = JSON.parse(basketstring);
        }else
        {
            this.items = new Array<BasketItem>();
        }

        
    }
    public DropBasket(): void {
        this.items = new Array<BasketItem>();

        window.localStorage.removeItem("basket");
    }
    public DeleteItem(id: number): void {

        this.items = this.items.filter(x => x.item.Id != id);

        window.localStorage.setItem("basket",JSON.stringify(this.items) );

    }
    public IsItemInBasket(id: number): boolean {
        return this.items.filter(x => x.item.Id == id).length > 0
    }
    public GetItem(id: number): BasketItem {
        return this.items.filter(x => x.item.Id == id)[0];
    }

}