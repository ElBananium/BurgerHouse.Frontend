import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ICategoriesService } from '../Services/CategoriesService';
import { IShopStateService } from '../Services/ShopStateService';

@Component({
  selector: 'main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  dataLoadedSubject = new Subject<void>();

  constructor(private categories : ICategoriesService, private shopState : IShopStateService) { }

  async ngOnInit(): Promise<void> {



    let categories = await this.categories.GetCategories()

    let items = await this.categories.GetItems(categories[0].id);

    this.shopState.SetState(categories[0].id, items, categories);
    this.dataLoadedSubject.next();

    


    
    
  }

}
