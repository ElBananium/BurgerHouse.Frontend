import { Injectable } from "@angular/core";
import { Category } from "../Modules/Category";
import { Item } from "../Modules/Item";



@Injectable()
export class ApiCategoriesZatichka implements ApiCategories
{
    public async GetItem(itemId: number): Promise<Item> {
        
        await new Promise(r => setTimeout(r, 100));


        return new Item(itemId, 1, "Бургер"+itemId, "ksfaklasfasfasfklaskfas", itemId*7895,"https://ma-prod-cdn.mcdonalds.ru/product/36124d9a24ab40f9bd709bedf1c98cbc/android/l/main.png" );



    }
    public async GetItems(categoryId : number): Promise<Item[]> {
        
        await new Promise(r => setTimeout(r, 200));

        let a = new Array<Item>();


        for(let i = 1 ; i<30; i++)
        {
            a.push(new Item(categoryId*100+i,categoryId,"Бургер Sis"+i+" Из категории "+categoryId, "111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111Описания бургера Sis"+i, i*i+1000,"https://ma-prod-cdn.mcdonalds.ru/product/36124d9a24ab40f9bd709bedf1c98cbc/android/l/main.png"));
        }
        return a;
    }




    public async GetCategories(): Promise<Category[]> {
        
        await new Promise(r => setTimeout(r, 2000));
        let a = new Array<Category>();
        
        for(let i = 1; i <= 4; i++)
        {
            a.push(new Category(i,"Бургеры "+i))
        }

        return a;


    }
    

}



@Injectable(
    {
        providedIn : "root",
        useClass : ApiCategoriesZatichka
    }
)


export abstract class ApiCategories
{
    public abstract GetCategories() :Promise<Array<Category>>


    public abstract GetItems(categoryId : number) : Promise<Array<Item>>

    public abstract GetItem(itemId : number) : Promise<Item>
    

}
