import { Injectable } from "@angular/core";
import { Category } from "src/api-module/Modules/Category";
import { Item } from "src/api-module/Modules/Item";
import { ApiCategories } from "src/api-module/Services/ApiCategories";
import { ILoadingStateService } from "./LoadingStateService";



export abstract class ICategoriesService
{
    public abstract GetCategories() : Promise<Category[]>;

    public abstract GetItems(categoryid : number) : Promise<Item[]>;

    public abstract GetItem(itemId : number) : Promise<Item>;
} 



@Injectable()
export class CategoriesService implements ICategoriesService
{
    public GetCategories(): Promise<Category[]> {
        
        
        return this.apiCatServ.GetCategories();
    }

    
    public GetItems(categoryid: number): Promise<Item[]> {
        return this.apiCatServ.GetItems(categoryid);
    }

    public GetItem(itemId : number) : Promise<Item>
    {
        return this.apiCatServ.GetItem(itemId);
    }

    constructor(private apiCatServ : ApiCategories, private loadingService : ILoadingStateService){}
    
    
}