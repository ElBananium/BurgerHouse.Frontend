import { Category } from "src/api-module/Modules/Category";
import { Item } from "src/api-module/Modules/Item";

export abstract class IShopStateService
{
    public abstract GetCurrentCategoryId() : number;

    public abstract GetCurrentItemList() : Array<Item>;

    public abstract GetCurrentCategories() : Array<Category>;

    public abstract SetState(categoryId : number, itemList : Array<Item>, categoriesList : Array<Category>) : void;
}


export class ShopStateService implements IShopStateService
{
    private currentCategoryId! : number;

    private currentItemList! : Array<Item>;

    private currentCategoriesList! : Array<Category>;

    public GetCurrentCategoryId(): number {
        return this.currentCategoryId;
    }
    public GetCurrentItemList(): Item[] {
        return this.currentItemList;
    }
    public SetState(categoryId: number, itemList: Item[], categoriesList : Array<Category>): void {
        
        this.currentCategoryId = categoryId;

        this.currentItemList = itemList;

        this.currentCategoriesList = categoriesList;

    }

    
    public GetCurrentCategories(): Category[] {
        return this.currentCategoriesList;
    }

}