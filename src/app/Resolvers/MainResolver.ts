import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ICategoriesService } from "../Services/CategoriesService";
import { IShopStateService } from "../Services/ShopStateService";

@Injectable({
    providedIn : "root"
})

export class MainResolver implements Resolve<void> 
{
    async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<void> {
        
        

        let categories = await this.categoriesService.GetCategories();
        
        let nowCategory = categories[0].id;

        let items = await this.categoriesService.GetItems(categories[0].id);


        this.stateService.SetState(nowCategory, items, categories);
        

    }
    constructor(private stateService : IShopStateService, private categoriesService : ICategoriesService, private shopStateService : IShopStateService ){}

    

}